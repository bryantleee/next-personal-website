# Bryant Lee's Personal Website

The source for [bryant.li](https://www.bryant.li), a statically generated portfolio built with Next.js, React, TypeScript, and Sass. It includes project write-ups and a browser-playable Game Boy homebrew game.

## Requirements

- Node.js 24 or newer
- Yarn 1.22

## Local development

```bash
yarn install --frozen-lockfile
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
yarn lint          # ESLint
yarn format:check  # Prettier
yarn typecheck     # TypeScript
yarn test          # Unit and component tests
yarn test:photos   # Public-image metadata check
yarn build         # Production build
```

Browser tests require Chromium once per machine. The test command builds and serves the production site automatically outside CI.

```bash
yarn playwright install chromium
yarn test:e2e
```

## Content and generated assets

Project metadata lives in [`data/projects.json`](data/projects.json). Cards, project SEO, structured data, and the sitemap derive from this catalog.

```bash
yarn generate:sitemap
yarn generate:social
```

The production build runs both generators and rejects public raster images containing EXIF, IPTC, or XMP metadata. To strip revealing metadata from a new image, run `yarn strip:photos`.

## Deployment

The site is deployed on Vercel. Every route is statically generated; the CI workflow runs all quality checks and Chromium accessibility smoke tests before changes merge.
