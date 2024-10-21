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
  backgroundRight?: string;
  dividerColor?: string;
}

export const SimpleAbout: FC<SimpleAboutProps> = ({
  backgroundColor,
  title,
  description,
  aboutList,
  ctaButton,
  ctaButtonTitle,
  backgroundRight = 'linear-gradient(35deg, #2d2c2c, #302c2c, #592527 35%, #762124, #9c1b1f 90%)',
  dividerColor = '#8e8e8e',
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <SectionContainer id="about-section" backgroundColor={backgroundColor}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: smDown ? 'center' : 'space-between',
          alignItems: 'center',
          flexDirection: 'column',
          flex: 1,
          mt: -2,
          mb: smDown ? theme.spacing(3) : '',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: smDown ? 'center' : 'space-between',
            alignItems: 'center',
            flexDirection: 'column',
            flex: 1,
            mt: -2,
            maxWidth: smDown ? '80%' : 'auto',
          }}
        >
          <Box mt={theme.spacing(8)} mb={theme.spacing(2)}>
            <Typography
              variant="h6"
              sx={{
                whiteSpace: 'pre-line',
                textAlign: smDown ? 'center' : 'start',
                maxWidth: smDown ? 'auto' : theme.spacing(55),
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
                textAlign: mdDown ? 'justify' : 'start',
                maxWidth: smDown ? 'auto' : theme.spacing(55),
                fontSize: mdDown ? theme.spacing(2) : 'auto',
                fontWeight: 300,
              }}
            >
              {description}
            </Typography>

            <Box
              sx={{
                display: 'flex',
                width: '100%',
                justifyContent: mdDown ? 'center' : 'start',
                mt: theme.spacing(4),
                mb: smDown ? '' : mdDown ? theme.spacing(2) : '',
              }}
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
          background: backgroundRight,
          paddingBottom: theme.spacing(7),
          paddingTop: theme.spacing(7),
          width: mdDown ? '100%' : 'auto',
          borderTopLeftRadius: mdDown ? 0 : theme.spacing(30),
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
                  key={about.title}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <IconText
                    icon={about.icon}
                    title={about.title}
                    width={theme.spacing(40)}
                    color="white"
                  />
                  <Divider
                    sx={{
                      width: theme.spacing(42),
                      mt: theme.spacing(3),
                      borderColor: dividerColor,
                    }}
                  />
                </Box>
              ))}
          </Box>
        </Box>
      </Box>
    </SectionContainer>
  );
};
