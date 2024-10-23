import { FC } from 'react';
import { SectionContainer } from '../container';
import { Box } from '@mui/material';
import { PhotoCarousel } from '../carousel';

interface SimpleClientsProps {
  title: string;
  photos: string[];
}

export const SimpleClients: FC<SimpleClientsProps> = ({ title, photos }) => {
  return (
    <SectionContainer fullHeigth={false} id="clients-section">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          padding: '3rem',
        }}
      >
        <PhotoCarousel title={title} images={photos} />
      </Box>
    </SectionContainer>
  );
};
