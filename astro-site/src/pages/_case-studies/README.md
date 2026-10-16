# Unpublished case study routes

Astro skips anything under `src/pages/` whose file or folder name starts with
`_`, so these pages are **not built and not deployed**. The code is complete and
untouched — only the route is switched off.

## Re-publish

1. `git mv src/pages/_case-studies src/pages/case-studies`
2. `git mv src/pages/en/_case-studies src/pages/en/case-studies`
3. Set `published: true` in `src/content/case-studies/index.ts` — that is what
   puts the entry back into the nav dropdown and the footer.
4. `npm run publish` from the repo root, then commit the root `index.html`,
   `_astro/`, `case-studies/`, and `en/case-studies/`.

## Gotcha

`scripts/publish-to-root.mjs` only overwrites paths that exist in `dist/`. It
does not remove root folders that disappeared from a build, so unpublishing a
route also means deleting the stale `case-studies/` and `en/case-studies/`
folders at the repo root by hand.
