# AI Design Log

Context for the next AI design iteration. Read this + `SITE_INFO.md` first.

## How the site works (important)

- **Live site:** Astro static build at repo root (`index.html` + `_astro/`).
- **Source:** `astro-site/src/` — edit components, styles, and `consts.ts`.
- **Publish:** `npm run publish` from repo root (builds + copies to root).
- **Legacy bundle:** archived in `archive/legacy-bundle/` (self-extracting HTML;
  reference only).

## Gotchas (don't repeat these)

- Do not hand-edit root `index.html` — it is **build output**. Edit Astro source
  and re-run `npm run publish`.
- Contact links live in `astro-site/src/consts.ts` (mirror `SITE_INFO.md`).
- Custom domain (`scalentic.com`) uses `base: '/'`. The github.io project URL
  needs `base: '/scalentic-homepage/'` in `astro.config.mjs` before publish.
- GitHub Pages runs **Jekyll** by default, which skips `_astro/` (underscore
  folders). `astro-site/public/.nojekyll` disables Jekyll — must be at repo root
  after publish. "EntryFilter: excluded /CNAME" in Jekyll logs is normal, not an
  error; `.nojekyll` avoids Jekyll entirely.
- Legacy bundle gotcha (archived): `JSON.stringify` does not escape `/` in
  `</script>` — only relevant if editing `archive/legacy-bundle/`.

## Preferred workflow for design changes

- Edit `astro-site/src/`, run `npm run publish`, then run the `SITE_INFO.md`
  checklist before pushing to `main`.

## Change log

### 2026-06-24 — productivity-focused copy refresh
- Updated default campaign copy: hero, automate (incl. optional `footNote` below
  cards), how-it-works, FAQ (first four), final CTA, meta description. About
  paragraphs and footer tagline updated in components. Shared `AUTOMATE_ITEMS`,
  `HOW_IT_WORKS_STEPS`, and first four `FAQ_ITEMS` shifted to first-person "I"
  voice.

### 2026-06-24 — copy refresh + About section
- Removed logo wall and customer testimonials sections. Added About section
  (`#about`) with founder photo at `public/images/darius.jpg`. Updated hero,
  how-it-works (now four steps), footer tagline, and meta description in default
  campaign. Nav: `#customers` → `#about`.

### 2026-06-24 — campaign homepage swap (option B)
- Homepage copy lives in `astro-site/src/campaigns/` (`default`, `support`,
  `leads`, `data`). Switch the live angle by editing `ACTIVE_CAMPAIGN_ID` in
  `campaigns/active.ts`, then `npm run publish` and push. Only one campaign is
  live at `https://scalentic.com/` at a time — older outreach emails will show
  whatever is currently deployed. Contact links stay in `consts.ts`.

### 2026-06-24 — docs folder
- Moved all markdown files to `docs/` (preserving `astro-site/` and `archive/`
  subpaths). Root `README.md` now points here. Updated cursor rule and
  `consts.ts` comment paths.

### 2026-06-24 — assets folder
- Moved static images to `astro-site/public/assets/` (`favicon.png`,
  `darius-mann.jpg`). `Layout.astro` now links `assets/favicon.png`. Removed
  duplicate root `favicon.png` and ChatGPT PNG (same file). Re-run publish after
  asset path changes.

### 2026-06-22 — favicon
- Added `astro-site/public/favicon.png`; `Layout.astro` links it as site icon +
  apple-touch-icon. Re-run `npm run publish` after favicon changes.
- Replaced with rounded-square **S** icon (updated PNG).

### 2026-06-22 — GitHub Pages: disable Jekyll (`.nojekyll`)
- Added empty `.nojekyll` in `astro-site/public/` (published to repo root). Without
  it, GitHub Pages runs Jekyll and **drops `_astro/`** (underscore paths).

### 2026-06-22 — Astro is now the live site
- Archived old bundle → `archive/legacy-bundle/index.html` (+ README).
- Added `scripts/publish-to-root.mjs` and root `package.json` (`npm run publish`
  builds Astro and copies `dist/` → repo root).
- Root `index.html` + `_astro/` are now published build output, not hand-edited.
- Updated `SITE_INFO.md`, `README.md`, and design-iteration rule for new flow.

### 2026-06-22 — LinkedIn icon button
- Added `LinkedInButton.astro` with inline SVG from Simple Icons (CC0).
  Replaces text "LinkedIn" link in the final CTA section.

### 2026-06-22 — hero panel animation polish
- Enhanced `Hero.astro` "WHAT WE AUTOMATE" panel: shimmer on header label +
  blinking cursor, panel fade-in on load, per-row background highlight synced
  with the existing scan/target cycle. Row delays now use `--row-delay` CSS var.

### 2026-06-22 — added parallel Astro rebuild (`astro-site/`)
- New Astro 7 project in `astro-site/`, kept **separate** from the root
  `index.html` bundle (parallel experiment — the bundle is untouched).
- Componentized the existing design 1:1 (nav, hero w/ animated "what we
  automate" panel, logo wall, automate, how-it-works, customers, FAQ, final
  CTA, footer). Same dark palette (`#0C0C0D`/`#131315`) + Hanken Grotesk /
  Literata fonts (now loaded via Google Fonts `<link>`, not embedded base64).
- Contact details live in ONE place: `astro-site/src/consts.ts` (booking URL,
  `darius.mann@scalentic.com`, LinkedIn) — mirrors `SITE_INFO.md`. Edit there.
- Run with `cd astro-site && npm run dev` (localhost:4321); `npm run build`
  outputs to `astro-site/dist/`. `npm install` already run.
- Gotcha for later deploy: `astro-site` is configured for a **root** deploy. If
  it ever shares the GitHub Pages `/scalentic-homepage/` path, set
  `base: '/scalentic-homepage/'` in `astro-site/astro.config.mjs`.
- Footer email previously had visible text "hello@..." while linking to
  darius.mann — in the Astro version the visible text now matches the real
  address.

### 2026-06-22 — applied core contact details
- All 4 "Book a call" buttons (nav, hero, contact section, footer) -> Outlook
  booking URL, `target="_blank" rel="noopener"`. Were `#contact` / `#`.
- Email `hello@scalentic.com` -> `darius.mann@scalentic.com` (contact button +
  footer, incl. visible text).
- Added footer LinkedIn link -> `https://www.linkedin.com/in/darius-mann/`.
- Note: booking buttons now go straight to the booking page; the on-page
  `#contact` section still exists.
- Removed the "Sign in" link from the nav (kept the "Book a call" button).
