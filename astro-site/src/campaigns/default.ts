import { AUTOMATE_ITEMS, FAQ_ITEMS, HOW_IT_WORKS_STEPS } from './shared';
import type { Campaign } from './types';

const campaign: Campaign = {
  id: 'default',
  label: 'General (default)',
  meta: {
    description:
      'Scalentic helps ambitious teams understand what to automate, build the right AI systems, and keep them running — from first conversation to live production.',
  },
  hero: {
    headlineLines: ['From unclear problem', 'to running system.'],
    description:
      'Most teams know something feels broken — but not exactly what to fix or where AI actually helps. Scalentic helps you figure that out, build the right thing, and keep it running. No in-house AI team needed.',
    panelRows: [
      { n: '01', label: 'Customer support', status: 'resolving' },
      { n: '02', label: 'Data pipelines', status: 'syncing' },
      { n: '03', label: 'Lead generation', status: 'scoring' },
      { n: '04', label: 'Product search', status: 'indexing' },
    ],
  },
  automate: {
    headline: 'Four kinds of work we take off your plate.',
    headNote:
      'Each one is a custom agent — built for your stack, your data, and your tone of voice.',
    items: AUTOMATE_ITEMS,
  },
  howItWorks: {
    headline: 'From first conversation to running system.',
    steps: HOW_IT_WORKS_STEPS,
  },
  faq: {
    faqs: FAQ_ITEMS,
  },
  finalCta: {
    headlineLines: ['Let’s take the busywork', 'off your plate.'],
    subtext: 'A short call is all it takes to find the first thing worth automating.',
  },
};

export default campaign;
