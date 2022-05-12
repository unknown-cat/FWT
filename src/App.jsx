import React from 'react';
import { Header, SearchForm, Gallery, Pagintaion } from './containers';
import { ThemeProvider } from 'styled-components';
import GlobalStyles, { lightTheme, darkTheme } from './globalStyles';
import { useGlobalContext } from './context.jsx';

export const App = () => {
  const { theme } = useGlobalContext();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header />
      <SearchForm />
      <Gallery />
      <Pagintaion />
    </ThemeProvider>
  );
};
