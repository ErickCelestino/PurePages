import { FC } from 'react';
import { ButtonNavigation, CtaSection } from '../shared';
import { CustomHeroSection, SimpleHeader } from '../components';
import { Box, Divider } from '@mui/material';

export interface TestContainerProps {
  header: {
    headerTitle?: string;
    headerListButtons: ButtonNavigation[];
  };
  company: {
    companyLogo: string;
    companyLogoAltTitle?: string;
  };
  cta: CtaSection;
  heroSection: {
    heroSectionImage: string;
    heroSectionTitle: string;
    herosectionSubTitle?: string;
  };
}

export const TestContainer: FC<TestContainerProps> = ({
  header: { headerListButtons, headerTitle },
  company: { companyLogo, companyLogoAltTitle },
  cta,
  heroSection: { heroSectionImage, heroSectionTitle, herosectionSubTitle },
}) => {
  return (
    <Box>
      <SimpleHeader
        title={headerTitle}
        logo={companyLogo}
        logoAltTitle={companyLogoAltTitle}
        listButtons={headerListButtons}
        backgroundColor="white"
        textColor="black"
      />
      <Divider />
      <CustomHeroSection
        cta={cta}
        title={heroSectionTitle}
        image={heroSectionImage}
        subTitle={herosectionSubTitle}
      />
    </Box>
  );
};
