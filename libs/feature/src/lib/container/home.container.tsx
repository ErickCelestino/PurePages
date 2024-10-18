import { Box } from '@mui/material';
import { SimpleHeader, SimpleHeroSection } from '../components';
import { FC } from 'react';
import { ButtonNavigation } from '../shared';

interface HomeContainerProps {
  companyLogo: string;
  companyLogoAltTitle?: string;
  title?: string;
  ctaButton: () => void;
  ctaButtonTitle?: string;
  listButtons: ButtonNavigation[];
  heroSectionImage: string;
  heroSectionTitle: string;
  herosectionSubTitle?: string;
}

export const HomeContainer: FC<HomeContainerProps> = ({
  companyLogo,
  companyLogoAltTitle,
  ctaButtonTitle,
  ctaButton,
  listButtons,
  title,
  heroSectionImage,
  heroSectionTitle,
  herosectionSubTitle,
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
    </Box>
  );
};
