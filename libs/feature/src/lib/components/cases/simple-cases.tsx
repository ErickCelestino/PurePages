import { Box } from '@mui/material';
import { SectionContainer } from '../container';
import { CasesCarousel } from '../carousel';
import { FC } from 'react';

interface SimpleCasesProps {
  casesImages: string[];
  title: string;
}

export const SimpleCases: FC<SimpleCasesProps> = ({ casesImages, title }) => {
  return (
    <SectionContainer fullHeigth={false} id="cases-section">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          padding: '3rem',
        }}
      >
        <CasesCarousel images={casesImages} title={title} />
      </Box>
    </SectionContainer>
  );
};
