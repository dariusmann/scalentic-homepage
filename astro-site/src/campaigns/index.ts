import { ACTIVE_CAMPAIGN_ID } from './active';
import data from './data';
import defaultCampaign from './default';
import leads from './leads';
import support from './support';
import type { Campaign, CampaignId } from './types';

export const campaigns = {
  default: defaultCampaign,
  support,
  leads,
  data,
} as const satisfies Record<CampaignId, Campaign>;

export type { Campaign, CampaignId };

export { ACTIVE_CAMPAIGN_ID };

export const campaign = campaigns[ACTIVE_CAMPAIGN_ID];

export const campaignIds = Object.keys(campaigns) as CampaignId[];
