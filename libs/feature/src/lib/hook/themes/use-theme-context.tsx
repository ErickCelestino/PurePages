import { useContext } from 'react';
import { ThemeContext } from '../../context';

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};
