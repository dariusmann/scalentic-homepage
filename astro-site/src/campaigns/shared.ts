import type { AutomateItem, FaqItem, HowItWorksStep } from './types';

export const AUTOMATE_ITEMS: readonly AutomateItem[] = [
  {
    n: '01',
    title: 'Customer support automation',
    body: 'Faster response times, higher ticket resolution rates, and consistent quality — around the clock, without growing your support team.',
  },
  {
    n: '02',
    title: 'Data pipelines & ETL',
    body: 'Clean, reliable data arriving exactly where you need it — saving hours of manual exports and eliminating costly errors downstream.',
  },
  {
    n: '03',
    title: 'Lead generation & outreach',
    body: 'More qualified leads reached, followed up faster, and converted more often — without adding sales headcount.',
  },
  {
    n: '04',
    title: 'Product search & discovery',
    body: 'Customers finding the right product faster means higher conversion, lower bounce, and more revenue per session.',
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
    a: "If it involves repetitive decisions, data movement, or language processing, it's a candidate. My experience is deepest in support automation, data pipelines, lead generation, and product search — but I always start by identifying where the biggest productivity gain is hiding.",
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
  {
    q: 'What does it cost?',
    a: "Engagements are scoped to the work, not seats — a fixed build fee to get the first agent live, then a simple monthly fee to run and maintain it. We'll quote it on the call.",
  },
];
