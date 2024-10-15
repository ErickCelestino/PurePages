import React from 'react';
import { Box, Typography } from '@mui/material';

export const SimpleFooter = () => {
  return (
    <Box
      sx={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f5f5f5' }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Your Company
      </Typography>
    </Box>
  );
};
