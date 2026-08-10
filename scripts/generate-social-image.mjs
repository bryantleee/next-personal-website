import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const logoPath = join(ROOT, 'public', 'bryant-1-optimized.svg')
const outputPath = join(ROOT, 'public', 'social-card.png')

const background = Buffer.from(`
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <defs>
      <radialGradient id="glow" cx="50%" cy="40%" r="70%">
        <stop offset="0%" stop-color="#241f12"/>
        <stop offset="100%" stop-color="#000000"/>
      </radialGradient>
    </defs>
    <rect width="1200" height="630" fill="#000000"/>
    <rect width="1200" height="630" fill="url(#glow)"/>
    <rect x="42" y="42" width="1116" height="546" rx="18" fill="none" stroke="#ebc95b" stroke-width="2" opacity="0.7"/>
    <line x1="300" y1="432" x2="900" y2="432" stroke="#ebc95b" stroke-width="2" opacity="0.55"/>
    <text x="600" y="492" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="600" text-anchor="middle">Software Engineer</text>
    <text x="600" y="542" fill="#cccccc" font-family="Arial, Helvetica, sans-serif" font-size="23" text-anchor="middle">Game Boy homebrew · self-hosted infrastructure · edge AI</text>
  </svg>
`)

const logo = await sharp(logoPath).resize({ width: 680 }).png().toBuffer()

await sharp(background)
  .composite([{ input: logo, left: 260, top: 70 }])
  .removeAlpha()
  .png({ compressionLevel: 9 })
  .toFile(outputPath)

console.log('Generated 1200x630 social preview image.')
