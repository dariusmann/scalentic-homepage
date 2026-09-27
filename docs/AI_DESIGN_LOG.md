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

### 2026-09-27 — Logo mark + favicon
- Favicon: white-bg green mark → `public/assets/favicon.png` (1024²).
- Nav brand: transparent green mark → `public/assets/logo-mark.png` beside
  “scalentic”. Source variants archived under `public/assets/brand/`.

### 2026-09-27 — Manrope only (drop Literata)
- Site is single-family: Manrope for UI and headlines. `--serif` and `--sans`
  both point to Manrope. Literata removed from Google Fonts + canvas chart.

### 2026-09-27 — Sans font → Manrope
- Replaced Hanken Grotesk with Manrope for UI/body (`--sans`). (Superseded —
  Literata removed entirely; see above.)

### 2026-09-27 — Case studies nav dropdown
- Nav label is plural: Fallstudien / Case studies. Opens a `<details>` dropdown
  listing projects from `content/case-studies/index.ts` (`CASE_STUDIES`).
- Medizinfuchs is first. Add future projects to that array only — Nav + Footer
  pick them up automatically.
- Click-outside + Escape close the menu. Desktop only (links still hidden
  &lt;980px).

### 2026-09-27 — Models section: cost story, not “best fit”
- Restored `MfModels` with three concrete points (route by task, compare
  models, build pipeline for cost). Removed empty “→ best fit” rows.
- DE + EN copy rewritten around quality-vs-cost routing.

### 2026-09-27 — Drop models/routing section from case study
- Removed the old “best fit” routing UI (later replaced — see above).

### 2026-09-27 — Forest + rose surface (branch `design/forest-rose`)
- Consolidated branch: Medizinfuchs case study + DE/EN i18n + light theme +
  forest green accent. Ancestry:
  `main` → case-study/i18n → signal-teal → signal-teal-light → forest-rose.
- Rose surface (`#f2dde1`) was tried on About + KPIs, then **removed** — did not
  read well. Site is forest green on cool light neutrals only.
- Theme switch stays `html[data-theme='dark']`. Swap colours in `global.css`.
- `SITE_INFO.md` brand colours filled in.
- Not published — run `npm run publish` when adopting.

### 2026-09-26 — Signal Teal **light** (branch `design/signal-teal-light`)
- Same design, inverted: `--bg #f7f9f8`, `--text #101b1a`. Built on top of
  `design/signal-teal`.
- **The accent had to be re-derived, not reused.** `#1ad1ad` is only 1.84:1 on a
  light background. Light accent is forest green `#14532d` (8.62:1 on `--bg`,
  8.07:1 on `--bg-alt`, 9.11:1 white-on-it). `--accent-vivid #35964f` exists for
  graphics (hero curve, chart bar) and must never be used for text — 3.53:1,
  which clears the 3:1 non-text rule only.
- Green drops the blue "trust" half of the teal rationale and keeps the
  growth/money half — a deliberate trade, not an oversight. Pine `#0b5138`
  (hue 159°) is the middle ground if that ever needs revisiting; sage
  `#3a5a40` was rejected as too low-chroma for a CTA.
- Themes are now switchable: `:root` holds light, `html[data-theme='dark']`
  holds the old dark values. Set the attribute in `Layout.astro` to flip
  everything, including the canvas chart. Verified working.
- **This removes two earlier gotchas.** All `rgba(255,255,255,X)` /
  `rgba(190,255,245,X)` overlays are now `rgba(var(--fg-rgb), X)` — one token
  drives every hairline. And `Hero.astro` no longer hardcodes chart colours; it
  reads `--accent-vivid` / `--accent` / `--muted-2` / `--fg-rgb` off the canvas
  via `getComputedStyle` (`readPalette()`). Canvas cannot resolve `var()`
  itself, so this indirection is required — do not inline hex there again.
- New tokens: `--bg-blur` (sticky nav), `--surface-hover` (pipeline nodes),
  `--sunken` (recessed panels), `--navlink`, `--fg-rgb`, `--accent-vivid`.
