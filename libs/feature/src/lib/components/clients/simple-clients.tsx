import { FC } from 'react';
import { SectionContainer } from '../container';
import { Box, Typography, useTheme } from '@mui/material';
import { PhotoCarousel } from '../carousel';

interface SimpleClientsProps {
  title: string;
  photos: string[];
}

export const SimpleClients: FC<SimpleClientsProps> = ({ title, photos }) => {
  const theme = useTheme();
  return (
    <SectionContainer fullHeigth={false} id="clients-section">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 800,
            maxWidth: theme.spacing(40),
          }}
        >
          {title}
        </Typography>
        <PhotoCarousel images={photos} />
      </Box>
    </SectionContainer>
  );
};
