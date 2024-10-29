import { trackEvent } from './track-event';

export const trackPageView = (pageName: string, clientId: string) => {
  trackEvent(
    'page_view',
    {
      page_name: pageName,
      timestamp: new Date().toISOString(),
    },
    clientId
  );
};
