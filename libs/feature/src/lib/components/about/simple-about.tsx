import {
  Box,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { SectionContainer } from '../container';
import { FC } from 'react';
import { CtaButton } from '../button';
import { IconText } from '../lists';
import { IconTextProps } from '../../shared';

interface SimpleAboutProps {
  backgroundColor?: string;
  title: string;
  aboutList: IconTextProps[];
  ctaButton: () => void;
  ctaButtonTitle?: string;
}

export const SimpleAbout: FC<SimpleAboutProps> = ({
  backgroundColor,
  title,
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
            maxWidth: smDown ? '80%' : '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: mdDown ? 'center' : 'flex-start',
            alignItems: mdDown ? 'center' : 'flex-start',
          }}
        >
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
          <Box mt={theme.spacing(2)}>
            {aboutList.length > 0 &&
              aboutList.map((about) => (
                <Box>
                  <IconText icon={about.icon} title={about.title} />
                  <Divider />
                </Box>
              ))}
          </Box>
          <Box mt={theme.spacing(8)} mb={theme.spacing(2)}>
            <CtaButton
              action={ctaButton}
              title={ctaButtonTitle}
              fontSize={11}
              width={smDown ? 17 : 25}
              iconLeft={<ArrowBackIcon />}
            />
          </Box>
        </Box>
      </Box>
    </SectionContainer>
  );
};
