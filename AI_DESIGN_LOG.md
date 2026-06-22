# AI Design Log

Context for the next AI design iteration. Read this + `SITE_INFO.md` first.

## How `index.html` works (important)

- `index.html` is a **self-extracting bundle**, not plain HTML.
- The real page is a JSON-encoded HTML string inside
  `<script type="__bundler/template">`. Assets (fonts/images) are gzip+base64
  in `<script type="__bundler/manifest">`. JS unpacks it at runtime.
- **Do not hand-edit the rendered text** by searching the raw file — the visible
  copy lives in the JSON template, not as normal markup.

## Gotchas (don't repeat these)

- When rewriting the template, `JSON.stringify` does **not** escape `/`. A
  literal `</script>` in the template will prematurely close the outer script
  tag and break the page. Re-escape: `</script` -> `<\u002Fscript`.
- Always re-verify after editing: both the template and manifest must still
  `JSON.parse` cleanly.
- Keep asset paths **relative** (site is served from the
  `/scalentic-homepage/` subpath on GitHub Pages).

## Preferred workflow for design changes

- For anything beyond tiny link/text tweaks, **regenerate the page** fresh
  rather than editing the bundle. Use `SITE_INFO.md` as the source of truth.
- After generating, run the `SITE_INFO.md` checklist.

## Change log

### 2026-06-22 — applied core contact details
- All 4 "Book a call" buttons (nav, hero, contact section, footer) -> Outlook
  booking URL, `target="_blank" rel="noopener"`. Were `#contact` / `#`.
- Email `hello@scalentic.com` -> `darius.mann@scalentic.com` (contact button +
  footer, incl. visible text).
- Added footer LinkedIn link -> `https://www.linkedin.com/in/darius-mann/`.
- Note: booking buttons now go straight to the booking page; the on-page
  `#contact` section still exists.
- Removed the "Sign in" link from the nav (kept the "Book a call" button).
