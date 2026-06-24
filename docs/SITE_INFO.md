# Scalentic — Site Reference

This file is the single source of truth for the details that must appear on the
Scalentic homepage. When generating a new design with AI, paste or reference
this file so the important links, contact info, and copy stay correct. After a
new design is generated, double-check every item in the **Checklist** at the
bottom.

---

## Core details (keep these exact)

| Item | Value |
| --- | --- |
| Booking / "Book a meeting" link | `https://outlook.office.com/bookwithme/user/3d92a463b02643aeb260408442cec7e8@scalentic.com/meetingtype/-MGOWcehIkyZ7QUDXWYurA2?anonymous&ismsaljsauthenabled&ep=mlink` |
| Contact email | `darius.mann@scalentic.com` |
| LinkedIn | `https://www.linkedin.com/in/darius-mann/` |

### Ready-to-use HTML snippets

Booking button:

```html
<a href="https://outlook.office.com/bookwithme/user/3d92a463b02643aeb260408442cec7e8@scalentic.com/meetingtype/-MGOWcehIkyZ7QUDXWYurA2?anonymous&ismsaljsauthenabled&ep=mlink"
   target="_blank" rel="noopener">
  Book a meeting
</a>
```

Contact email link:

```html
<a href="mailto:darius.mann@scalentic.com">darius.mann@scalentic.com</a>
```

LinkedIn link:

```html
<a href="https://www.linkedin.com/in/darius-mann/" target="_blank" rel="noopener">
  LinkedIn
</a>
```

---

## Site / deployment info

| Item | Value |
| --- | --- |
| Repository | `git@github.com:dariusmann/scalentic-homepage.git` |
| Default GitHub Pages URL | `https://dariusmann.github.io/scalentic-homepage/` |
| Custom domain (apex) | `scalentic.com` |
| Custom domain (www) | `www.scalentic.com` → CNAME to `dariusmann.github.io` |
| Source | `astro-site/` (Astro components + styles) |
| Published files | `index.html` + `_astro/` at repo root |
| Archived legacy site | `archive/legacy-bundle/index.html` (old self-extracting bundle) |

> **Deploy:** edit `astro-site/src/`, then run `npm run publish` from the repo
> root. That builds Astro and copies `astro-site/dist/` → repo root. Push to
> `main` and GitHub Pages auto-redeploys. The repo must include `.nojekyll` at
> the root (copied from `astro-site/public/`) so GitHub Pages does not run
> Jekyll — otherwise `_astro/` assets are skipped. If a custom domain is
> configured, a `CNAME` file in the repo root holds the domain name.

---

## Brand / content placeholders

Fill these in so AI-generated designs use the right copy. Replace the
`<!-- TODO -->` values.

| Item | Value |
| --- | --- |
| Company name | Scalentic |
| Tagline / headline | <!-- TODO --> |
| Short description (1–2 sentences) | <!-- TODO --> |
| Primary call-to-action | Book a meeting (uses booking link above) |
| Services / offerings | <!-- TODO --> |
| About text | <!-- TODO --> |
| Logo file | `astro-site/public/assets/favicon.png` |
| Brand colors | <!-- TODO: e.g. primary #000000, accent #000000 --> |
| Font(s) | Hanken Grotesk (current site) — change if desired |

---

## Checklist after generating a new design

- [ ] "Book a meeting" link points to the exact Outlook booking URL above
- [ ] Contact email is `darius.mann@scalentic.com` (and uses a `mailto:` link)
- [ ] LinkedIn link points to `https://www.linkedin.com/in/darius-mann/`
- [ ] External links open in a new tab (`target="_blank" rel="noopener"`)
- [ ] Asset paths work on the deployed URL (custom domain uses `/`; github.io
  project URL needs `base: '/scalentic-homepage/'` in `astro-site/astro.config.mjs`
  before `npm run publish`)
- [ ] Ran `npm run publish` and committed root `index.html` + `_astro/`
- [ ] Company name spelled "Scalentic"
- [ ] Pushed to `main` and verified live
