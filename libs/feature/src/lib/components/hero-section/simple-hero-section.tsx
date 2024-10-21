import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { FC } from 'react';
import { CtaButton } from '../button';
import { SectionContainer } from '../container';

interface SimpleHeroSectionProps {
  title: string;
  subTitle?: string;
  ctaButton: () => void;
  image: string;
  imageAltTitle?: string;
  ctaButtonTitle?: string;
  backgroundColor?: string;
}

export const SimpleHeroSection: FC<SimpleHeroSectionProps> = ({
  title,
  subTitle,
  ctaButton,
  image,
  imageAltTitle = 'Foto do Título',
  backgroundColor = 'linear-gradient(35deg, #040405 21%, #040406, #0c0c0f, #101015, #111116, #050506, #060607, #060608)',
  ctaButtonTitle,
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <SectionContainer
      fullHeigth
      id="hero-section"
      backgroundColor={backgroundColor}
    >
      <Box
        sx={{
          flex: 1,
          mt: mdDown ? -15 : -5,
          ml: mdDown ? '' : theme.spacing(10),
          maxWidth: smDown ? '80%' : theme.spacing(72),
          alignContent: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',

            textAlign: smDown ? 'center' : 'start',
          }}
        >
          <Typography
            variant={mdDown ? 'h6' : 'h5'}
            sx={{
              whiteSpace: 'pre-line',
              color: 'white',
              fontSize: smDown ? theme.spacing(2) : 'auto',
              fontWeight: 800,
            }}
          >
            {title}
          </Typography>
          {subTitle && (
            <Typography
              variant="body2"
              mt={theme.spacing(1)}
              fontSize={theme.spacing(1.5)}
              color="white"
            >
              {subTitle}
            </Typography>
          )}
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: smDown ? 'center' : '',
          }}
          mt={theme.spacing(2)}
        >
          <CtaButton
            action={ctaButton}
            title={ctaButtonTitle}
            fontSize={11}
            width={smDown ? 17 : 25}
            iconRight={<ArrowForwardIcon />}
          />
        </Box>
      </Box>
    </SectionContainer>
  );
};
