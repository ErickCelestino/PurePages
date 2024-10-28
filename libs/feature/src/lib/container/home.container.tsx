import {
  SimpleAbout,
  SimpleClients,
  SimpleCta,
  SimpleDetailsFeature,
  SimpleFooter,
  SimpleHeader,
  SimpleHeroSection,
} from '../components';
import { FC, ReactElement } from 'react';
import {
  ButtonNavigation,
  FaqText,
  IconNavigation,
  IconTextProps,
  LinkText,
} from '../shared';
import { SimpleCases } from '../components/cases/simple-cases';
import { SimpleLayout } from '../layout';
import { SimpleFaq } from '../components/faq';

interface HomeContainerProps {
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
  cases?: {
    casesTitle: string;
    casesImages: string[];
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
    footerMobileColor?: string;
    footerTabletColor?: string;
  };
  faq?: {
    faqTitle: string;
    faqSubTitle?: string;
    faqList: FaqText[];
  };
  clients?: {
    clientsTitle: string;
    clientsPhotos: string[];
  };
}

export const HomeContainer: FC<HomeContainerProps> = ({
  header: { headerTitle, headerListButtons },
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
  cases,
  ctaSection: {
    ctaSectionButtonTitle,
    ctaSectionTitle,
    ctaSectionSubTitle,
    ctaSectionIcon,
    ctaSectionBackground,
    ctaSectionTitleButton,
  },
  footer: {
    footerIcons,
    footerLinks,
    footerCopyrightText,
    footerMobileColor,
    footerTabletColor,
  },
  clients,
  faq,
}) => {
  return (
    <SimpleLayout
      header={
        <SimpleHeader
          title={headerTitle}
          logo={companyLogo}
          logoAltTitle={companyLogoAltTitle}
          listButtons={headerListButtons}
          ctaButton={ctaButton}
          ctaButtonTitle={ctaButtonTitle}
        />
      }
      heroSection={
        <SimpleHeroSection
          ctaButton={ctaButton}
          title={heroSectionTitle}
          image={heroSectionImage}
          subTitle={herosectionSubTitle}
        />
      }
      detailsFeature={
        <SimpleDetailsFeature
          image={detailsFeatureImage}
          imageAltTitle={detailsFeatureAltTitle}
          title={detailsFeatureTitle}
          ctaButton={ctaButton}
          ctaButtonTitle={ctaButtonTitle}
          listFeatures={listFeatures}
        />
      }
      about={
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
      }
      clients={
        clients ? (
          <SimpleClients
            title={clients.clientsTitle}
            photos={clients.clientsPhotos}
          />
        ) : undefined
      }
      cases={
        cases ? (
          <SimpleCases
            casesImages={cases.casesImages}
            title={cases.casesTitle}
          />
        ) : undefined
      }
      ctaSection={
        <SimpleCta
          ctaButton={ctaButton}
          ctaButtonTitle={ctaSectionButtonTitle}
          title={ctaSectionTitle}
          subTitle={ctaSectionSubTitle}
          ctaColor={ctaSectionBackground}
          icon={ctaSectionIcon}
          titleButtonColor={ctaSectionTitleButton}
        />
      }
      faq={
        faq ? (
          <SimpleFaq
            list={faq.faqList}
            title={faq.faqTitle}
            subTitle={faq.faqSubTitle}
          />
        ) : undefined
      }
      footer={
        <SimpleFooter
          links={footerLinks}
          icons={footerIcons}
          copyrightText={footerCopyrightText}
          colorMobile={footerMobileColor}
          colorTablet={footerTabletColor}
        />
      }
    />
  );
};
