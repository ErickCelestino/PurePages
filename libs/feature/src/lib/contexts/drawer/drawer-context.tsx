import { createContext, useContext } from 'react';
import { DrawerTopic } from '../../shared';

interface DrawerContextData {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
  drawerOptions: DrawerTopic;
  setDrawerOptions: (newDrawerOptions: DrawerTopic) => void;
}

export const DrawerContext = createContext({} as DrawerContextData);

export const useDrawerContext = () => {
  return useContext(DrawerContext);
};
