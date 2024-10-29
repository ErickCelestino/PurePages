import {
  AppThemeProvider,
  DrawerProvider,
  navigateToWaths,
  SimpleDrawer,
} from '@pure-pages/feature';
import { AppRouters } from './routes';
import {
  MargentaBlueLightTheme,
  MargentaBlueDarkTheme,
} from '@pure-pages/feature';
import { useEffect } from 'react';
import { GMTIntegration } from 'libs/feature/src/lib/services';

export function App() {
  useEffect(() => {
    GMTIntegration(process.env['NX_APP_GMT_ID'] || '');
  }, []);

  return (
    <AppThemeProvider
      selectedLightTheme={MargentaBlueLightTheme}
      selectedDarkTheme={MargentaBlueDarkTheme}
    >
      <Content />
    </AppThemeProvider>
  );
}

const Content = () => {
  return (
    <DrawerProvider>
      <SimpleDrawer
        ctaButton={() =>
          navigateToWaths(
            '44998494865',
            'Olá estou interessado em saber mais sobre os planos da Pure Digital, Poderia me ajudar?'
          )
        }
      >
        <AppRouters />
      </SimpleDrawer>
    </DrawerProvider>
  );
};

export default App;
