import TagManager from 'react-gtm-module';

export const GTMIntegration = (gtmId: string) => {
  console.log(process.env['REACT_APP_TEST']);
  if (gtmId) {
    const tagManagerArgs = {
      gtmId: gtmId,
    };
    TagManager.initialize(tagManagerArgs);
  }
};
