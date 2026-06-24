# Scalentic homepage

Static landing page for [Scalentic](https://scalentic.com), built with
[Astro](https://astro.build).

## Layout

| Path | Purpose |
| --- | --- |
| `astro-site/` | **Source** — edit components, styles, and copy here |
| `astro-site/src/consts.ts` | Links, email, brand copy (mirrors `SITE_INFO.md`) |
| `index.html` + `_astro/` | **Published** static output at repo root (GitHub Pages) |
| `archive/legacy-bundle/` | Archived pre-Astro self-extracting bundle |
| `SITE_INFO.md` | Source of truth for contact links and deploy checklist |
| `AI_DESIGN_LOG.md` | Design iteration notes and gotchas |
| `astro-site/README.md` | Astro source layout and commands |
| `archive/` | Archived artifacts reference docs |

## Commands

From the repo root:

```bash
npm run dev       # local dev server → http://localhost:4321
npm run build     # build to astro-site/dist/
npm run publish   # build + copy dist → repo root (deploy this)
npm run preview   # preview the production build
```

Or from `astro-site/` directly: `npm run dev`, `npm run build`, etc.

## Deploying

1. Edit files under `astro-site/src/`
2. Run `npm run publish` from the repo root
3. Commit `index.html`, `_astro/`, and source changes
4. Push to `main` — GitHub Pages redeploys automatically

Site reference and checklist: `SITE_INFO.md`.
