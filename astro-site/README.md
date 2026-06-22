# Astro site source

This folder is the **source** for the Scalentic homepage. The live site is the
static build published to the **repo root** (`index.html` + `_astro/`).

## Edit here

- `src/consts.ts` — booking URL, email, LinkedIn (keep in sync with `SITE_INFO.md`)
- `src/components/` — page sections
- `src/pages/index.astro` — page assembly
- `src/styles/global.css` — design tokens and shared styles

## Commands

```bash
npm run dev       # http://localhost:4321
npm run build     # → ./dist/
npm run publish   # build + copy to repo root
```

From the repo root you can also run `npm run dev` / `npm run publish`.

## Deploy note

`astro.config.mjs` uses `base: '/'` for the custom domain `scalentic.com`. If you
need the `github.io/scalentic-homepage/` URL without a custom domain, set
`base: '/scalentic-homepage/'` before publishing.
