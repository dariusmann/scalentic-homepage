import { AUTOMATE_ITEMS, FAQ_ITEMS, HOW_IT_WORKS_STEPS } from './shared';
import type { Campaign } from './types';

const campaign: Campaign = {
  id: 'leads',
  label: 'Lead generation',
  meta: {
    title: 'Scalentic — AI lead generation automation',
    description:
      'Custom AI that finds, qualifies, and follows up on inbound and outbound leads — so good prospects never sit waiting for a reply.',
  },
  hero: {
    headlineLines: ['Good leads,', 'followed up quietly.'],
    description:
      'We build and run custom AI for lead generation — prospects found, qualified, and nurtured automatically so your pipeline stays warm without the manual chase.',
  },
  automate: {
    headline: 'Pipeline work we take off your plate.',
    headNote:
      'From first touch to booked call — agents wired into your CRM, inbox, and outbound tools.',
    items: [AUTOMATE_ITEMS[2], AUTOMATE_ITEMS[0], AUTOMATE_ITEMS[1], AUTOMATE_ITEMS[3]],
  },
  howItWorks: {
    headline: 'From manual follow-up to autopilot, in three quiet steps.',
    steps: HOW_IT_WORKS_STEPS,
  },
  faq: {
    faqs: [
      {
        q: 'Does this replace our sales team?',
        a: 'No — it handles the repetitive qualify-and-follow-up work so your team spends time on conversations that are ready to close.',
      },
      ...FAQ_ITEMS.slice(1),
    ],
  },
  finalCta: {
    headlineLines: ['Let’s warm up', 'your pipeline quietly.'],
    subtext: 'A short call to find the first lead workflow worth automating.',
  },
};

export default campaign;
