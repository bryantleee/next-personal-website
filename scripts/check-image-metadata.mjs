import { join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'
import { walkRasters, REVEALING_METADATA_FIELDS } from './lib/image-walk.mjs'

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const PUBLIC_DIR = join(ROOT, 'public')

const failures = []
let scanned = 0

for await (const path of walkRasters(PUBLIC_DIR)) {
  scanned++
  const meta = await sharp(path).metadata()
  const found = REVEALING_METADATA_FIELDS.filter((field) => meta[field])
  if (found.length > 0) {
    failures.push({ path: relative(ROOT, path), fields: found })
  }
}

if (failures.length > 0) {
  console.error(`Found ${failures.length} image(s) with revealing metadata:`)
  for (const { path, fields } of failures) {
    console.error(`  ${path}: ${fields.join(', ')}`)
  }
  console.error('\nRun `yarn strip:photos` to remove metadata, then re-run this check.')
  process.exit(1)
}

console.log(`OK: scanned ${scanned} image(s); no revealing metadata found.`)
