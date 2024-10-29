import { NavigateToWathsApp } from '../../shared';
import { trackButtonClick } from '../analytic';

export const navigateToWathsApp = (input: NavigateToWathsApp) => {
  const { clientId, message, phone } = input;
  trackButtonClick('CTA', clientId);
  window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
};
