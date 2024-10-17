import { Box, Typography, useTheme } from '@mui/material';
import { FC } from 'react';
import { CtaButton } from '../button';

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
  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        background: backgroundColor,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              whiteSpace: 'pre-line',
              maxWidth: theme.spacing(55),
              color: 'white',
            }}
          >
            {title}
          </Typography>
          {subTitle && (
            <Typography
              variant="body2"
              mt={theme.spacing(1)}
              fontSize={theme.spacing(1.2)}
              color="white"
            >
              {subTitle}
            </Typography>
          )}
        </Box>
        <Box mt={theme.spacing(2)}>
          <CtaButton action={ctaButton} title={ctaButtonTitle} />
        </Box>
      </Box>
      <Box
        component="img"
        height={theme.spacing(70)}
        src={image}
        alt={imageAltTitle}
      />
    </Box>
  );
};
