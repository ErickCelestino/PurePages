import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export const SimpleCta = () => {
  return (
    <Box id="cta" sx={{ textAlign: 'center', padding: '2rem' }}>
      <Typography variant="h4">Ready to get started?</Typography>
      <Button variant="contained" color="primary" sx={{ marginTop: '1rem' }}>
        Sign Up
      </Button>
    </Box>
  );
};
