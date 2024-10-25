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
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box>
      {header}
      {heroSection}
      {!mdDown && <Divider />}
      {detailsFeature}
      {!mdDown && <Divider />}
      {about}
      {!mdDown && <Divider />}
      {clients && (
        <Box>
          {clients}
          {!mdDown && <Divider />}
        </Box>
      )}
      {cases && (
        <Box>
          {cases}
          {!mdDown && <Divider />}
        </Box>
      )}
      {ctaSection}
      {!mdDown && <Divider />}
      {footer}
    </Box>
  );
};
