import type { Campaign } from '../campaigns/types';
import type { Locale } from './config';

const homeDe: Campaign = {
  id: 'default',
  label: 'Allgemein (Standard)',
  meta: {
    description:
      'Scalentic konzipiert und baut maßgeschneiderte KI-Automatisierungen, die Teams messbar produktiver machen — ohne mehr Headcount. Vom ersten Gespräch bis zum Live-Betrieb, durchgängig mit einer Person.',
  },
  hero: {
    headlineLines: ['KI-Automatisierungen, die euer Team messbar produktiver machen.'],
    description: 'Mehr Output, gleiches Team — ohne mehr Headcount oder Komplexität.',
  },
  automate: {
    headline: 'Mehr Output mit dem Team, das ihr schon habt.',
    headNote:
      'Ich baue KI-Automatisierungen in den Bereichen, in denen Produktivitätsgewinne am schnellsten wirken. Jedes Engagement entsteht von Grund auf um eure Tools und euren Prozess.',
    footNote:
      'Euer Use Case fehlt? Die spannendsten Probleme passen selten in eine Schublade. Lasst uns darüber sprechen, was mehr Output für euer Team bedeutet.',
    items: [
      {
        n: '01',
        title: 'Operations',
        body: 'Wiederkehrende interne Arbeit — Tickets, Datenbewegungen, Dokumente, Reporting — automatisiert, damit Operations Zeit für Entscheidungen hat statt für Handarbeit. Schnellerer Durchlauf, weniger Fehler, gleiche Kopfzahl.',
      },
      {
        n: '02',
        title: 'Sales',
        body: 'Mehr Leads qualifiziert, schneller nachgefasst und durch die Pipeline bewegt — ohne zusätzliche SDRs. Ich automatisiere Prospecting, Anreicherung, Outreach und CRM-Updates, damit Sales sich aufs Abschließen konzentriert.',
      },
      {
        n: '03',
        title: 'Marketing',
        body: 'KI-gestützte Workflows für Arbeit, die Zeit frisst ohne Mehrwert — Anzeigen-Monitoring, Content-Pipelines, Influencer-Research, Kampagnen-Reporting. Mehr Kampagnen, weniger manuelle Koordination.',
      },
    ],
  },
  howItWorks: {
    headline: 'Vom ersten Gespräch zu messbaren Ergebnissen.',
    steps: [
      {
        n: '01',
        title: 'Chance verstehen',
        body: 'Ich setze mich mit eurem Team und mappe, wo Zeit, Geld und Aufwand verloren gehen — und priorisiere die Automatisierung mit dem höchsten Hebel.',
      },
      {
        n: '02',
        title: 'Lösung designen',
        body: 'Ich entwerfe den passenden Ansatz für euren Stack und eure Ziele, kläre Scope und Zeitplan und stelle sicher, dass wir etwas bauen, das die Zahlen wirklich bewegt.',
      },
      {
        n: '03',
        title: 'Automatisierung bauen',
        body: 'Ich baue, teste und verfeinere eine maßgeschneiderte KI-Automatisierung, bis sie zuverlässig in Produktion läuft. Ihr prüft die Ergebnisse. Ich iteriere, bis sie stimmen.',
      },
      {
        n: '04',
        title: 'Betreiben & verbessern',
        body: 'Ich überwache, warte und verbessere weiter — damit die Produktivitätsgewinne wachsen statt zu stagnieren.',
      },
    ],
  },
  faq: {
    faqs: [
      {
        q: 'Welche Arbeit lässt sich automatisieren?',
        a: 'Wenn es um wiederkehrende Entscheidungen, Datenbewegungen oder Sprachverarbeitung geht, ist es ein Kandidat. Am tiefsten bin ich in Operations-, Sales- und Marketing-Automation — aber ich starte immer dort, wo der größte Produktivitätshebel steckt.',
      },
      {
        q: 'Wie lange bis etwas live ist?',
        a: 'Die meisten ersten Automatisierungen laufen in unter zwei Wochen. Ich starte schmal, beweise den Nutzen schnell und erweitere danach.',
      },
      {
        q: 'Brauchen wir ein Tech-Team?',
        a: 'Nein. Ich übernehme Design, Deployment und laufende Wartung. Euer Team nennt das Ziel und prüft die Ergebnisse.',
      },
      {
        q: 'Wie geht ihr mit Daten und Sicherheit um?',
        a: 'Ich arbeite in euren bestehenden Tools und Berechtigungen, halte Daten auf die Aufgabe begrenzt und unterschreibe, was euer Security-Team braucht, bevor etwas Produktion berührt.',
      },
    ],
  },
  finalCta: {
    headlineLines: ['Lasst uns finden, wo KI', 'für euer Team den größten Hebel hat.'],
    subtext:
      'Ein kurzes Gespräch reicht meist, um die wirkungsvollste Automatisierung zu benennen — und welche messbaren Ergebnisse realistisch sind.',
  },
};

