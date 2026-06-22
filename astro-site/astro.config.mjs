// @ts-check
import { defineConfig } from 'astro/config';

// Source of truth for the Scalentic homepage. Build output is copied to the
// repo root via `npm run publish` (see scripts/publish-to-root.mjs).
//
// base: '/' — correct for scalentic.com (custom domain).
// For the github.io project URL only, use base: '/scalentic-homepage/'.
export default defineConfig({
  site: 'https://scalentic.com',
  outDir: './dist',
});
