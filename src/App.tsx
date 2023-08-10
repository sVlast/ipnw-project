import './App.css';
import { AppRouter } from './routing/AppRouter';
import { QueryClient, QueryClientProvider } from 'react-query';
import 'bootstrap/dist/css/bootstrap.min.css';
import { css, injectGlobal } from '@emotion/css';
import { Global } from '@emotion/react';
import { themeStore } from './shared/stores/location-store';
import { useEffect } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const themeStyle = css`
  body {
    height: vh100;
  }
`;

export const App = (): JSX.Element => {

  useEffect(() => {
    const theme = themeStore.getTheme();
    document.body.style.backgroundColor = theme.backgroundColor;
    document.body.style.color = theme.color;
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={themeStyle} />
      <AppRouter />
    </QueryClientProvider>
  );
};
