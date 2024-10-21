import { Box, Typography, useTheme } from '@mui/material';
import { FC, ReactElement } from 'react';
import { CtaButton } from '../button';

interface SimpleCtaProps {
  title: string;
  subTitle: string;
  ctaButton: () => void;
  ctaButtonTitle?: string;
  ctaColor?: string;
  icon: ReactElement;
  titleButtonColor?: string;
  subTitleColor?: string;
}

export const SimpleCta: FC<SimpleCtaProps> = ({
  title,
  subTitle,
  ctaButton,
  ctaButtonTitle,
  ctaColor,
  icon,
  titleButtonColor = '#013815',
  subTitleColor = '#5F637B',
}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        id: 'cta-section',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            whiteSpace: 'pre-line',
            fontWeight: 800,
            mt: theme.spacing(3),
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          maxWidth={theme.spacing(35)}
          color={subTitleColor}
          sx={{
            mt: theme.spacing(3),
            fontSize: theme.spacing(1.5),
          }}
        >
          {subTitle}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            mt: theme.spacing(3),
            mb: theme.spacing(3),
          }}
        >
          <Box>
            <CtaButton
              action={ctaButton}
              title={ctaButtonTitle}
              color={ctaColor}
              iconLeft={icon}
              titleColor={titleButtonColor}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
