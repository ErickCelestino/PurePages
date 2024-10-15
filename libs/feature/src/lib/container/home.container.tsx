import { Box, CssBaseline } from '@mui/material';
import {
  SimpleCta,
  SimpleFeatures,
  SimpleFooter,
  SimpleHeader,
  SimpleHeroSection,
} from '../components';

export const HomeContainer = () => {
  return (
    <Box>
      <CssBaseline />
      <SimpleHeader />
      <SimpleHeroSection />
      <SimpleFeatures />
      <SimpleCta />
      <SimpleFooter />
    </Box>
  );
};
