import { trackEvent } from './track-event';

export const trackExitIntent = (clientId: string) => {
  trackEvent(
    'exit_intent',
    {
      timestamp: new Date().toISOString(),
    },
    clientId
  );
};
