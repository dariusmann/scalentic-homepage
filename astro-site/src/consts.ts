// Single source of truth for the details that must stay correct.
// Mirrors docs/SITE_INFO.md.

export const SITE = {
  name: 'Scalentic',
  wordmark: 'scalentic',
  tagline: 'The busywork, handled quietly.',
  description:
    'Scalentic builds and runs custom AI for support, data, leads, and search — so the repetitive work takes care of itself, and your team gets back to the real thing.',
} as const;

export const BOOKING_URL =
  'https://outlook.office.com/bookwithme/user/3d92a463b02643aeb260408442cec7e8@scalentic.com/meetingtype/-MGOWcehIkyZ7QUDXWYurA2?anonymous&ismsaljsauthenabled&ep=mlink';

export const EMAIL = 'darius.mann@scalentic.com';

export const LINKEDIN = 'https://www.linkedin.com/in/darius-mann/';

export const NAV_LINKS = [
  { href: '#automate', label: 'What we automate' },
  { href: '#how', label: 'How it works' },
  { href: '#customers', label: 'Customers' },
  { href: '#faq', label: 'FAQ' },
] as const;
