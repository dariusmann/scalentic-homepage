import type { Locale } from './config';

export type UiCopy = {
  bookCall: string;
  seeAutomate: string;
  writeEmail: string;
  nav: {
    automate: string;
    how: string;
    about: string;
    faq: string;
    caseStudy: string;
  };
  eyebrows: {
    automate: string;
    how: string;
    about: string;
    faq: string;
  };
  faqHeadline: string;
  footer: {
    blurb: string;
    company: string;
    automate: string;
    contact: string;
    about: string;
    caseStudy: string;
    operations: string;
    sales: string;
    marketing: string;
    rights: string;
    built: string;
  };
  lang: {
    aria: string;
    de: string;
    en: string;
  };
  meta: {
    homeTitle: string;
  };
};

export const ui: Record<Locale, UiCopy> = {
  de: {
    bookCall: 'Gespräch buchen',
    seeAutomate: 'Was ich automatisiere',
    writeEmail: 'E-Mail schreiben',
    nav: {
      automate: 'Automatisierung',
      how: 'Ablauf',
      about: 'Über mich',
      faq: 'FAQ',
      caseStudy: 'Fallstudie',
    },
    eyebrows: {
      automate: 'Was ich automatisiere',
      how: 'So läuft’s',
      about: 'Über mich',
      faq: 'FAQ',
    },
    faqHeadline: 'Fragen, klar beantwortet.',
    footer: {
      blurb:
        'KI-Automatisierungen, die euer Team produktiver machen — ohne neues Hiring. Beratung, Umsetzung und laufender Support, alles mit einer Person.',
      company: 'Unternehmen',
      automate: 'Automatisieren',
      contact: 'Kontakt',
      about: 'Über mich',
      caseStudy: 'Fallstudie',
      operations: 'Operations',
      sales: 'Sales',
      marketing: 'Marketing',
      rights: 'Alle Rechte vorbehalten.',
      built: 'Ruhig gebaut von Scalentic.',
    },
    lang: {
      aria: 'Sprache wählen',
      de: 'DE',
      en: 'EN',
    },
    meta: {
      homeTitle: 'Scalentic — KI-Automatisierung',
    },
  },
  en: {
    bookCall: 'Book a call',
    seeAutomate: 'See what we automate',
    writeEmail: 'Write an email',
    nav: {
      automate: 'What I automate',
      how: 'How it works',
      about: 'About',
      faq: 'FAQ',
      caseStudy: 'Case study',
    },
    eyebrows: {
      automate: 'What I automate',
      how: 'How it works',
      about: 'About',
      faq: 'FAQ',
    },
    faqHeadline: 'Questions, answered.',
    footer: {
      blurb:
        'AI automations that make your team more productive — without hiring. Consulting, build, and ongoing support, all with one person.',
      company: 'Company',
      automate: 'Automate',
      contact: 'Contact',
      about: 'About',
      caseStudy: 'Case study',
      operations: 'Operations',
      sales: 'Sales',
      marketing: 'Marketing',
      rights: 'All rights reserved.',
      built: 'Built quietly by Scalentic.',
    },
    lang: {
      aria: 'Choose language',
      de: 'DE',
      en: 'EN',
    },
    meta: {
      homeTitle: 'Scalentic — AI automation agency',
    },
  },
};
