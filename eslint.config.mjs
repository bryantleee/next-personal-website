import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTypeScript from 'eslint-config-next/typescript'

export default defineConfig([
  ...nextVitals,
  ...nextTypeScript,
  // ponytail: eslint-plugin-react's 'detect' calls context.getFilename(), removed in ESLint 10.
  // Drop this once eslint-plugin-react ships ESLint 10 support.
  { settings: { react: { version: '19.3' } } },
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
])
