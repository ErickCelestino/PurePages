import { createTheme } from '@mui/material';

export const MargentaBlueLightTheme = createTheme({
  palette: {
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
      default: '#f7f6f3',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily:
      '"Futura Medium BT", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});
