import { trackEvent } from './track-event';

export const trackButtonClick = (buttonName: string, clientId: string) => {
  trackEvent(
    'button_click',
    {
      button_name: buttonName,
      timestamp: new Date().toISOString(),
    },
    clientId
  );
};
