import type { CampaignId } from './types';

/**
 * Which homepage copy is live at https://scalentic.com/
 *
 * Change this value, run `npm run publish`, push to main.
 *
 * Options: 'default' | 'support' | 'leads' | 'data'
 */
export const ACTIVE_CAMPAIGN_ID = 'default' satisfies CampaignId;
