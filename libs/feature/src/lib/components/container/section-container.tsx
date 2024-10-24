import { Box, useMediaQuery, useTheme } from '@mui/material';
import { FC, ReactNode } from 'react';

interface SimpleSectionContainerPros {
  children: ReactNode;
  id: string;
  backgroundColor?: string;
  fullHeigth: boolean;
  aligmentContent?: boolean;
}

export const SectionContainer: FC<SimpleSectionContainerPros> = ({
  children,
  id,
  backgroundColor,
  fullHeigth,
  aligmentContent = false,
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box
      id={id}
      component="section"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        background: backgroundColor,
        alignItems: aligmentContent ? 'center' : '',
        justifyContent: 'space-between',
        paddingTop: '1rem',
        height: fullHeigth ? (smDown ? '100vh' : '95vh') : 'auto',
      }}
    >
      {children}
    </Box>
  );
};
