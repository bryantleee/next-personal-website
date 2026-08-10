import Head from 'next/head'
import { DEFAULT_SOCIAL_IMAGE, SITE_NAME, SITE_URL } from '../../data/site'

type SeoProps = {
  title: string
  description: string
  path: string
  image?: string
  imageAlt?: string
  imageWidth?: number
  imageHeight?: number
  type?: 'website' | 'article'
  jsonLd?: Record<string, unknown>
  noIndex?: boolean
}

const Seo = ({
  title,
  description,
  path,
  image = DEFAULT_SOCIAL_IMAGE,
  imageAlt,
  imageWidth,
  imageHeight,
  type = 'website',
  jsonLd,
  noIndex = false,
}: SeoProps) => {
  const url = `${SITE_URL}${path}`
  const absoluteImage = image.startsWith('http') ? image : `${SITE_URL}${image}`
  const resolvedImageAlt = imageAlt ?? `${title} social preview`
  const resolvedImageWidth = imageWidth ?? (image === DEFAULT_SOCIAL_IMAGE ? 1200 : undefined)
  const resolvedImageHeight = imageHeight ?? (image === DEFAULT_SOCIAL_IMAGE ? 630 : undefined)

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:image:alt" content={resolvedImageAlt} />
      {resolvedImageWidth && (
        <meta property="og:image:width" content={String(resolvedImageWidth)} />
      )}
      {resolvedImageHeight && (
        <meta property="og:image:height" content={String(resolvedImageHeight)} />
      )}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />
      <meta name="twitter:image:alt" content={resolvedImageAlt} />

      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </Head>
  )
}

export default Seo
