import { Box, Typography, Button } from '@mui/material';

export const SimpleHeroSection = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        padding: '2rem',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Typography variant="h2">Welcome to Our Service</Typography>
      <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
        Some catchy description about your service.
      </Typography>
      <Button variant="contained" href="#cta">
        Get Started
      </Button>
    </Box>
  );
};
