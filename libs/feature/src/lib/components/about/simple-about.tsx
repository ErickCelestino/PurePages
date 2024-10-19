import {
  Box,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { SectionContainer } from '../container';
import { FC } from 'react';
import { CtaButton } from '../button';
import { IconText } from '../lists';
import { IconTextProps } from '../../shared';

interface SimpleAboutProps {
  backgroundColor?: string;
  title: string;
  description: string;
  aboutList: IconTextProps[];
  ctaButton: () => void;
  ctaButtonTitle?: string;
}

export const SimpleAbout: FC<SimpleAboutProps> = ({
  backgroundColor,
  title,
  description,
  aboutList,
  ctaButton,
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
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'column',
          flex: 1,
          mt: -2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'column',
            flex: 1,
            mt: -2,
          }}
        >
          <Box mt={theme.spacing(8)} mb={theme.spacing(2)}>
            <Typography
              variant="h6"
              sx={{
                whiteSpace: 'pre-line',
                textAlign: smDown ? 'center' : 'start',
                maxWidth: smDown ? '100%' : theme.spacing(55),
                fontSize: smDown ? theme.spacing(2) : 'auto',
                fontWeight: 800,
              }}
            >
              {title}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                mt: theme.spacing(2),
                mb: theme.spacing(2),
                whiteSpace: 'pre-line',
                textAlign: smDown ? 'center' : 'start',
                maxWidth: smDown ? '100%' : theme.spacing(55),
                fontSize: smDown ? theme.spacing(2) : 'auto',
                fontWeight: 300,
              }}
            >
              {description}
            </Typography>

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
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'column',
          flex: 1,
          mt: -2,
          height: 'auto',
          background:
            'linear-gradient(35deg, #040405 21%, #040406, #0c0c0f, #101015, #111116, #050506, #060607, #060608)',
        }}
      >
        <Box
          sx={{
            maxWidth: smDown ? '80%' : '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: mdDown ? 'center' : 'flex-start',
            alignItems: mdDown ? 'center' : 'flex-start',
          }}
        >
          <Box mt={theme.spacing(2)}>
            {aboutList.length > 0 &&
              aboutList.map((about) => (
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Divider
                    sx={{ width: theme.spacing(50), mt: theme.spacing(3) }}
                  />
                  <IconText
                    icon={about.icon}
                    title={about.title}
                    width={theme.spacing(40)}
                  />
                  <Divider
                    sx={{ width: theme.spacing(50), mt: theme.spacing(3) }}
                  />
                </Box>
              ))}
          </Box>
        </Box>
      </Box>
    </SectionContainer>
  );
};
