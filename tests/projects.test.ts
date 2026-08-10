import { readFile } from 'node:fs/promises'
import { describe, expect, it } from 'vitest'
import { getProject, projects } from '../data/projects'
import { SITE_URL } from '../data/site'

describe('project catalog', () => {
  it('contains unique, complete project records', () => {
    expect(projects).toHaveLength(5)
    expect(new Set(projects.map(({ slug }) => slug)).size).toBe(projects.length)

    for (const project of projects) {
      expect(project.slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
      expect(project.title).not.toHaveLength(0)
      expect(project.description).not.toHaveLength(0)
      expect(project.image.src).toMatch(/^\/.+\.webp$/)
      expect(project.image.width).toBeGreaterThan(0)
      expect(project.image.height).toBeGreaterThan(0)
      expect(getProject(project.slug)).toBe(project)
    }
  })

  it('drives every project URL in the generated sitemap', async () => {
    const sitemap = await readFile('public/sitemap.xml', 'utf8')
    const locations = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1])
    const expected = [
      `${SITE_URL}/`,
      `${SITE_URL}/projects`,
      ...projects.map(({ slug }) => `${SITE_URL}/projects/${slug}`),
    ]

    expect(locations).toEqual(expected)
  })

  it('rejects an unknown project slug', () => {
    expect(() => getProject('missing')).toThrow('Unknown project: missing')
  })
})
