import { readFile, writeFile } from 'node:fs/promises'
const site = JSON.parse(await readFile(new URL('../data/site.json', import.meta.url), 'utf8'))
const projects = JSON.parse(
  await readFile(new URL('../data/projects.json', import.meta.url), 'utf8')
)

const escapeXml = (value) =>
  value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')

const paths = ['/', '/projects', ...projects.map(({ slug }) => `/projects/${slug}`)]
const urls = paths
  .map((path) => `  <url>\n    <loc>${escapeXml(`${site.url}${path}`)}</loc>\n  </url>`)
  .join('\n')
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`

await writeFile(new URL('../public/sitemap.xml', import.meta.url), sitemap)
console.log(`Generated sitemap with ${paths.length} URL(s).`)
