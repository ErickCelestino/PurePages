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
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box>
      {header}
      {heroSection}
      {!smDown && <Divider />}
      {detailsFeature}
      {!smDown && <Divider />}
      {about}
      {!smDown && <Divider />}
      {clients && (
        <Box>
          {clients}
          {!smDown && <Divider />}
        </Box>
      )}
      {cases && (
        <Box>
          {cases}
          {!smDown && <Divider />}
        </Box>
      )}
      {ctaSection}
      {!smDown && <Divider />}
      {footer}
    </Box>
  );
};
