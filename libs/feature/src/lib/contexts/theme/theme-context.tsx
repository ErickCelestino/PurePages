import { createContext } from 'react';
import { ThemeName } from '../../shared';

interface IThemeContextData {
  themeName: ThemeName;
  toggleTheme: () => void;
}

export const ThemeContext = createContext({} as IThemeContextData);
