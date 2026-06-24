import type { AutomateItem, FaqItem, HowItWorksStep } from './types';

export const AUTOMATE_ITEMS: readonly AutomateItem[] = [
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
];

export const HOW_IT_WORKS_STEPS: readonly HowItWorksStep[] = [
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
];

export const FAQ_ITEMS: readonly FaqItem[] = [
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
];
