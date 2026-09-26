import type { Locale } from '../../../i18n/config';
import { medizinfuchsDe } from './de';
import { medizinfuchsEn } from './en';

export const CASE_STUDY_PATH = 'case-studies/medizinfuchs';

const byLocale = {
  de: medizinfuchsDe,
  en: medizinfuchsEn,
} as const;

export type MedizinfuchsContent = (typeof byLocale)[Locale];

export function getMedizinfuchs(locale: Locale): MedizinfuchsContent {
  return byLocale[locale];
}
