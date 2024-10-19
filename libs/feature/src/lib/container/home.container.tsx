import { Box, Divider } from '@mui/material';
import {
  SimpleAbout,
  SimpleDetailsFeature,
  SimpleHeader,
  SimpleHeroSection,
} from '../components';
import { FC } from 'react';
import { ButtonNavigation, IconTextProps } from '../shared';

interface HomeContainerProps {
  title?: string;
  listButtons: ButtonNavigation[];
  company: {
    companyLogo: string;
    companyLogoAltTitle?: string;
  };
  cta: {
    ctaButton: () => void;
    ctaButtonTitle?: string;
  };
  heroSection: {
    heroSectionImage: string;
    heroSectionTitle: string;
    herosectionSubTitle?: string;
  };
  detailsFeature: {
    detailsFeatureAltTitle?: string;
    detailsFeatureImage: string;
    detailsFeatureTitle: string;
    listFeatures: IconTextProps[];
  };
  about: {
    aboutTitle: string;
    aboutDescription: string;
    aboutBackgroundColor?: string;
    aboutList: IconTextProps[];
  };
}

export const HomeContainer: FC<HomeContainerProps> = ({
  listButtons,
  title,
  company: { companyLogo, companyLogoAltTitle },
  cta: { ctaButtonTitle, ctaButton },
  heroSection: { heroSectionImage, heroSectionTitle, herosectionSubTitle },
  detailsFeature: {
    detailsFeatureImage,
    detailsFeatureAltTitle,
    detailsFeatureTitle,
    listFeatures,
  },
  about: { aboutTitle, aboutBackgroundColor, aboutList, aboutDescription },
}) => {
  return (
    <Box>
      <SimpleHeader
        title={title}
        logo={companyLogo}
        logoAltTitle={companyLogoAltTitle}
        listButtons={listButtons}
        ctaButton={ctaButton}
        ctaButtonTitle={ctaButtonTitle}
      />
      <SimpleHeroSection
        ctaButton={ctaButton}
        title={heroSectionTitle}
        image={heroSectionImage}
        subTitle={herosectionSubTitle}
      />
      <Divider />
      <SimpleDetailsFeature
        image={detailsFeatureImage}
        imageAltTitle={detailsFeatureAltTitle}
        title={detailsFeatureTitle}
        ctaButton={ctaButton}
        ctaButtonTitle={ctaButtonTitle}
        listFeatures={listFeatures}
      />
      <Divider />
      <SimpleAbout
        aboutList={aboutList}
        ctaButton={ctaButton}
        ctaButtonTitle={ctaButtonTitle}
        title={aboutTitle}
        description={aboutDescription}
        backgroundColor={aboutBackgroundColor}
      />
    </Box>
  );
};
