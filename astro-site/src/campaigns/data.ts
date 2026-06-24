import { AUTOMATE_ITEMS, FAQ_ITEMS, HOW_IT_WORKS_STEPS } from './shared';
import type { Campaign } from './types';

const campaign: Campaign = {
  id: 'data',
  label: 'Data pipelines',
  meta: {
    title: 'Scalentic — AI data pipeline automation',
    description:
      'Custom AI agents that move, clean, and sync data between the tools you already use — quietly, on schedule, without manual exports.',
  },
  hero: {
    headlineLines: ['Your data,', 'synced quietly.'],
    description:
      'We build and run custom AI for data pipelines — records moved, cleaned, deduplicated, and synced across your stack so your team stops living in spreadsheets.',
    panelRows: [
      { n: '01', label: 'Extraction', status: 'pulling' },
      { n: '02', label: 'Cleaning', status: 'deduping' },
      { n: '03', label: 'Transformation', status: 'mapping' },
      { n: '04', label: 'Sync', status: 'pushing' },
    ],
  },
  automate: {
    headline: 'Data work we take off your plate.',
    headNote:
      'ETL without the manual glue — agents that keep systems aligned and reports trustworthy.',
    items: [AUTOMATE_ITEMS[1], AUTOMATE_ITEMS[0], AUTOMATE_ITEMS[2], AUTOMATE_ITEMS[3]],
  },
  howItWorks: {
    headline: 'From spreadsheet chaos to autopilot, in three quiet steps.',
    steps: HOW_IT_WORKS_STEPS,
  },
  faq: {
    faqs: [
      {
        q: 'Do you replace our data warehouse?',
        a: 'Usually no — we automate the movement and cleanup between the systems you already pay for, and fit into your existing stack.',
      },
      ...FAQ_ITEMS.slice(1),
    ],
  },
  finalCta: {
    headlineLines: ['Let’s stop the', 'manual exports quietly.'],
    subtext: 'A short call to map your data flows and pick the first sync worth automating.',
  },
};

export default campaign;
