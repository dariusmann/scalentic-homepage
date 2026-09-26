export const locales = ['de', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'de';

export function isLocale(value: string | undefined): value is Locale {
  return value === 'de' || value === 'en';
}

export function resolveLocale(value: string | undefined): Locale {
  return isLocale(value) ? value : defaultLocale;
}
