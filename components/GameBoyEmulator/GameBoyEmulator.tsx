import { useEffect, useRef, useState } from 'react'
import type {
  FocusEvent as ReactFocusEvent,
  KeyboardEvent as ReactKeyboardEvent,
  PointerEvent as ReactPointerEvent,
} from 'react'
import type { WasmBoyApi, WasmBoyButton, WasmBoyControllerState } from 'wasmboy'
import styles from './GameBoyEmulator.module.scss'

const ROM_URL = '/blobbos-apple-catch.gb'

const ALL_BUTTONS: WasmBoyButton[] = ['UP', 'DOWN', 'LEFT', 'RIGHT', 'A', 'B', 'START', 'SELECT']

type Status = 'idle' | 'loading' | 'playing' | 'paused' | 'error'

export default function GameBoyEmulator() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const wasmBoyRef = useRef<WasmBoyApi | null>(null)
  const loadingPromiseRef = useRef<Promise<WasmBoyApi> | null>(null)
  const pluginCleanupRef = useRef<(() => void) | null>(null)
  const abortControllerRef = useRef<AbortController | null>(null)
  const mountedRef = useRef(true)
  const touchStateRef = useRef<Record<WasmBoyButton, boolean>>({
    UP: false,
    DOWN: false,
    LEFT: false,
    RIGHT: false,
    A: false,
    B: false,
    START: false,
    SELECT: false,
  })

  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [gameboyMode, setGameboyMode] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    mountedRef.current = true

    return () => {
      mountedRef.current = false
      abortControllerRef.current?.abort()
      pluginCleanupRef.current?.()
      pluginCleanupRef.current = null

      const wb = wasmBoyRef.current
      if (wb) {
        wb.ResponsiveGamepad.Keyboard.disable()
        void wb.pause().catch(() => undefined)
      }
    }
  }, [])

  const resetTouchState = () => {
    for (const button of ALL_BUTTONS) {
      touchStateRef.current[button] = false
    }
  }

  const ensureLoaded = async (): Promise<WasmBoyApi | null> => {
    if (wasmBoyRef.current) return wasmBoyRef.current
    if (loadingPromiseRef.current) return loadingPromiseRef.current
    if (!canvasRef.current) return null

    const canvas = canvasRef.current
    const abortController = new AbortController()
    abortControllerRef.current = abortController

    const loadPromise = (async () => {
      const { WasmBoy } = await import('wasmboy')

      await WasmBoy.config(
        {
          headless: false,
          useGbcWhenOptional: false,
          isAudioEnabled: true,
          frameSkip: 0,
          audioBatchProcessing: true,
          timersBatchProcessing: false,
          audioAccumulateSamples: true,
          graphicsBatchProcessing: false,
          graphicsDisableScanlineRendering: false,
          tileRendering: true,
          tileCaching: true,
          gameboyFPSCap: 60,
        },
        canvas,
      )

      const removePlugin = WasmBoy.ResponsiveGamepad.addPlugin({
        onGetState: (state: WasmBoyControllerState) => {
          for (const button of ALL_BUTTONS) {
            if (touchStateRef.current[button]) state[button] = true
          }
          return state
        },
      })

      try {
        const response = await fetch(ROM_URL, { signal: abortController.signal })
        if (!response.ok) {
          throw new Error(`ROM fetch failed: ${response.status}`)
        }
        const buffer = await response.arrayBuffer()
        await WasmBoy.loadROM(new Uint8Array(buffer))

        if (!mountedRef.current) {
          throw new DOMException('Emulator was removed while loading', 'AbortError')
        }

        pluginCleanupRef.current = removePlugin
        wasmBoyRef.current = WasmBoy
        return WasmBoy
      } catch (error) {
        removePlugin()
        throw error
      }
    })()

    loadingPromiseRef.current = loadPromise

    try {
      return await loadPromise
    } finally {
      if (loadingPromiseRef.current === loadPromise) {
        loadingPromiseRef.current = null
      }
      if (abortControllerRef.current === abortController) {
        abortControllerRef.current = null
      }
    }
  }

  useEffect(() => {
    if (gameboyMode) return
    const el = wrapperRef.current
    if (!el || typeof IntersectionObserver === 'undefined') return

    let timer: ReturnType<typeof setTimeout> | null = null
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          if (!timer) {
            timer = setTimeout(() => {
              setGameboyMode(true)
            }, 800)
          }
        } else if (timer) {
          clearTimeout(timer)
          timer = null
        }
      },
      { threshold: [0, 0.5, 1] },
    )
    observer.observe(el)
    return () => {
      if (timer) clearTimeout(timer)
      observer.disconnect()
    }
  }, [gameboyMode])

  const handlePlay = async () => {
    try {
      setErrorMessage(null)
      setStatus('loading')
      const wb = await ensureLoaded()
      if (!wb || !mountedRef.current) return
      setIsLoaded(true)
      await wb.resumeAudioContext()
      await wb.play()
      if (!mountedRef.current) return
      setStatus('playing')

      requestAnimationFrame(() => {
        if (!mountedRef.current) return
        wrapperRef.current?.focus({ preventScroll: true })
        wb.ResponsiveGamepad.Keyboard.enable()
      })
    } catch (error) {
      if (!mountedRef.current) return
      resetTouchState()
      wasmBoyRef.current?.ResponsiveGamepad.Keyboard.disable()
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : String(error))
    }
  }

  const handlePause = async () => {
    const wb = wasmBoyRef.current
    if (!wb) return
    try {
      await wb.pause()
      resetTouchState()
      if (mountedRef.current) {
        setErrorMessage(null)
        setStatus('paused')
      }
    } catch (error) {
      if (!mountedRef.current) return
      resetTouchState()
      wb.ResponsiveGamepad.Keyboard.disable()
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : String(error))
    }
  }

  const handleReset = async () => {
    const wb = wasmBoyRef.current
    if (!wb) return
    try {
      await wb.pause()
      await wb.reset()
      resetTouchState()
      if (mountedRef.current) {
        setErrorMessage(null)
        setStatus('paused')
      }
    } catch (error) {
      if (!mountedRef.current) return
      resetTouchState()
      wb.ResponsiveGamepad.Keyboard.disable()
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : String(error))
    }
  }

  const handleFocus = (event: ReactFocusEvent<HTMLDivElement>) => {
    if (status === 'playing' && !(event.target instanceof HTMLButtonElement)) {
      wasmBoyRef.current?.ResponsiveGamepad.Keyboard.enable()
    } else {
      wasmBoyRef.current?.ResponsiveGamepad.Keyboard.disable()
    }
  }

  const handleBlur = (event: ReactFocusEvent<HTMLDivElement>) => {
    const nextTarget = event.relatedTarget
    if (nextTarget instanceof Node && event.currentTarget.contains(nextTarget)) return
    wasmBoyRef.current?.ResponsiveGamepad.Keyboard.disable()
  }

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (status !== 'playing') return
    if (event.target instanceof HTMLButtonElement) return

    const trapped = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space']
    if (trapped.includes(event.code)) event.preventDefault()
  }

  const press = (btn: WasmBoyButton) => (e: ReactPointerEvent<HTMLButtonElement>) => {
    e.preventDefault()
    touchStateRef.current[btn] = true
    e.currentTarget.setPointerCapture?.(e.pointerId)
  }
  const release = (btn: WasmBoyButton) => (e: ReactPointerEvent<HTMLButtonElement>) => {
    e.preventDefault()
    touchStateRef.current[btn] = false
  }
  const touchProps = (btn: WasmBoyButton) => ({
    disabled: status !== 'playing',
    onPointerDown: press(btn),
    onPointerUp: release(btn),
    onPointerCancel: release(btn),
    onPointerLeave: release(btn),
    onContextMenu: (e: React.MouseEvent) => e.preventDefault(),
  })

  const statusText: Record<Status, string> = {
    idle: 'Ready to play',
    loading: 'Loading game',
    playing: 'Game playing',
    paused: 'Game paused',
    error: 'Game error',
  }

  return (
    <div
      ref={wrapperRef}
      className={`${styles.wrapper} ${gameboyMode ? styles.gameboyMode : ''}`}
      role="region"
      aria-label="Blobbo's Apple Catch Game Boy emulator"
      aria-describedby="emulator-status emulator-instructions"
      tabIndex={0}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    >
      <div className={styles.screenFrame}>
        <div className={styles.bezelTop} aria-hidden="true">
          <span className={styles.bezelStripes} />
          <span className={styles.bezelLabel}>DOT MATRIX WITH STEREO SOUND</span>
          <span className={styles.bezelStripes} />
        </div>
        <div className={styles.screenWrap}>
          <div className={styles.bezelBattery} aria-hidden="true">
            <span className={styles.batteryDot} />
            <span className={styles.batteryText}>BATTERY</span>
          </div>
          <div className={styles.lcdArea}>
            <canvas
              ref={canvasRef}
              className={styles.canvas}
              role="img"
              aria-label="Game Boy game screen"
            >
              The Game Boy game screen requires canvas support.
            </canvas>
            {status !== 'playing' && (
              <button
                type="button"
                className={styles.overlayButton}
                onClick={handlePlay}
                disabled={status === 'loading'}
              >
                {status === 'idle' && '▶ Play'}
                {status === 'loading' && 'Loading…'}
                {status === 'paused' && '▶ Resume'}
                {status === 'error' && '↻ Retry'}
              </button>
            )}
          </div>
        </div>

        <div className={styles.touchOverlay}>
          <div className={styles.dpad}>
            <button
              type="button"
              className={`${styles.touchBtn} ${styles.dpadUp}`}
              aria-label="Up"
              {...touchProps('UP')}
            >
              ▲
            </button>
            <button
              type="button"
              className={`${styles.touchBtn} ${styles.dpadLeft}`}
              aria-label="Left"
              {...touchProps('LEFT')}
            >
              ◀
            </button>
            <button
              type="button"
              className={`${styles.touchBtn} ${styles.dpadRight}`}
              aria-label="Right"
              {...touchProps('RIGHT')}
            >
              ▶
            </button>
            <button
              type="button"
              className={`${styles.touchBtn} ${styles.dpadDown}`}
              aria-label="Down"
              {...touchProps('DOWN')}
            >
              ▼
            </button>
          </div>
          <div className={styles.actionButtons}>
            <button
              type="button"
              className={`${styles.touchBtn} ${styles.actionB}`}
              aria-label="B"
              {...touchProps('B')}
            >
              B
            </button>
            <button
              type="button"
              className={`${styles.touchBtn} ${styles.actionA}`}
              aria-label="A"
              {...touchProps('A')}
            >
              A
            </button>
          </div>
          <div className={styles.startSelectRow}>
            <button
              type="button"
              className={`${styles.touchBtn} ${styles.startSelectBtn}`}
              aria-label="Select"
              {...touchProps('SELECT')}
            >
              Select
            </button>
            <button
              type="button"
              className={`${styles.touchBtn} ${styles.startSelectBtn}`}
              aria-label="Start"
              {...touchProps('START')}
            >
              Start
            </button>
          </div>
        </div>
      </div>

      <div className={styles.controlsRow}>
        {status === 'playing' ? (
          <button type="button" className={styles.controlButton} onClick={handlePause}>
            Pause
          </button>
        ) : (
          <button
            type="button"
            className={styles.controlButton}
            onClick={handlePlay}
            disabled={status === 'loading'}
          >
            {status === 'error' ? 'Retry' : 'Play'}
          </button>
        )}
        <button
          type="button"
          className={styles.controlButton}
          onClick={handleReset}
          disabled={!isLoaded || status === 'loading'}
        >
          Reset
        </button>
      </div>

      <p id="emulator-status" className={styles.visuallyHidden} role="status" aria-live="polite">
        {statusText[status]}
      </p>

      {errorMessage && (
        <p className={styles.error} role="alert">
          {errorMessage}
        </p>
      )}

      <p id="emulator-instructions" className={styles.keymap}>
        <strong>Keys:</strong> Arrows = D-Pad, X = A, Z = B, Enter = Start, Shift = Select
      </p>
    </div>
  )
}
