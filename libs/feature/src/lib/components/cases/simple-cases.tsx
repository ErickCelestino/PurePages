import { Box } from '@mui/material';
import { SectionContainer } from '../container';
import { CasesCarousel } from '../carousel';

export const SimpleCases = () => {
  <SectionContainer fullHeigth={false} id="cases-section">
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        padding: '3rem',
      }}
    >
      <CasesCarousel />
    </Box>
  </SectionContainer>;
};
