import { Box } from '@mui/material';
import { SimpleHeader, SimpleHeadLine } from '../components';
import { FC } from 'react';
import { ButtonNavigation } from '../shared';

interface HomeContainerProps {
  companyLogo: string;
  companyLogoAltTitle?: string;
  title?: string;
  ctaButton: () => void;
  ctaButtonTitle?: string;
  listButtons: ButtonNavigation[];
  headLineImage: string;
  headlineTitle: string;
}

export const HomeContainer: FC<HomeContainerProps> = ({
  companyLogo,
  companyLogoAltTitle,
  ctaButtonTitle,
  ctaButton,
  listButtons,
  title,
  headLineImage,
  headlineTitle,
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
      <SimpleHeadLine
        ctaButton={ctaButton}
        title={headlineTitle}
        image={headLineImage}
      />
    </Box>
  );
};
