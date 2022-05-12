import React from 'react';
import { Header, SearchForm, Gallery, Pagintaion } from './containers';
import { ThemeProvider } from 'styled-components';
import GlobalStyles, { lightTheme, darkTheme } from './globalStyles';

export const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Header />
      <SearchForm />
      <Gallery />
      <Pagintaion />
    </ThemeProvider>
  );
};
