import type { Locale } from './config';

export type AboutCopy = {
  eyebrow: string;
  headline: string;
  photoAlt: string;
  caption: string;
  paragraphs: readonly string[];
};

export const about: Record<Locale, AboutCopy> = {
  de: {
    eyebrow: 'Über mich',
    headline: 'Die Person hinter Scalentic.',
    photoAlt: 'Darius Mann — Gründer von Scalentic',
    caption: 'Darius Mann — Gründer & AI Engineer, Scalentic',
    paragraphs: [
      'Ich bin Darius, AI Engineer und Transformationspartner mit 10 Jahren Erfahrung im Softwarebau — die letzten zwei Jahre speziell an produktiven KI-Systemen. Ich arbeite mit wenigen Kunden gleichzeitig, damit ihr meine volle Aufmerksamkeit bekommt und direkten Draht zur Person habt, die die Arbeit tatsächlich macht.',
      'Scalentic habe ich gegründet, weil die meisten Unternehmen keine große Agentur brauchen — sondern jemanden, der das Problem wirklich versteht, die passende Lösung designt und sauber umsetzt. Ich führe Discovery, steuere das Projekt, schreibe den Code und bleibe dran, bis die Ergebnisse halten.',
    ],
  },
  en: {
    eyebrow: 'About',
    headline: 'The person behind Scalentic.',
    photoAlt: 'Darius Mann — founder of Scalentic',
    caption: 'Darius Mann — Founder & AI Engineer, Scalentic',
    paragraphs: [
      "I'm Darius, an AI engineer and transformation partner with 10 years of experience building software — the last two focused specifically on production AI systems. I work with a small number of clients at a time, which means you get my full attention and a direct line to the person actually doing the work.",
      "I started Scalentic because most companies don't need a big agency — they need someone who understands their problem deeply, designs the right solution, and builds it properly. I lead the discovery, run the project, write the code, and stay on to make sure the results hold.",
    ],
  },
};