- Contrast audited across the whole scale. `--muted-3` had to go to `#606e6c`
  to clear AA (it carries footer links and labels). `--faint` stays at 3.44:1 —
  decorative dots and arrows only, never text.
- The medizinfuchs logo plate needs an explicit white background plus a
  `--line` border on light, otherwise it vanishes into the page.
- Not published.

### 2026-09-26 — Signal Teal palette (branch `design/signal-teal`)
- First accent colour the site has ever had. Base shifted from neutral warm black
  to cool anthracite (`--bg #080d0e`, `--bg-alt #0d1416`), text from warm cream to
  cool off-white (`--text #e8eded`). Accent `--accent #1ad1ad` (10.02:1 on `--bg`,
  AAA — safe on small text, not only on buttons).
- New tokens in `global.css`: `--accent`, `--accent-on`, `--accent-line`,
  `--accent-wash`. Use these instead of new hex values.
- Accent is deliberately sparse (~10% rule): primary buttons, `.eyebrow`,
  Automate/HowItWorks step numbers, nav current + hover, lang pill, hero chart
  "output" curve, callout left borders, focus rings.
- **Gotcha:** the hero chart is canvas-drawn, so its colours are JS constants in
  `Hero.astro` (`OUT` / `TEAM` + two `rgba()` strokes), not CSS vars. Any future
  palette change must touch those by hand.
- **Gotcha:** white overlay borders were hardcoded as `rgba(255,255,255,X)` in 12
  components. They are now `rgba(190,255,245,X)` so they stay cool over the new
  base. Grep for both forms when re-theming.
- Rejected alternatives (mocked up first): cobalt-on-cream light inversion,
  copper on warm ink, acid lime, steel blue. Rationale — teal is the only hue
  carrying both "trust" (blue) and "growth/money" (green), which is the brief.
- Mockup harness lives in `.palette-preview/` (gitignored): standalone HTML with
  all five directions, live contrast maths, `?only=N` to isolate one. Render with
  headless Chrome `--screenshot`. Note the canvas chart does not animate in
  headless, so the hero graph always renders at frame 0.
- Not published. Run `npm run publish` from repo root when adopting.

### 2026-09-26 — DE/EN i18n
- Astro `i18n`: defaultLocale `de` (no prefix), English under `/en/`.
- Copy: `src/i18n/` (ui, about, home) + case study `content/.../medizinfuchs/{de,en}.ts`.
- Nav language switcher (DE|EN) keeps the current path. hreflang + og:locale:alternate
  in Layout. Homepage is German at `/`; English at `/en/`.
- **Gotcha:** multilingual homepage uses `i18n/home.ts`, not `campaigns/ACTIVE_CAMPAIGN_ID`.
  Campaign A/B files remain EN-only reference.

### 2026-09-26 — Remove conflict-resolution section
- Dropped “Widersprüche sichtbar lösen” section + `MfConflict.astro`.

### 2026-09-26 — Drop OCR / Vision-LLMs claim
- Extraction step and model routing no longer mention OCR or Vision-LLMs.

### 2026-09-26 — Pipeline snake layout
- Pipeline is a 4+4 snake (LTR → curve → RTL) so labels like “Log / Review”
  and “Veröffentlicht” aren’t crushed in one horizontal row. Mobile stacks
  vertically.

### 2026-09-26 — Medizinfuchs facts corrected
- Removed Zeitraum from hero. Sources are 5–12 (not fixed at 5). Dropped
  Langfuse, LangChain, Docling from copy/tech; OCR described without Docling.

### 2026-09-26 — Medizinfuchs logo on case study
- Downloaded official SVG from `medizinfuchs.de/images/medizinfuchs-logo_de.svg`
  → `astro-site/public/assets/case-studies/medizinfuchs-logo.svg`. Shown in hero
  “Kunde” on a light panel (logo has dark wordmark; unreadable on dark bg otherwise).
  Links to https://www.medizinfuchs.de/.

