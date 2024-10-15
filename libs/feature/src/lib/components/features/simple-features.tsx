import { Box, Typography, Grid } from '@mui/material';

export const SimpleFeatures = () => {
  return (
    <Box id="features" sx={{ padding: '2rem' }}>
      <Typography variant="h4" align="center" sx={{ marginBottom: '2rem' }}>
        Features
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Feature 1</Typography>
          <Typography variant="body2">Description of Feature 1</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Feature 2</Typography>
          <Typography variant="body2">Description of Feature 2</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Feature 3</Typography>
          <Typography variant="body2">Description of Feature 3</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
