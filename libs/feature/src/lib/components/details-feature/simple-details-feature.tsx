import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { FC } from 'react';
import { CtaButton } from '../button';
import { IconTextProps } from '../../shared';
import { IconText } from '../lists';
import { SectionContainer } from '../container';

interface SimpleDetailsFeatureProps {
  backgroundColor?: string;
  image: string;
  imageAltTitle?: string;
  title: string;
  ctaButton: () => void;
  ctaButtonTitle?: string;
  listFeatures: IconTextProps[];
}

export const SimpleDetailsFeature: FC<SimpleDetailsFeatureProps> = ({
  backgroundColor,
  image,
  title,
  ctaButton,
  ctaButtonTitle,
  imageAltTitle = 'Foto do Produto',
  listFeatures,
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const lgDown = useMediaQuery(theme.breakpoints.down('lg'));

  const containerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
    mt: -2,
    mb: smDown ? theme.spacing(3) : '',
  };

  const textBoxStyles = {
    maxWidth: smDown ? '90%' : lgDown ? '70%' : '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: lgDown ? 'center' : 'flex-start',
    alignItems: lgDown ? 'center' : 'flex-start',
    marginTop: lgDown ? theme.spacing(5) : 'auto',
  };

  const imageBoxStyles = {
    flex: 1,
    maxWidth: '100%',
    objectFit: 'contain',
    mt: lgDown ? 0 : -10,
    mb: lgDown ? -5 : '',
    padding: smDown ? theme.spacing(1) : 'auto',
  };

  return (
    <SectionContainer
      id="details-feature"
      fullHeigth={lgDown ? false : true}
      aligmentContent
      backgroundColor={backgroundColor}
    >
      {!lgDown && (
        <Box
          component="img"
          height={theme.spacing(75)}
          src={image}
          alt={imageAltTitle}
          sx={imageBoxStyles}
        />
      )}

      <Box sx={containerStyles}>
        <Box sx={textBoxStyles}>
          <Box sx={{ width: '95%' }}>
            <Typography
              variant={smDown ? 'h6' : 'h5'}
              sx={{
                whiteSpace: 'pre-line',
                textAlign: 'start',
                maxWidth: smDown ? '100%' : lgDown ? '80%' : theme.spacing(55),
                fontSize: smDown ? theme.spacing(2) : 'auto',
                fontWeight: 800,
              }}
            >
              {title}
            </Typography>

            <Box mt={theme.spacing(2)}>
              {listFeatures.map((feature) => (
                <IconText
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  fontSize={lgDown ? theme.spacing(2) : theme.spacing(1.5)}
                />
              ))}
            </Box>
          </Box>

          {lgDown && (
            <Box
              component="img"
              height={lgDown ? theme.spacing(75) : theme.spacing(75)}
              src={image}
              alt={imageAltTitle}
              sx={imageBoxStyles}
            />
          )}

          <Box sx={{ marginTop: lgDown ? 'auto' : theme.spacing(12) }}>
            <CtaButton
              action={ctaButton}
              title={ctaButtonTitle}
              fontSize={13}
              width={smDown ? 30 : 32}
              padding={1.5}
              iconLeft={<ArrowBackIcon />}
            />
          </Box>
        </Box>
      </Box>
    </SectionContainer>
  );
};
