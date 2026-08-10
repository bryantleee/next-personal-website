import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

const routes = [
  { path: '/', heading: 'Hello! My name is Bryant Lee.' },
  { path: '/projects', heading: 'Projects' },
  { path: '/projects/project-scout', heading: 'Project Scout' },
  { path: '/projects/home-lab', heading: 'Home Lab' },
  { path: '/projects/blobbo-apple-catch', heading: "Blobbo's Apple Catch" },
  { path: '/projects/desktop-pc', heading: 'Desktop PC' },
  { path: '/projects/expense-tracker', heading: 'Expense Tracker' },
]

for (const { path, heading } of routes) {
  test(`${path} renders with sound structure and no detectable accessibility violations`, async ({
    page,
  }) => {
    const response = await page.goto(path)

    expect(response?.ok()).toBe(true)
    await expect(page.locator('main#main-content')).toBeVisible()
    await expect(page.getByRole('heading', { level: 1, name: heading })).toHaveCount(1)
    await expect(page.getByRole('link', { name: 'Skip to main content' })).toHaveAttribute(
      'href',
      '#main-content',
    )

    const accessibilityScan = await new AxeBuilder({ page }).analyze()
    expect(accessibilityScan.violations).toEqual([])
  })
}

test('project cards and metadata come from the shared catalog', async ({ page }) => {
  await page.goto('/projects')

  await expect(page.locator('main li')).toHaveCount(5)
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://www.bryant.li/projects',
  )
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    'content',
    'https://www.bryant.li/home-lab.webp',
  )
})

test('the home page publishes a complete raster social preview', async ({ page }) => {
  await page.goto('/')

  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    'content',
    'https://www.bryant.li/social-card.png',
  )
  await expect(page.locator('meta[property="og:image:width"]')).toHaveAttribute('content', '1200')
  await expect(page.locator('meta[property="og:image:height"]')).toHaveAttribute('content', '630')
  await expect(page.locator('meta[property="og:image:alt"]')).toHaveAttribute(
    'content',
    'Bryant Lee social preview',
  )
})

test('the custom not-found page remains out of search indexes', async ({ page }) => {
  const response = await page.goto('/not-a-real-page')

  expect(response?.status()).toBe(404)
  await expect(page.getByRole('heading', { level: 1, name: 'Page not found' })).toBeVisible()
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex, nofollow')
})

test('the emulator exposes usable controls before downloading the ROM', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/projects/blobbo-apple-catch')

  const emulator = page.getByRole('region', {
    name: "Blobbo's Apple Catch Game Boy emulator",
  })
  await expect(emulator).toBeVisible()
  await expect(emulator.getByRole('img', { name: 'Game Boy game screen' })).toBeVisible()
  await expect(emulator.getByRole('button', { name: 'Up' })).toBeDisabled()
  await expect(emulator.getByRole('button', { name: /Play/ }).first()).toBeEnabled()
})
