import { useEffect, useRef, useState } from 'react'
import type { PointerEvent as ReactPointerEvent } from 'react'
import styles from './GameBoyEmulator.module.scss'

const ROM_URL = '/blobbos-apple-catch.gb'

type Button = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT' | 'A' | 'B' | 'START' | 'SELECT'

const ALL_BUTTONS: Button[] = [
  'UP',
  'DOWN',
  'LEFT',
  'RIGHT',
  'A',
  'B',
  'START',
  'SELECT',
]

type Status = 'idle' | 'loading' | 'playing' | 'paused' | 'error'

export default function GameBoyEmulator() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const wasmBoyRef = useRef<any>(null)
  const touchStateRef = useRef<Record<Button, boolean>>({
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

  useEffect(() => {
    return () => {
      const wb = wasmBoyRef.current
      if (wb?.pause) {
        try {
          wb.pause()
        } catch {
          /* ignore */
        }
      }
    }
  }, [])

  const ensureLoaded = async () => {
    if (wasmBoyRef.current) return wasmBoyRef.current
    if (!canvasRef.current) return null

    const { WasmBoy } = await import('wasmboy')
    wasmBoyRef.current = WasmBoy

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
      canvasRef.current
    )

    WasmBoy.ResponsiveGamepad.addPlugin({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onGetState: (state: Record<string, any>) => {
        const touch = touchStateRef.current
        for (const btn of ALL_BUTTONS) {
          if (touch[btn]) state[btn] = true
        }
        return state
      },
    })

    const response = await fetch(ROM_URL)
    if (!response.ok) {
      throw new Error(`ROM fetch failed: ${response.status}`)
    }
    const buffer = await response.arrayBuffer()
    await WasmBoy.loadROM(new Uint8Array(buffer))

    return WasmBoy
  }

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (status !== 'playing') return
      const trapped = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']
      if (trapped.includes(e.code) || e.code === 'Space') {
        e.preventDefault()
      }
    }
    window.addEventListener('keydown', onKeyDown, { passive: false })
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [status])

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
      { threshold: [0, 0.5, 1] }
    )
    observer.observe(el)
    return () => {
      if (timer) clearTimeout(timer)
      observer.disconnect()
    }
  }, [gameboyMode])

  const handlePlay = async () => {
    try {
      if (!wasmBoyRef.current) {
        setStatus('loading')
      }
      const wb = await ensureLoaded()
      if (!wb) return
      if (wb.resumeAudioContext) await wb.resumeAudioContext()
      await wb.play()
      setStatus('playing')
    } catch (err) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : String(err))
    }
  }

  const handlePause = async () => {
    const wb = wasmBoyRef.current
    if (!wb) return
    await wb.pause()
    setStatus('paused')
  }

  const handleReset = async () => {
    const wb = wasmBoyRef.current
    if (!wb) return
    await wb.reset()
    setStatus('paused')
  }

  const press = (btn: Button) => (e: ReactPointerEvent<HTMLButtonElement>) => {
    e.preventDefault()
    touchStateRef.current[btn] = true
    e.currentTarget.setPointerCapture?.(e.pointerId)
  }
  const release = (btn: Button) => (e: ReactPointerEvent<HTMLButtonElement>) => {
    e.preventDefault()
    touchStateRef.current[btn] = false
  }
  const touchProps = (btn: Button) => ({
    onPointerDown: press(btn),
    onPointerUp: release(btn),
    onPointerCancel: release(btn),
    onPointerLeave: release(btn),
    onContextMenu: (e: React.MouseEvent) => e.preventDefault(),
  })

  return (
    <div
      ref={wrapperRef}
      className={`${styles.wrapper} ${gameboyMode ? styles.gameboyMode : ''}`}
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
            <canvas ref={canvasRef} className={styles.canvas} />
          {status !== 'playing' && (
            <button
              type="button"
              className={styles.overlayButton}
              onClick={handlePlay}
              disabled={status === 'loading' || status === 'error'}
            >
              {status === 'idle' && '▶ Play'}
              {status === 'loading' && 'Loading…'}
              {status === 'paused' && '▶ Resume'}
              {status === 'error' && (errorMessage ?? 'Failed to load ROM')}
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
          <button
            type="button"
            className={styles.controlButton}
            onClick={handlePause}
          >
            Pause
          </button>
        ) : (
          <button
            type="button"
            className={styles.controlButton}
            onClick={handlePlay}
            disabled={status === 'loading' || status === 'error'}
          >
            Play
          </button>
        )}
        <button
          type="button"
          className={styles.controlButton}
          onClick={handleReset}
          disabled={status === 'idle' || status === 'loading' || status === 'error'}
        >
          Reset
        </button>
      </div>

      <p className={styles.keymap}>
        <strong>Keys:</strong> Arrows = D-Pad, X = A, Z = B, Enter = Start, Shift = Select
      </p>
    </div>
  )
}
