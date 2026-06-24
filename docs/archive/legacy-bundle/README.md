# Legacy self-extracting bundle

This is the **previous** Scalentic homepage (`index.html` at repo root before
2026-06-22). It is archived here for reference only.

## How it worked

- Not plain HTML — a JSON-encoded template in `<script type="__bundler/template">`
  plus gzip+base64 assets in `<script type="__bundler/manifest">`.
- JavaScript unpacked and rendered the page at runtime.

## Do not deploy this file

The live site is now built from **Astro** (`astro-site/`). To publish:

```bash
npm run publish
```

That writes a static `index.html` + `_astro/` to the repo root for GitHub Pages.
