import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { FC } from 'react';
import { CtaButton } from '../button';
import { IconTextProps } from '../../shared';
import { IconText } from '../lists';
import { SectionContainer } from '../container';

interface SimpleDetailsFeatureProps {
  backgroundColor?: string;
  image: string;
  imageAltTitle?: string;
  title: string;
  ctaButton: () => void;
  ctaButtonTitle?: string;
  listFeatures: IconTextProps[];
}

export const SimpleDetailsFeature: FC<SimpleDetailsFeatureProps> = ({
  backgroundColor,
  image,
  title,
  ctaButton,
  ctaButtonTitle,
  imageAltTitle = 'Foto do Produto',
  listFeatures,
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <SectionContainer id="detailsFeature" backgroundColor={backgroundColor}>
      <Box
        component="img"
        height={mdDown ? theme.spacing(50) : theme.spacing(75)}
        src={image}
        alt={imageAltTitle}
        sx={{
          flex: 1,
          maxWidth: '100%',
          objectFit: 'contain',
          mt: smDown ? 0 : mdDown ? -20 : -10,
        }}
      />
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
            {listFeatures.length > 0 &&
              listFeatures.map((feature) => (
                <IconText
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                />
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
