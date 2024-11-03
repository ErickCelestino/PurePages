import { useTheme } from '@mui/material';
import { useMediaQuery, Box, Typography } from '@mui/material';
import { FC, ReactElement } from 'react';
import { CtaButton } from '../button';
import { CtaSection } from '../../shared';

interface CustomHeroSectionProps {
  title: string;
  subTitle?: string;
  cta: CtaSection;
  image: string;
  imageAltTitle?: string;
  backgroundColor?: string;
  textColor?: string;
  iconRight?: ReactElement;
  iconLeft?: ReactElement;
}

export const CustomHeroSection: FC<CustomHeroSectionProps> = ({
  title,
  subTitle,
  cta: { ctaButton, ctaButtonTitle, ctaColor = 'black', borderRadius = 0 },
  image,
  imageAltTitle = 'Foto do da Hero Section',
  backgroundColor = 'white',
  textColor,
  iconLeft,
  iconRight,
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const lgDown = useMediaQuery(theme.breakpoints.down('lg'));
  const xlDown = useMediaQuery(theme.breakpoints.down('xl'));

  return (
    <Box
      component="section"
      id="hero-section"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        minHeight: '100vh',
        backgroundColor: backgroundColor,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: 'auto',
          alignContent: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'start',
            marginRight: theme.spacing(3),
          }}
        >
          <Typography
            variant={xlDown ? 'h5' : 'h3'}
            sx={{
              whiteSpace: 'pre-line',
              color: textColor,
              maxWidth: '60%',
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
              sx={{
                mt: theme.spacing(1),
                maxWidth: '56%',
              }}
              fontSize={theme.spacing(2)}
              color={textColor}
            >
              {subTitle}
            </Typography>
          )}
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
              width={30}
              padding={mdDown ? 1.5 : 2}
              iconRight={iconRight}
              iconLeft={iconLeft}
              color={ctaColor}
              borderRadius={borderRadius}
            />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
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
            maxHeight: '100%',
            objectFit: 'contain',
          }}
        />
      </Box>
    </Box>
  );
};
