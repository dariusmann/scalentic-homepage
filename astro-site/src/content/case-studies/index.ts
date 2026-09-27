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
};

export const CASE_STUDIES: CaseStudyNavItem[] = [
  {
    id: 'medizinfuchs',
    path: MEDIZINFUCHS_PATH,
    navLabel: {
      de: 'Medizinfuchs',
      en: 'Medizinfuchs',
    },
  },
];

export function caseStudyLabel(item: CaseStudyNavItem, locale: Locale): string {
  return item.navLabel[locale];
}
