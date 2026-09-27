/**
 * Medizinfuchs case study — English copy.
 */

export const medizinfuchsEn = {
  meta: {
    title: 'Medizinfuchs — Automated Product Descriptions | Scalentic',
    description:
      'How Medizinfuchs GmbH cut ~70% of manual content creation for product descriptions with a multi-source pipeline.',
    ogTitle: 'Medizinfuchs case study: automated product descriptions',
    ogDescription:
      'From manual enrichment to a guarded multi-source pipeline. ~70% less manual content creation.',
  },

  hero: {
    eyebrow: 'Case study',
    title: 'Automated product descriptions',
    summary:
      'From manual enrichment to a guarded multi-source pipeline — with a quality gate before publish.',
    clientLabel: 'Client',
    client: 'Medizinfuchs GmbH',
    clientNote: 'Pharmacy price-comparison platform',
    clientUrl: 'https://www.medizinfuchs.de/',
    logo: {
      src: '/assets/case-studies/medizinfuchs-logo.svg',
      alt: 'Medizinfuchs logo',
      width: 210,
      height: 78,
    },
    kpi: {
      value: '~70%',
      label: 'less manual content creation',
    },
  },

  challenge: {
    eyebrow: 'Challenge',
    headline: 'Manual work did not scale',
    lead: 'Product data enrichment and descriptions were created by hand, product by product.',
    before: {
      title: 'Before',
      items: [
        'Open and compare sources per product',
        'Write attributes and copy manually',
        'Check mandatory legal notices one by one',
      ],
    },
    after: {
      title: 'After',
      items: [
        'Ingest 5–12 partner sources automatically',
        'Extract, merge, and guard structured content',
        'Publish only descriptions that pass the gate',
      ],
    },
  },

  pipeline: {
    eyebrow: 'Pipeline',
    headline: 'From PZN to published description',
    lead: 'Every step has a clear job. Products missing required information never go live.',
    nodes: [
      {
        id: 'pzn',
        label: 'PZN',
        short: 'Product ID',
        detail:
          'Every product is identified by its PZN — the entry point for the full pipeline.',
      },
      {
        id: 'sources',
        label: '5–12 sources',
        short: 'Partner shops',
        detail:
          'For each PZN, product pages from 5 to 12 partner online pharmacies are used as sources — including Aponeo, apolux, Pharmeo, Shop-Apotheke, and DocMorris.',
      },
      {
        id: 'etl',
        label: 'Scraping & ETL',
        short: 'Normalize',
        detail: 'Product pages are scraped at scale and normalized into a consistent format.',
      },
      {
        id: 'extract',
        label: 'Structured extraction',
        short: 'Fixed schema',
        detail:
          'An LLM maps each source into a fixed schema: attributes, safety, benefits, FAQs, and linked documents.',
      },
      {
        id: 'synth',
        label: 'Multi-source synthesis',
        short: 'Merge',
        detail:
          'Collect → categorize → reconcile → prioritize by source trust → synthesize. Hard contradictions follow source priority; equal trust keeps both values under “Unassigned”.',
      },
      {
        id: 'guard',
        label: 'Guardrails',
        short: 'YMYL / E-A-T',
        detail:
          'No invented facts, no interpretation, no generalization, no averaging of conflicts. Mandatory notices for dietary supplements are added automatically.',
      },
      {
        id: 'gate',
        label: 'Quality gate',
        short: 'Release',
        detail:
          'Products missing required sections or information are not published. The reason is logged for review.',
      },
      {
        id: 'publish',
        label: 'Published',
        short: 'Description',
        detail:
          'Only approved products appear with up to 14 sections in a fixed order — empty sections are skipped.',
      },
    ],
    reject: {
      id: 'review',
      label: 'Log / Review',
      detail:
        'Rejected products land in review with a clear reason — nothing goes live silently.',
    },
    hint: 'Click or tap for details.',
  },

  sources: {
    eyebrow: 'Sources',
    headline: '5–12 sources, one structured description',
    lead: 'Each product pulls in five to twelve partner sources. The pipeline categorizes, reconciles, and prioritizes by source trust — instead of blending prose.',
    partners: ['Aponeo', 'apolux', 'Pharmeo', 'Shop-Apotheke', 'DocMorris', '… up to 12'],
    stages: [
      { id: 'collect', label: 'Collect' },
      { id: 'categorize', label: 'Categorize' },
      { id: 'reconcile', label: 'Reconcile' },
      { id: 'prioritize', label: 'Prioritize' },
      { id: 'synthesize', label: 'Synthesize' },
    ],
    outputLabel: 'Structured product description',
    diagramAria:
      'Between five and twelve partner sources flow through categorize, reconcile, and prioritize into one structured product description',
  },

  guardrails: {
    eyebrow: 'Guardrails',
    headline: 'Health content under YMYL rules',
    lead: 'The pipeline may merge facts — not invent or interpret them.',
    allowed: {
      title: 'Allowed',
      items: [
        'Extract and assign facts from sources',
        'Merge complementary details',
        'Add mandatory dietary-supplement notices automatically',
        'Resolve contradictions by source priority or show them transparently',
      ],
    },
    forbidden: {
      title: 'Not allowed',
      items: [
        'Invent facts',
        'Interpret or generalize sources',
        '“Resolve” conflicts by averaging',
        'Publish incomplete products',
      ],
    },
  },

  output: {
    eyebrow: 'Output',
    headline: 'Up to 14 sections — fixed order',
    lead: 'Only sections with content are emitted. Empty fields are skipped.',
    sections: [
      { id: 'haupt', title: 'Main description', hasData: true },
      { id: 'eigenschaften', title: 'Properties', hasData: true },
      { id: 'anwendung', title: 'Use', hasData: true },
      { id: 'verzehr', title: 'Recommended intake', hasData: true },
      { id: 'gebrauch', title: 'Instructions for use', hasData: false },
      { id: 'aufbewahrung', title: 'Storage', hasData: true },
      { id: 'zutaten', title: 'Ingredients', hasData: true },
      { id: 'inhaltsstoffe', title: 'Composition (table)', hasData: true, highlight: true },
      { id: 'allergie', title: 'Allergy notices', hasData: true },
      { id: 'naehrwert', title: 'Nutrition table', hasData: false },
      { id: 'groesse', title: 'Size chart', hasData: false },
      { id: 'warn', title: 'Warnings', hasData: true },
      { id: 'hersteller', title: 'Manufacturer data', hasData: true },
      { id: 'nicht', title: 'Unassigned', hasData: false },
    ],
    skippedNote: 'No data — skipped',
    ingredientsTable: {
      caption: 'Example: composition (excerpt)',
      headers: ['Substance', 'Amount'],
      rows: [
        ['Vitamin C', '80 mg'],
        ['Zinc', '10 mg'],
        ['Biotin', '50 µg'],
      ],
    },
  },

  tech: {
    eyebrow: 'Tech',
    headline: 'Stack',
    badges: ['Python', 'n8n', 'GPT', 'Gemini', 'Claude'],
    note: 'n8n for early prototyping alongside the Python core pipeline.',
  },

  result: {
    eyebrow: 'Result',
    headline: 'Less manual work — same duty of care',
    kpi: {
      value: '~70%',
      label: 'less manual content creation',
    },
    body: 'The pipeline handles scraping, extraction, synthesis, and quality control. Release stays rule-based — with no invented facts.',
    ctaPrimary: 'Book a call',
    ctaSecondary: 'Write an email',
  },
} as const;
