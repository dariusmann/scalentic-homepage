# Case study structure

The standard narrative for every Scalentic case study. This is a **content**
template, not a component library — each case study still gets its own
components (`Mf*` for Medizinfuchs, `Xy*` for the next one). Reuse the section
order and the job each section does, not the markup.

A case study is a sales page. It argues, in this order:

> problem → stakes → goal → how → proof → objection answered → ask

## Sections

| # | Section | Job | Required |
| --- | --- | --- | --- |
| 1 | Hero | Outcome headline, one-line summary, client + logo, headline KPI | yes |
| 2 | At a glance | Situation / goal / solution / result in one line each, plus role, scope, stack chips | yes |
| 3 | Challenge | What was happening and what it cost | yes |
| 4 | Goal | Success criteria **and** non-negotiable constraints, then a soft CTA | yes |
| 5 | Solution (2–4 acts) | One idea, one visual, one takeaway per act | yes |
| 6 | The hard part | The objection that nearly killed it, answered | yes |
| 7 | Cost / efficiency | What the approach does to the client's budget | optional |
| 8 | Evidence | What the system actually produces (mockup, sample output) | optional |
| 9 | Results | 2–3 metrics + what deliberately stayed the same | yes |
| 10 | Client quote | One sentence from the client | optional |
| 11 | Transfer + CTA | "This applies to you if…" then book / email / LinkedIn | yes |

## Rules

- **Headline the outcome, not the project.** "Automated product descriptions",
  not "Medizinfuchs pipeline project".
- **No standalone tech-stack section.** Stack lives as chips in *At a glance*.
  It reassures technical buyers without eating a full scroll.
- **Goal = criteria + constraints.** The constraints are what make the result
  land: hitting the target *without* breaking them is the actual claim.
- **Section 6 is mandatory.** Every project has one objection. Naming it beats
  hoping the reader doesn't think of it.
- **Two CTAs, not one.** A quiet one after the goal, the real one at the end.
  All conversion pressure at the bottom of a long scroll is wasted.
- **Section 11 is what makes a specific story sellable.** Without it a reader
  outside the client's industry files the page under "nice, not for me".
- **Alternate section backgrounds** (`--bg` / `--bg-alt`) so acts read as
  separate beats. Check no two neighbours share one.
- **Every section is DE + EN.** Copy lives in
  `src/content/case-studies/<slug>/{de,en}.ts`.

## Skeleton for the content file

```ts
export const <slug><Locale> = {
  meta: { title, description, ogTitle, ogDescription },
  hero: { eyebrow, title, summary, clientLabel, client, clientNote, clientUrl, logo, kpi },
  glance: { eyebrow, items[{ label, value }], meta[{ label, value }], stackLabel, stack[], stackNote },
  challenge: { eyebrow, headline, lead, before, after },
  goal: { eyebrow, headline, lead, criteria, constraints, ctaLead, ctaLink },
  /* 2–4 solution acts — named per project */
  /* the hard part — named per project */
  result: { eyebrow, headline, lead, metrics[{ value, label }], unchanged },
  transfer: { eyebrow, headline, lead, signals[{ title, body }], ctaLead, ctaPrimary, ctaSecondary },
} as const;
```
