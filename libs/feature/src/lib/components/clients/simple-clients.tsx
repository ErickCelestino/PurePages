import { FC } from 'react';
import { SectionContainer } from '../container';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { PhotoCarousel } from '../carousel';

interface SimpleClientsProps {
  title: string;
  photos: string[];
}

export const SimpleClients: FC<SimpleClientsProps> = ({ title, photos }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <SectionContainer fullHeigth={false} id="clients-section">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          padding: smDown ? theme.spacing(3) : theme.spacing(3),
        }}
      >
        <PhotoCarousel
          image={{
            imageHeight: smDown ? theme.spacing(20) : theme.spacing(18),
            images: photos,
          }}
          title={title}
        />
      </Box>
    </SectionContainer>
  );
};
