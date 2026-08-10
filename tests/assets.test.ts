import sharp from 'sharp'
import { describe, expect, it } from 'vitest'
import { DEFAULT_SOCIAL_IMAGE } from '../data/site'

describe('generated social preview', () => {
  it('is a 1200x630 opaque raster image', async () => {
    expect(DEFAULT_SOCIAL_IMAGE).toBe('/social-card.png')

    const metadata = await sharp(`public${DEFAULT_SOCIAL_IMAGE}`).metadata()
    expect(metadata.format).toBe('png')
    expect(metadata.width).toBe(1200)
    expect(metadata.height).toBe(630)
    expect(metadata.hasAlpha).toBe(false)
  })
})
