import { rename } from 'node:fs/promises'
import { join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'
import { walkRasters, REVEALING_METADATA_FIELDS } from './lib/image-walk.mjs'

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const PUBLIC_DIR = join(ROOT, 'public')

let stripped = 0
let scanned = 0

for await (const path of walkRasters(PUBLIC_DIR)) {
  scanned++
  const meta = await sharp(path).metadata()
  const found = REVEALING_METADATA_FIELDS.filter((field) => meta[field])
  if (found.length === 0) {
    continue
  }

  const tmp = `${path}.stripped.tmp`
  // sharp does not copy metadata to the output unless .withMetadata() is called,
  // so toFile() produces a stripped copy. .rotate() bakes any EXIF orientation
  // into the pixels before the EXIF block is dropped.
  await sharp(path).rotate().toFile(tmp)
  await rename(tmp, path)
  stripped++
  console.log(`stripped ${found.join(', ')} from ${relative(ROOT, path)}`)
}

console.log(`Done. Scanned ${scanned} image(s); stripped ${stripped}.`)
