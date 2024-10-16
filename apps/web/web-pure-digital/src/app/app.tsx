import { AppThemeProvider } from '@pure-pages/feature';
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
  return <AppRouters />;
};

export default App;
