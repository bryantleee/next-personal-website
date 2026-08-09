/** @type {import('next').NextConfig} */
const path = require('path')

const IMMUTABLE_PUBLIC_FILES = [
  'blobbos-apple-catch.gb',
  'favicon.svg',
  'bryant-1-optimized.svg',
]

// blob: and 'wasm-unsafe-eval' are for WasmBoy, which runs the emulator core as
// WebAssembly inside a Worker created from a blob URL. connect-src needs data:
// because that worker fetches its WASM core from an inlined data: URL; data: in
// connect-src is self-contained content, so it opens no path to a remote origin.
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'wasm-unsafe-eval' blob:",
  "worker-src 'self' blob:",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self' data:",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  'upgrade-insecure-requests',
].join('; ')

const SECURITY_HEADERS = [
  { key: 'Content-Security-Policy', value: CSP },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
]

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: SECURITY_HEADERS,
      },
      {
        source: `/:file(${IMMUTABLE_PUBLIC_FILES.join('|')})`,
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
