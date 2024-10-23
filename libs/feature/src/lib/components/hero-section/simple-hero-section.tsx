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
  const lgDown = useMediaQuery(theme.breakpoints.down('lg'));
  const xlDown = useMediaQuery(theme.breakpoints.down('xl'));

  return (
    <SectionContainer
      fullHeigth
      id="hero-section"
      backgroundColor={backgroundColor}
    >
      <Box
        sx={{
          flex: 1,
          mt: mdDown ? 0 : -5,
          ml: mdDown ? '' : lgDown ? theme.spacing(10) : theme.spacing(15),
          width: 'auto',
          maxWidth: mdDown ? '80%' : lgDown ? '60%' : '50%',
          alignContent: 'center',
          position: 'relative',
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
            variant={xlDown ? 'h6' : 'h4'}
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
          mt={mdDown ? theme.spacing(3) : theme.spacing(5)}
        >
          <CtaButton
            action={ctaButton}
            title={ctaButtonTitle}
            fontSize={11}
            width={smDown ? 17 : 30}
            padding={mdDown ? 0 : 2}
            iconRight={<ArrowForwardIcon />}
          />
        </Box>
      </Box>

      <Box
        sx={{
          position: smDown ? 'static' : 'absolute',
          bottom: 0,
          right: 0,
          zIndex: 0,
          marginBottom: smDown
            ? -0.5
            : mdDown
            ? theme.spacing(-2.6)
            : lgDown
            ? theme.spacing(-1.5)
            : theme.spacing(-4),
        }}
      >
        <Box
          component="img"
          height={
            smDown
              ? '100%'
              : mdDown
              ? theme.spacing(55)
              : lgDown
              ? theme.spacing(60)
              : xlDown
              ? theme.spacing(75)
              : theme.spacing(95)
          }
          src={image}
          alt={imageAltTitle}
          sx={{
            maxWidth: '100%',
            objectFit: 'contain',
          }}
        />
      </Box>
    </SectionContainer>
  );
};
