declare module 'wasmboy' {
  export type WasmBoyButton =
    | 'UP'
    | 'DOWN'
    | 'LEFT'
    | 'RIGHT'
    | 'A'
    | 'B'
    | 'START'
    | 'SELECT'

  export type WasmBoyControllerState = Record<string, boolean>

  export interface WasmBoyOptions {
    headless: boolean
    useGbcWhenOptional: boolean
    isAudioEnabled: boolean
    frameSkip: number
    audioBatchProcessing: boolean
    timersBatchProcessing: boolean
    audioAccumulateSamples: boolean
    graphicsBatchProcessing: boolean
    graphicsDisableScanlineRendering: boolean
    tileRendering: boolean
    tileCaching: boolean
    gameboyFPSCap: number
  }

  export interface ResponsiveGamepadApi {
    addPlugin(plugin: {
      onGetState: (state: WasmBoyControllerState) => WasmBoyControllerState
    }): () => void
    Keyboard: {
      enable(): void
      disable(): void
    }
  }

  export interface WasmBoyApi {
    config(options: WasmBoyOptions, canvas: HTMLCanvasElement): Promise<void>
    loadROM(rom: Uint8Array): Promise<void>
    play(): Promise<void>
    pause(): Promise<void>
    reset(): Promise<void>
    resumeAudioContext(): Promise<void>
    ResponsiveGamepad: ResponsiveGamepadApi
  }

  export const WasmBoy: WasmBoyApi
}
