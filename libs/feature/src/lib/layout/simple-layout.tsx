import { Box, Divider, useMediaQuery, useTheme } from '@mui/material';
import { FC, ReactElement } from 'react';

interface SimpleLayoutProps {
  header: ReactElement;
  heroSection: ReactElement;
  detailsFeature: ReactElement;
  about: ReactElement;
  cases?: ReactElement;
  ctaSection: ReactElement;
  footer: ReactElement;
  clients?: ReactElement;
}

export const SimpleLayout: FC<SimpleLayoutProps> = ({
  about,
  ctaSection,
  detailsFeature,
  footer,
  header,
  heroSection,
  cases,
  clients,
}) => {
  const theme = useTheme();
  const lgDown = useMediaQuery(theme.breakpoints.down('lg'));
  return (
    <Box width="100%">
      {header}
      {heroSection}
      {!lgDown && <Divider />}
      {detailsFeature}
      {!lgDown && <Divider />}
      {about}
      {!lgDown && <Divider />}
      {clients && (
        <Box>
          {clients}
          {!lgDown && <Divider />}
        </Box>
      )}
      {cases && (
        <Box>
          {cases}
          {!lgDown && <Divider />}
        </Box>
      )}
      {ctaSection}
      {!lgDown && <Divider />}
      {footer}
    </Box>
  );
};
