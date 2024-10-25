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
      fullHeigth={lgDown && !smDown ? false : true}
      id="hero-section"
      backgroundColor={backgroundColor}
    >
      <Box
        sx={{
          flex: 1,
          mt: smDown ? theme.spacing(2) : lgDown ? 0 : -5,
          ml: smDown
            ? theme.spacing(2.5)
            : lgDown
            ? theme.spacing(10)
            : theme.spacing(15),
          width: 'auto',
          maxWidth: smDown ? '100%' : lgDown ? '80%' : '50%',
          alignContent: 'center',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'start',
            maxWidth: smDown ? '86%' : 'auto',
            marginLeft: smDown ? theme.spacing(2) : '',
          }}
        >
          <Typography
            variant={xlDown ? 'h5' : 'h4'}
            sx={{
              whiteSpace: 'pre-line',
              color: 'white',
              maxWidth: '95%',
              fontSize: smDown
                ? theme.spacing(2)
                : mdDown
                ? theme.spacing(4)
                : 'auto',
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
            marginLeft: smDown ? theme.spacing(-2) : '',
          }}
          mt={mdDown ? theme.spacing(3) : theme.spacing(5)}
        >
          <CtaButton
            action={ctaButton}
            title={ctaButtonTitle}
            fontSize={11}
            width={30}
            padding={mdDown ? 1.5 : 2}
            iconRight={<ArrowForwardIcon />}
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: smDown ? 'center' : 'flex-end',
          alignItems: smDown ? 'center' : 'flex-end',
          position: 'relative',
          height: lgDown ? '43%' : '100%',
        }}
      >
        <Box
          component="img"
          height={
            smDown
              ? '100%'
              : mdDown
              ? theme.spacing(60)
              : lgDown
              ? theme.spacing(70)
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
