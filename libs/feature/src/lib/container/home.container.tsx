import { Box } from '@mui/material';
import { SimpleHeader } from '../components';
import { FC } from 'react';
import { ButtonNavigation } from '../shared';

interface HomeContainerProps {
  companyLogo: string;
  companyLogoAltTitle?: string;
  title?: string;
  ctaButton: () => void;
  ctaButtonTitle?: string;
  listButtons: ButtonNavigation[];
}

export const HomeContainer: FC<HomeContainerProps> = ({
  companyLogo,
  companyLogoAltTitle,
  ctaButtonTitle,
  ctaButton,
  listButtons,
  title,
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
    </Box>
  );
};
