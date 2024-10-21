import { FC } from 'react';
import { SectionContainer } from '../container';
import { Box, Typography } from '@mui/material';

interface SimpleClientsProps {
  title: string;
}

export const SimpleClients: FC<SimpleClientsProps> = ({ title }) => {
  return (
    <SectionContainer fullHeigth={false} id="clients-section">
      <Box>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 800,
          }}
        >
          {title}
        </Typography>
      </Box>
    </SectionContainer>
  );
};
