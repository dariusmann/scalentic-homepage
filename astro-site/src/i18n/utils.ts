import { getRelativeLocaleUrl } from 'astro:i18n';
import { defaultLocale, type Locale } from './config';

/** Path without locale prefix, no leading slash ('' = home). */
export function pathWithoutLocale(pathname: string, locale: Locale): string {
  let path = pathname.replace(/\/$/, '') || '/';
  if (locale === 'en') {
    path = path.replace(/^\/en(?=\/|$)/, '') || '/';
  }
  return path === '/' ? '' : path.replace(/^\//, '');
}

export function homeUrl(locale: Locale): string {
  return getRelativeLocaleUrl(locale);
}

export function localizedUrl(locale: Locale, path = ''): string {
  return getRelativeLocaleUrl(locale, path);
}

export function switchLocaleUrl(pathname: string, current: Locale, target: Locale): string {
  const rest = pathWithoutLocale(pathname, current);
  return getRelativeLocaleUrl(target, rest);
}

export function sectionUrl(locale: Locale, hash: string): string {
  const id = hash.replace(/^#/, '');
  return locale === defaultLocale ? `/#${id}` : `/en/#${id}`;
}
