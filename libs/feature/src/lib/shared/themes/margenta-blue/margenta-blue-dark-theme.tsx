import { createTheme } from '@mui/material';

export const MargentaBlueDarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#111116',
      dark: '#0f0f14',
      light: '#16161b',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#F41A43',
      dark: '#FD496E',
      light: '#F41A43',
      contrastText: '#ffffff',
    },
    background: {
      default: '#202124',
      paper: '#303134',
    },
  },
  typography: {
    allVariants: {
      color: 'white',
    },
    fontFamily:
      '"Futura Medium BT", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});