### 2026-09-25 — Medizinfuchs case study
- New German case study at `/case-studies/medizinfuchs` (product-description
  pipeline only). Copy lives in `src/content/case-studies/medizinfuchs.ts`.
- Sections: hero KPI, before/after, interactive pipeline, source merge,
  conflict toggle, YMYL guardrails, output mockup, models/Langfuse, tech,
  result CTA. Visuals via SVG/CSS + inline JS (no new libs).
- Layout gained optional `lang`, canonical, OG/Twitter meta. Nav wordmark →
  `/`; hash links resolve to `/#…` off-home; “Case study” in nav + footer.
- **Gotcha:** conflict toggle data is a JSON `<script type="application/json">`
  (not `define:vars` + `is:inline` — those don’t combine). Pipeline hover
  details only auto-open when `(hover: hover)` so touch stays tap-to-toggle.

### 2026-06-24 — automate footnote callout
- `#automate` footer note is now an `<aside class="foot-callout">`: `bg-alt` panel,
  left accent border, larger serif type; lead sentence before `?` uses brighter
  weight-500 text. Splits on first `?` so campaign `footNote` stays one string.

### 2026-06-24 — hero headline and subhead tightened
- Headline shortened to one line (drops "— without hiring."); subhead replaced
  with "More output, same team — without adding headcount or complexity."
  (`default.ts` hero copy).

### 2026-06-24 — automate section copy refresh (solo positioning)
- Nav label `#automate` → "What I automate" (`consts.ts`; consumed by `Nav.astro`).
- `#automate` eyebrow, headline, subhead, three rows (Operations / Sales /
  Marketing), and footer note updated in `Automate.astro`, `default.ts`, `shared.ts`.
- FAQ first answer now cites operations, sales, marketing (`shared.ts`).
- Footer "Automate" column links updated; "Careers" removed from Company column.

### 2026-06-24 — hero boxless "output vs. team" chart
- Replaced framed `.panel` in `Hero.astro` with a boxless `.hero-chart` canvas in
  the right column: Team vs. Output lines, "same team" label, "8× output"
  callout with leader line near peak. 5.5s loop. Script stays `is:inline` with
  layout-safe rAF boot. **Gotcha:** do not gate canvas rAF on
  `prefers-reduced-motion` — macOS/Cursor report it and freeze the chart at the
  finished frame; canvas draw-in is low-risk motion.

### 2026-06-24 — hero panel "Output vs. Team" chart
- Replaced automate row list in `Hero.astro` with a canvas chart: near-flat Team
  line vs. climbing Output line, ×1.0→×8.0 multiplier, legends. 5.5s loop with
  smoothstep easing. Tag text is now `OUTPUT VS. TEAM`. Removed `hero.panelRows`
  from campaign types/data. Chart script uses `is:inline` (see below) and waits
  for canvas layout before starting rAF. CSS shimmer/dot still honor
  `prefers-reduced-motion`; canvas draw-in always loops (OS reduce-motion was
  freezing the chart at ×8.0 for many viewers).

### 2026-06-24 — hero panel "agent at work" animation
- Upgraded `Hero.astro` automate panel: 8s shared timeline with focus-sweep
  highlight (`cubic-bezier(.7,0,.2,1)`), faint vertical scan line, per-row chip
  invert + label brighten + status word fade, progress underline on active row,
  LIVE dot pulse. Keyframes moved from `global.css` into scoped Hero styles.
  `prefers-reduced-motion`: freezes on row 01 active (no movement).
- Fixed broken reduced-motion block that leaked `.target { transform: translateY(0) }`
  globally (froze highlight). Removed global `* { animation: none }` from
  `global.css` — it disabled all panel motion when OS reduce-motion was on.

### 2026-06-24 — hero headline size + FAQ trim
- Reduced hero `h1` font size (`clamp(36px, 4.6vw, 58px)`) — previous scale was
  too large for the longer two-line headline.
- Reduced final CTA `h2` to the same scale (was `clamp(40px, 5.6vw, 80px)`).
- Removed "What does it cost?" from shared `FAQ_ITEMS`.

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
