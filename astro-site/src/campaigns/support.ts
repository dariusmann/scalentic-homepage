import { AUTOMATE_ITEMS, FAQ_ITEMS, HOW_IT_WORKS_STEPS } from './shared';
import type { Campaign } from './types';

const campaign: Campaign = {
  id: 'support',
  label: 'Customer support',
  meta: {
    title: 'Scalentic — AI customer support automation',
    description:
      'Custom AI agents that triage, answer, and resolve support tickets in your voice — around the clock, with a clean handoff when a human should step in.',
  },
  hero: {
    headlineLines: ['Your support queue,', 'handled quietly.'],
    description:
      'We build and run custom AI for customer support — tickets triaged, answered, and resolved in your voice, with humans in the loop only when it matters.',
    panelRows: [
      { n: '01', label: 'Ticket triage', status: 'routing' },
      { n: '02', label: 'First response', status: 'drafting' },
      { n: '03', label: 'Resolution', status: 'resolving' },
      { n: '04', label: 'Escalation', status: 'handoff' },
    ],
  },
  automate: {
    headline: 'Support work we take off your team’s plate.',
    headNote:
      'From first reply to resolution — custom agents built for your helpdesk, knowledge base, and tone of voice.',
    items: [AUTOMATE_ITEMS[0], ...AUTOMATE_ITEMS.slice(1)],
  },
  howItWorks: {
    headline: 'From backlog to autopilot, in three quiet steps.',
    steps: HOW_IT_WORKS_STEPS,
  },
  faq: {
    faqs: [
      {
        q: 'Will it sound like our brand?',
        a: 'Yes — we train on your docs, past tickets, and style guides so replies match how your team already writes.',
      },
      ...FAQ_ITEMS.slice(1),
    ],
  },
  finalCta: {
    headlineLines: ['Let’s clear the support', 'backlog quietly.'],
    subtext: 'A short call to map your queue and pick the first ticket type worth automating.',
  },
};

export default campaign;
