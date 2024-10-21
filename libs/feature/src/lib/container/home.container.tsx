import { Box, Divider } from '@mui/material';
import {
  SimpleAbout,
  SimpleCta,
  SimpleDetailsFeature,
  SimpleFooter,
  SimpleHeader,
  SimpleHeroSection,
} from '../components';
import { FC, ReactElement } from 'react';
import {
  ButtonNavigation,
  IconNavigation,
  IconTextProps,
  LinkText,
} from '../shared';

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
    aboutImage: string;
    aboutImageAltTitle?: string;
    aboutRigthBackground?: string;
  };
  ctaSection: {
    ctaSectionButtonTitle: string;
    ctaSectionTitle: string;
    ctaSectionSubTitle: string;
    ctaSectionIcon: ReactElement;
    ctaSectionBackground?: string;
    ctaSectionTitleButton?: string;
  };
  footer: {
    footerLinks: LinkText[];
    footerCopyrightText?: string;
    footerIcons: IconNavigation[];
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
  about: {
    aboutTitle,
    aboutBackgroundColor,
    aboutList,
    aboutDescription,
    aboutImageAltTitle,
    aboutImage,
    aboutRigthBackground,
  },
  ctaSection: {
    ctaSectionButtonTitle,
    ctaSectionTitle,
    ctaSectionSubTitle,
    ctaSectionIcon,
    ctaSectionBackground,
    ctaSectionTitleButton,
  },
  footer: { footerIcons, footerLinks, footerCopyrightText },
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
        aboutImage={aboutImage}
        aboutImageAltTitle={aboutImageAltTitle}
        backgroundRight={aboutRigthBackground}
      />
      <Divider />
      <SimpleCta
        ctaButton={ctaButton}
        ctaButtonTitle={ctaSectionButtonTitle}
        title={ctaSectionTitle}
        subTitle={ctaSectionSubTitle}
        ctaColor={ctaSectionBackground}
        icon={ctaSectionIcon}
        titleButtonColor={ctaSectionTitleButton}
      />
      <Divider />
      <SimpleFooter
        links={footerLinks}
        icons={footerIcons}
        copyrightText={footerCopyrightText}
      />
    </Box>
  );
};
