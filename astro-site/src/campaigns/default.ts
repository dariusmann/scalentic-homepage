import { AUTOMATE_ITEMS, FAQ_ITEMS, HOW_IT_WORKS_STEPS } from './shared';
import type { Campaign } from './types';

const campaign: Campaign = {
  id: 'default',
  label: 'General (default)',
  meta: {
    description:
      'Scalentic designs and builds custom AI automations that make teams measurably more productive — without increasing headcount. From first conversation to live production, with one person throughout.',
  },
  hero: {
    headlineLines: [
      'AI automations that make your team measurably more productive —',
      'without hiring.',
    ],
    description:
      'I help ambitious teams identify where AI can have the biggest impact, then build and run the automations that deliver it. More output, same team, no extra headcount.',
  },
  automate: {
    headline: 'Where automations move the needle.',
    headNote:
      "Every engagement is built from scratch around your process and your tools. Here's where I have the most experience delivering results:",
    footNote:
      "Don't see your use case? Most interesting problems don't fit a neat category. Let's talk about what better output looks like for you.",
    items: AUTOMATE_ITEMS,
  },
  howItWorks: {
    headline: 'From first conversation to measurable results.',
    steps: HOW_IT_WORKS_STEPS,
  },
  faq: {
    faqs: FAQ_ITEMS,
  },
  finalCta: {
    headlineLines: [
      'Let’s find where AI can make',
      'the biggest difference for your team.',
    ],
    subtext:
      'A short conversation is usually enough to identify the highest-leverage automation — and what measurable results to expect from it.',
  },
};

export default campaign;