const homeEn: Campaign = {
  id: 'default',
  label: 'General (default)',
  meta: {
    description:
      'Scalentic designs and builds custom AI automations that make teams measurably more productive — without increasing headcount. From first conversation to live production, with one person throughout.',
  },
  hero: {
    headlineLines: ['AI automations that make your team measurably more productive.'],
    description: 'More output, same team — without adding headcount or complexity.',
  },
  automate: {
    headline: 'More output from the team you already have.',
    headNote:
      'I build AI automations across the core functions where productivity gains compound the fastest. Every engagement is built from scratch around your tools and your process.',
    footNote:
      "Don't see your use case? Most interesting problems don't fit a neat category. Let's talk about what more output looks like for your team.",
    items: [
      {
        n: '01',
        title: 'Operations',
        body: 'Repetitive internal work — ticket handling, data movement, document processing, reporting — automated so your ops team spends time on decisions, not manual tasks. Faster turnaround, fewer errors, same headcount.',
      },
      {
        n: '02',
        title: 'Sales',
        body: 'More leads qualified, followed up faster, and moved through the pipeline without adding SDRs. I automate prospecting, enrichment, outreach sequences, and CRM updates — so your sales team focuses on closing, not admin.',
      },
      {
        n: '03',
        title: 'Marketing',
        body: 'AI-assisted workflows for the work that eats time without adding value — ad performance monitoring, content generation pipelines, influencer research and tracking, campaign reporting. More campaigns, less manual coordination.',
      },
    ],
  },
  howItWorks: {
    headline: 'From first conversation to measurable results.',
    steps: [
      {
        n: '01',
        title: 'Understand the opportunity',
        body: 'I sit with your team and map where time, money, and effort are being lost — then identify the highest-leverage automation to tackle first.',
      },
      {
        n: '02',
        title: 'Design the solution',
        body: "I design the right approach for your stack and your goals, align on scope and timeline, and make sure we're building something that will actually move the numbers.",
      },
      {
        n: '03',
        title: 'Build the automation',
        body: "I build, test, and refine a custom AI automation until it's working reliably in production. You review the results. I iterate until they're right.",
      },
      {
        n: '04',
        title: 'Run & improve',
        body: 'I monitor, maintain, and keep improving over time — so the productivity gains compound instead of plateau.',
      },
    ],
  },
  faq: {
    faqs: [
      {
        q: 'What kind of work can you automate?',
        a: "If it involves repetitive decisions, data movement, or language processing, it's a candidate. My experience is deepest in operations, sales, and marketing automation — but I always start by identifying where the biggest productivity gain is hiding.",
      },
      {
        q: 'How long until something is live?',
        a: 'Most first automations are running in under two weeks. I start narrow, prove the value quickly, then expand from there.',
      },
      {
        q: 'Do we need a technical team?',
        a: 'No. I handle everything from design to deployment to ongoing maintenance. Your team points me at the goal and reviews the results.',
      },
      {
        q: 'How do you handle our data and security?',
        a: 'I work inside your existing tools and permissions, keep data scoped to the task, and sign whatever agreements your security team needs before anything touches production.',
      },
    ],
  },
  finalCta: {
    headlineLines: ['Let’s find where AI can make', 'the biggest difference for your team.'],
    subtext:
      'A short conversation is usually enough to identify the highest-leverage automation — and what measurable results to expect from it.',
  },
};

export const home: Record<Locale, Campaign> = {
  de: homeDe,
  en: homeEn,
};

export function getHome(locale: Locale): Campaign {
  return home[locale];
}
