export type HeroPanelRow = {
  n: string;
  label: string;
  status: string;
};

export type AutomateItem = {
  n: string;
  title: string;
  body: string;
};

export type HowItWorksStep = {
  n: string;
  title: string;
  body: string;
};

export type FaqItem = {
  q: string;
  a: string;
};

export type CampaignId = 'default' | 'support' | 'leads' | 'data';

export type Campaign = {
  id: CampaignId;
  label: string;
  meta: {
    title?: string;
    description: string;
  };
  hero: {
    headlineLines: readonly string[];
    description: string;
    panelRows: readonly HeroPanelRow[];
  };
  automate: {
    headline: string;
    headNote: string;
    items: readonly AutomateItem[];
  };
  howItWorks: {
    headline: string;
    steps: readonly HowItWorksStep[];
  };
  faq: {
    faqs: readonly FaqItem[];
  };
  finalCta: {
    headlineLines: readonly string[];
    subtext: string;
  };
};
