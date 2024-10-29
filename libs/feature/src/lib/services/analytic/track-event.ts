export const trackEvent = (
  eventName: string,
  eventData: Record<string, unknown>,
  clientId: string
) => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventData,
      clientId: clientId,
    });
  }
};
