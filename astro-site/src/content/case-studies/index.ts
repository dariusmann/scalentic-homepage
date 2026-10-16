import type { Locale } from '../../i18n/config';
import { CASE_STUDY_PATH as MEDIZINFUCHS_PATH } from './medizinfuchs';

/**
 * Ordered list of case studies for nav/footer.
 * Add a new entry here when a project page ships — Medizinfuchs stays first.
 */
export type CaseStudyNavItem = {
  id: string;
  /** Path without leading slash or locale prefix, e.g. case-studies/medizinfuchs */
  path: string;
  navLabel: Record<Locale, string>;
  /**
   * Nav/footer only list published studies. Unpublishing also needs the route
   * taken out of the build — see `src/pages/_case-studies/README.md`.
   */
  published: boolean;
};

export const CASE_STUDIES: CaseStudyNavItem[] = [
  {
    id: 'medizinfuchs',
    path: MEDIZINFUCHS_PATH,
    navLabel: {
      de: 'Medizinfuchs',
      en: 'Medizinfuchs',
    },
    published: false,
  },
];

/** What Nav and Footer render. Empty means the menu entry disappears entirely. */
export const PUBLISHED_CASE_STUDIES: CaseStudyNavItem[] = CASE_STUDIES.filter(
  (cs) => cs.published
);

export function caseStudyLabel(item: CaseStudyNavItem, locale: Locale): string {
  return item.navLabel[locale];
}
