import type { AutomateItem, FaqItem, HowItWorksStep } from './types';

export const AUTOMATE_ITEMS: readonly AutomateItem[] = [
  {
    n: '01',
    title: 'Customer support',
    body: 'Tickets triaged, answered, and resolved around the clock — in your voice, with a clean handoff to a human whenever it matters.',
  },
  {
    n: '02',
    title: 'Data pipelines',
    body: 'Data moved, cleaned, deduplicated, and synced between the tools you already use — quietly, on schedule, without the manual exports.',
  },
  {
    n: '03',
    title: 'Lead generation',
    body: 'Inbound and outbound leads found, qualified, and followed up automatically — so good prospects never sit waiting for a reply.',
  },
  {
    n: '04',
    title: 'Product search',
    body: 'Catalogs indexed into fast, relevant search and recommendations — so customers find the right thing instead of leaving.',
  },
];

export const HOW_IT_WORKS_STEPS: readonly HowItWorksStep[] = [
  {
    n: '01',
    title: 'Understand the problem',
    body: "We start by mapping your operations — not your wishlist. We dig into how work actually flows, where the friction is, and tell you honestly what's worth automating and what isn't. Most clients find this conversation valuable on its own.",
  },
  {
    n: '02',
    title: 'Design the solution',
    body: 'We propose the right approach for your stack, your data, and your constraints — then align on scope, timeline, and what success looks like before anything gets built.',
  },
  {
    n: '03',
    title: 'Build the agent',
    body: 'We design, build, and test a custom AI agent that fits your tools, your data, and the way your team works. You review. We iterate.',
  },
  {
    n: '04',
    title: 'Run & improve',
    body: 'We deploy, monitor, and keep improving over time. You see the work get done — quietly, reliably, without babysitting it.',
  },
];

export const FAQ_ITEMS: readonly FaqItem[] = [
  {
    q: 'What kind of work can you automate?',
    a: "If it's repetitive and rule-or-language based, it's a candidate. Most of our work falls into support, data movement, lead generation, and product search — but we always start by mapping your specific busywork.",
  },
  {
    q: 'How long until something is live?',
    a: 'Most first agents are running in under two weeks. We start narrow, get something working in production, then expand from there.',
  },
  {
    q: 'Do we need a technical team?',
    a: 'No. We handle the building and the running. Your team points us at the work and reviews the results — we take care of the rest.',
  },
  {
    q: 'How do you handle our data and security?',
    a: 'We work inside your tools and permissions, keep data scoped to the task, and sign whatever agreements your security team needs before anything touches production.',
  },
  {
    q: 'What does it cost?',
    a: "Engagements are scoped to the work, not seats — a fixed build fee to get the first agent live, then a simple monthly fee to run and maintain it. We'll quote it on the call.",
  },
];
