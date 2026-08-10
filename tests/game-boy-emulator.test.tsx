import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

const emulatorMocks = vi.hoisted(() => {
  const removePlugin = vi.fn()
  const keyboard = {
    enable: vi.fn(),
    disable: vi.fn(),
  }
  const WasmBoy = {
    config: vi.fn().mockResolvedValue(undefined),
    loadROM: vi.fn().mockResolvedValue(undefined),
    play: vi.fn().mockResolvedValue(undefined),
    pause: vi.fn().mockResolvedValue(undefined),
    reset: vi.fn().mockResolvedValue(undefined),
    resumeAudioContext: vi.fn().mockResolvedValue(undefined),
    ResponsiveGamepad: {
      addPlugin: vi.fn(() => removePlugin),
      Keyboard: keyboard,
    },
  }

  return { keyboard, removePlugin, WasmBoy }
})

vi.mock('wasmboy', () => ({ WasmBoy: emulatorMocks.WasmBoy }))

import GameBoyEmulator from '../components/GameBoyEmulator/GameBoyEmulator'

const successfulRomResponse = () => ({
  ok: true,
  status: 200,
  arrayBuffer: vi.fn().mockResolvedValue(new Uint8Array([1, 2, 3]).buffer),
})

describe('GameBoyEmulator', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    emulatorMocks.WasmBoy.config.mockResolvedValue(undefined)
    emulatorMocks.WasmBoy.loadROM.mockResolvedValue(undefined)
    emulatorMocks.WasmBoy.play.mockResolvedValue(undefined)
    emulatorMocks.WasmBoy.pause.mockResolvedValue(undefined)
    emulatorMocks.WasmBoy.reset.mockResolvedValue(undefined)
    emulatorMocks.WasmBoy.resumeAudioContext.mockResolvedValue(undefined)
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(successfulRomResponse()))
  })

  it('loads once, plays, scopes keyboard input, and cleans up', async () => {
    const { unmount } = render(<GameBoyEmulator />)

    expect(screen.getByRole('button', { name: 'Up' })).toBeDisabled()
    fireEvent.click(screen.getAllByRole('button', { name: /Play/ })[0])

    await waitFor(() => expect(emulatorMocks.WasmBoy.play).toHaveBeenCalledOnce())
    expect(screen.getByRole('status')).toHaveTextContent('Game playing')
    expect(screen.getByRole('button', { name: 'Up' })).toBeEnabled()
    expect(emulatorMocks.WasmBoy.config).toHaveBeenCalledOnce()
    expect(emulatorMocks.WasmBoy.loadROM).toHaveBeenCalledOnce()

    const emulator = screen.getByRole('region', {
      name: "Blobbo's Apple Catch Game Boy emulator",
    })
    fireEvent.blur(emulator, { relatedTarget: document.body })
    expect(emulatorMocks.keyboard.disable).toHaveBeenCalled()

    fireEvent.click(screen.getByRole('button', { name: 'Pause' }))
    await waitFor(() => expect(screen.getByRole('status')).toHaveTextContent('Game paused'))

    unmount()
    expect(emulatorMocks.removePlugin).toHaveBeenCalledOnce()
  })

  it('shows a useful error and permits retrying a failed ROM request', async () => {
    vi.stubGlobal(
      'fetch',
      vi
        .fn()
        .mockRejectedValueOnce(new Error('Network unavailable'))
        .mockResolvedValueOnce(successfulRomResponse()),
    )
    render(<GameBoyEmulator />)

    fireEvent.click(screen.getAllByRole('button', { name: /Play/ })[0])
    expect(await screen.findByRole('alert')).toHaveTextContent('Network unavailable')

    fireEvent.click(screen.getAllByRole('button', { name: 'Retry' })[0])
    await waitFor(() => expect(screen.getByRole('status')).toHaveTextContent('Game playing'))

    expect(emulatorMocks.WasmBoy.config).toHaveBeenCalledTimes(2)
    expect(emulatorMocks.removePlugin).toHaveBeenCalledOnce()
  })
})
