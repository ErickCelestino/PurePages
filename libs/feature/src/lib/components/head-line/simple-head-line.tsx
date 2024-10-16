import { Box, Typography, useTheme } from '@mui/material';
import { FC } from 'react';
import { CtaButton } from '../button';

interface SimpleHeadLineProps {
  title: string;
  subTitle?: string;
  ctaButton: () => void;
  image: string;
  imageAltTitle?: string;
  ctaButtonTitle?: string;
}

export const SimpleHeadLine: FC<SimpleHeadLineProps> = ({
  title,
  subTitle,
  ctaButton,
  image,
  imageAltTitle = 'Foto do Título',
  ctaButtonTitle,
}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            whiteSpace: 'pre-line',
          }}
        >
          {title}
        </Typography>
        {subTitle && <Typography variant="body2">{subTitle}</Typography>}
        <Box mt={theme.spacing(2)}>
          <CtaButton action={ctaButton} title={ctaButtonTitle} />
        </Box>
      </Box>
      <Box height={theme.spacing(50)}>
        <img src={image} alt={imageAltTitle} />
      </Box>
    </Box>
  );
};
