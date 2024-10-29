import {
  AppThemeProvider,
  DrawerProvider,
  navigateToWathsApp,
  SimpleDrawer,
  GMTIntegration,
} from '@pure-pages/feature';
import { AppRouters } from './routes';
import {
  MargentaBlueLightTheme,
  MargentaBlueDarkTheme,
} from '@pure-pages/feature';
import { useEffect } from 'react';

export function App() {
  useEffect(() => {
    GMTIntegration(process.env['NX_APP_GMT_PURE_DIGITAL_ID'] || '');
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
          navigateToWathsApp({
            message:
              'Olá estou interessado em saber mais sobre os planos da Pure Digital, Poderia me ajudar?',
            phone: '44998494865',
            clientId: process.env['NX_APP_GMT_PURE_DIGITAL_ID'] || '',
          })
        }
      >
        <AppRouters />
      </SimpleDrawer>
    </DrawerProvider>
  );
};

export default App;
