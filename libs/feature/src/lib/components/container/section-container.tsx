import { Box } from '@mui/material';
import { FC, ReactNode } from 'react';

interface SimpleSectionContainerPros {
  children: ReactNode;
  id: string;
  backgroundColor?: string;
  fullHeigth: boolean;
}

export const SectionContainer: FC<SimpleSectionContainerPros> = ({
  children,
  id,
  backgroundColor,
  fullHeigth,
}) => {
  return (
    <Box
      id={id}
      component="section"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        background: backgroundColor,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '1rem',
        height: fullHeigth ? '100vh' : 'auto',
      }}
    >
      {children}
    </Box>
  );
};
