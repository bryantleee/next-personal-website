/** @type {import('next').NextConfig} */
const path = require('path')

const IMMUTABLE_PUBLIC_FILES = [
  'blobbos-apple-catch.gb',
  'favicon.svg',
  'bryant-1-optimized.svg',
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
        source: `/:file(${IMMUTABLE_PUBLIC_FILES.join('|')})`,
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
