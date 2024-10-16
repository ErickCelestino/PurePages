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

export function App() {
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
