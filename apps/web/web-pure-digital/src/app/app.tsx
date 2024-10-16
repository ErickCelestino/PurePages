import {
  AppThemeProvider,
  DrawerProvider,
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
      <SimpleDrawer>
        <AppRouters />
      </SimpleDrawer>
    </DrawerProvider>
  );
};

export default App;
