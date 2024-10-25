import {
  Box,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { SectionContainer } from '../../container';
import { FC } from 'react';
import { CtaButton } from '../../button';
import { IconText } from '../../lists';
import { IconTextProps } from '../../../shared';

interface SimpleAboutProps {
  backgroundColor?: string;
  title: string;
  description: string;
  aboutList: IconTextProps[];
  ctaButton: () => void;
  ctaButtonTitle?: string;
  backgroundRight?: string;
  dividerColor?: string;
  aboutImage: string;
  aboutImageAltTitle?: string;
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
  aboutImage,
  aboutImageAltTitle = 'Foto da seção sobre',
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const lgDown = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <SectionContainer
      fullHeigth={false}
      id="about-section"
      backgroundColor={backgroundColor}
      heigth={lgDown ? undefined : 70}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: smDown ? 'center' : 'flex-end',
          alignItems: smDown ? 'center' : lgDown ? 'flex-start' : 'center',
          flexDirection: 'column',
          flex: 1,
          marginBottom: theme.spacing(3),
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: smDown ? 'center' : 'start',
            alignItems: 'center',
            flexDirection: 'column',
            flex: 1,
            maxWidth: smDown ? '80%' : '100%',
            margin: smDown ? '' : lgDown ? theme.spacing(10) : '',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              whiteSpace: 'pre-line',
              textAlign: 'start',
              maxWidth: smDown
                ? 'auto'
                : lgDown
                ? theme.spacing(60)
                : theme.spacing(40),
              fontSize: smDown ? theme.spacing(2) : theme.spacing(3),
              fontWeight: 700,
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              whiteSpace: 'pre-line',
              textAlign: 'start',
              maxWidth: smDown
                ? 'auto'
                : lgDown
                ? theme.spacing(60)
                : theme.spacing(40),
              fontSize: smDown ? theme.spacing(2) : theme.spacing(1.7),
              fontWeight: 300,
              mt: theme.spacing(3),
            }}
          >
            {description}
          </Typography>

          {!lgDown && (
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                justifyContent: mdDown ? 'center' : 'start',
                mt: theme.spacing(4),
                mb: smDown ? theme.spacing(4) : mdDown ? theme.spacing(4) : '',
              }}
            >
              <CtaButton
                action={ctaButton}
                title={ctaButtonTitle}
                fontSize={14}
                width={40}
                padding={2}
                iconRight={<ArrowForwardIcon />}
              />
            </Box>
          )}
        </Box>
      </Box>

      {lgDown && !smDown && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            background: '#cccccc',
            paddingTop: theme.spacing(2),
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'start',
              marginTop: -12,
              marginRight: mdDown ? -2 : theme.spacing(2),
              marginLeft: mdDown ? theme.spacing(2.5) : theme.spacing(6),
              zIndex: 0,
            }}
          >
            <Box
              component="img"
              src={aboutImage}
              alt={aboutImageAltTitle}
              height={theme.spacing(70)}
              sx={{
                flex: 1,
                maxWidth: '100%',
                objectFit: 'contain',
                transform: 'rotate(4.97deg)',
              }}
            />
          </Box>
          <Box
            sx={{
              justifyContent: 'start',
              flex: 1,
              mt: -2,
              background: backgroundRight,
              paddingTop: theme.spacing(8),
              paddingLeft: theme.spacing(5),
              paddingBottom: theme.spacing(10),
              borderTopLeftRadius: theme.spacing(25),
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <Box>
                {aboutList.length > 0 &&
                  aboutList.map((about) => (
                    <Box
                      key={about.title}
                      sx={{
                        flexDirection: 'column',
                      }}
                    >
                      <IconText
                        icon={about.icon}
                        title={about.title}
                        width={mdDown ? '90%' : '60%'}
                        color="white"
                        fontSize={theme.spacing(1.8)}
                      />
                      <Divider
                        sx={{
                          width: mdDown ? '90%' : '65%',
                          mt: theme.spacing(3),
                          borderColor: dividerColor,
                        }}
                      />
                    </Box>
                  ))}
              </Box>
            </Box>
          </Box>
        </Box>
      )}

      {(!lgDown || smDown) && (
        <>
          <Box
            sx={{
              display: 'flex',
              justifyContent: smDown ? 'center' : 'start',
              height: '100%',
              marginBottom: smDown ? -17.8 : 0,
              marginTop: smDown ? '' : -20,
              marginRight: smDown ? '' : -13,
              marginLeft: smDown ? '' : -33,
              zIndex: 0,
            }}
          >
            <Box
              component="img"
              src={aboutImage}
              alt={aboutImageAltTitle}
              height={smDown ? theme.spacing(60) : theme.spacing(70)}
              sx={{
                flex: 1,
                maxWidth: smDown ? '80%' : '100%',
                objectFit: 'contain',
              }}
            />
          </Box>
          <Box
            sx={{
              justifyContent: mdDown ? 'center' : 'auto',
              flex: 1,
              mt: -2,
              mr: mdDown ? '' : -30,
              background: backgroundRight,
              paddingTop: smDown ? theme.spacing(15) : theme.spacing(7),
              paddingLeft: mdDown ? '' : theme.spacing(13),
              paddingBottom: mdDown ? theme.spacing(6) : '',
              borderTopLeftRadius: mdDown
                ? theme.spacing(23)
                : theme.spacing(25),
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: mdDown ? 'center' : 'flex-start',
              }}
            >
              <Box>
                {aboutList.length > 0 &&
                  aboutList.map((about) => (
                    <Box
                      key={about.title}
                      sx={{
                        flexDirection: 'column',
                      }}
                    >
                      <IconText
                        icon={about.icon}
                        title={about.title}
                        width={smDown ? theme.spacing(40) : theme.spacing(50)}
                        color="white"
                        fontSize={theme.spacing(2)}
                      />
                      <Divider
                        sx={{
                          width: smDown ? theme.spacing(42) : theme.spacing(52),
                          mt: theme.spacing(3),
                          borderColor: dividerColor,
                        }}
                      />
                    </Box>
                  ))}
              </Box>
            </Box>
          </Box>
        </>
      )}

      {lgDown && (
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: lgDown ? 'center' : 'start',
            mt: theme.spacing(4),
            mb: smDown ? theme.spacing(4) : lgDown ? theme.spacing(4) : '',
          }}
        >
          <CtaButton
            action={ctaButton}
            title={ctaButtonTitle}
            fontSize={14}
            width={30}
            padding={2}
            iconRight={<ArrowForwardIcon />}
          />
        </Box>
      )}
    </SectionContainer>
  );
};
