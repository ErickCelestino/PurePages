import { FC, ReactNode, useCallback, useState } from 'react';
import { DrawerTopic } from '../../shared';
import { DrawerContext } from './drawer-context';

interface DrawerProviderProps {
  children: ReactNode;
}

export const DrawerProvider: FC<DrawerProviderProps> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerOptions, setDrawerOptions] = useState<DrawerTopic>({});

  const handleSetDrawerOptions = useCallback(
    (newDrawerOptions: DrawerTopic) => {
      setDrawerOptions(newDrawerOptions);
    },
    []
  );

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen((oldDrawerOpen) => !oldDrawerOpen);
  }, []);

  return (
    <DrawerContext.Provider
      value={{
        isDrawerOpen,
        drawerOptions,
        toggleDrawerOpen,
        setDrawerOptions: handleSetDrawerOptions,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
