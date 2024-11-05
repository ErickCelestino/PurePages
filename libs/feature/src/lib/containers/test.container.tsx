import { FC } from 'react';
import { ButtonNavigation } from '../shared';
import { SimpleHeader } from '../components';

export interface TestContainerProps {
  header: {
    headerTitle?: string;
    headerListButtons: ButtonNavigation[];
  };
  company: {
    companyLogo: string;
    companyLogoAltTitle?: string;
  };
  cta: {
    ctaButton: () => void;
    ctaButtonTitle?: string;
  };
}

export const TestContainer: FC<TestContainerProps> = ({
  header: { headerListButtons, headerTitle },
  company: { companyLogo, companyLogoAltTitle },
  cta: { ctaButtonTitle, ctaButton },
}) => {
  return (
    <SimpleHeader
      title={headerTitle}
      logo={companyLogo}
      logoAltTitle={companyLogoAltTitle}
      listButtons={headerListButtons}
      ctaButton={ctaButton}
      ctaButtonTitle={ctaButtonTitle}
    />
  );
};
