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
    <SectionContainer id="hero-section" backgroundColor={backgroundColor}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          flex: 1,
          mt: 2,
        }}
      >
        <Box
          sx={{
            maxWidth: smDown ? '80%' : '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: mdDown ? 'center' : 'start',
            alignItems: mdDown ? 'center' : 'start',
            padding: smDown ? '' : theme.spacing(6),
          }}
        >
          <Typography
            variant="h6"
            sx={{
              whiteSpace: 'pre-line',
              maxWidth: theme.spacing(55),
              color: 'white',
              textAlign: mdDown ? 'center' : 'start',
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
          <Box mt={theme.spacing(2)}>
            <CtaButton
              action={ctaButton}
              title={ctaButtonTitle}
              fontSize={11}
              width={smDown ? 17 : 25}
              iconRight={<ArrowForwardIcon />}
            />
          </Box>
        </Box>
      </Box>

      <Box
        component="img"
        height={mdDown ? theme.spacing(50) : theme.spacing(70)}
        src={image}
        alt={imageAltTitle}
        sx={{
          flex: 1,
          maxWidth: '100%',
          objectFit: 'contain',
          mt: smDown ? -9 : mdDown ? -20 : -10,
        }}
      />
    </SectionContainer>
  );
};
