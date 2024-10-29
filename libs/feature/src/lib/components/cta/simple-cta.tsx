import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
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
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

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
          variant={smDown ? 'h5' : 'h4'}
          sx={{
            whiteSpace: 'pre-line',
            fontWeight: 800,
            mt: theme.spacing(3),
          }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="body2"
            color={subTitleColor}
            sx={{
              mt: theme.spacing(6),
              maxWidth: smDown ? '70%' : mdDown ? '60%' : theme.spacing(40),
              fontSize: smDown ? theme.spacing(1.7) : theme.spacing(1.8),
            }}
          >
            {subTitle}
          </Typography>
        </Box>
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
