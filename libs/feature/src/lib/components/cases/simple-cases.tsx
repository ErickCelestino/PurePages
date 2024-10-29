import { Box, useMediaQuery, useTheme } from '@mui/material';
import { SectionContainer } from '../container';
import { PhotoCarousel } from '../carousel';
import { FC } from 'react';

interface SimpleCasesProps {
  casesImages: string[];
  title: string;
}

export const SimpleCases: FC<SimpleCasesProps> = ({ casesImages, title }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <SectionContainer fullHeigth={false} id="cases-section">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          padding: mdDown ? '' : theme.spacing(3),
        }}
      >
        <PhotoCarousel
          image={{
            imageHeight: smDown ? theme.spacing(30) : theme.spacing(40),
            images: casesImages,
            imageContent: 4,
          }}
          title={title}
          manualButton={false}
        />
      </Box>
    </SectionContainer>
  );
};
