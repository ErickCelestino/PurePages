import { Box, ThemeProvider } from '@mui/material';
import React, { ReactNode, useCallback, useMemo, useState } from 'react';
import { ThemeContext } from './theme-context';
import { RedLightTheme, RedDarkTheme, ThemeName } from '../../shared';
import { getItemLocalStorage, setItemLocalStorage } from '../../service';

interface AppThemeProviderProps {
  children: ReactNode;
}

export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({
  children,
}) => {
  const [themeName, setThemeName] = useState<ThemeName>(() => {
    return getItemLocalStorage('theme') || 'light';
  });

  const toggleTheme = useCallback(() => {
    setThemeName((oldThemeName) => {
      const newThemeName = oldThemeName === 'light' ? 'dark' : 'light';
      setItemLocalStorage(newThemeName, 'theme');
      return newThemeName;
    });
  }, []);

  const theme = useMemo(() => {
    if (themeName === 'light') return RedLightTheme;

    return RedDarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box
          width="100vw"
          height="100vh"
          bgcolor={theme.palette.background.default}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};