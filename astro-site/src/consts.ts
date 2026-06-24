// Single source of truth for the details that must stay correct.
// Mirrors docs/SITE_INFO.md.

export const SITE = {
  name: 'Scalentic',
  wordmark: 'scalentic',
} as const;

export const BOOKING_URL =
  'https://outlook.office.com/bookwithme/user/3d92a463b02643aeb260408442cec7e8@scalentic.com/meetingtype/-MGOWcehIkyZ7QUDXWYurA2?anonymous&ismsaljsauthenabled&ep=mlink';

export const EMAIL = 'darius.mann@scalentic.com';

export const LINKEDIN = 'https://www.linkedin.com/in/darius-mann/';

export const NAV_LINKS = [
  { href: '#automate', label: 'What we automate' },
  { href: '#how', label: 'How it works' },
  { href: '#about', label: 'About' },
  { href: '#faq', label: 'FAQ' },
] as const;
