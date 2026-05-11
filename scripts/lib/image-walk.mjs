import { readdir } from 'node:fs/promises'
import { join, extname } from 'node:path'

export const RASTER_EXTS = new Set([
  '.jpg',
  '.jpeg',
  '.png',
  '.webp',
  '.tiff',
  '.tif',
  '.heic',
  '.heif',
  '.avif',
])

export const REVEALING_METADATA_FIELDS = ['exif', 'iptc', 'xmp']

export async function* walkRasters(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) {
      yield* walkRasters(path)
    } else if (RASTER_EXTS.has(extname(entry.name).toLowerCase())) {
      yield path
    }
  }
}
