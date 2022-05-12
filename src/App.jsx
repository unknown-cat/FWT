import React from 'react';
import { Header, SearchForm, Gallery, Pagintaion } from './containers';
import GlobalStyles from './globalStyles';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <SearchForm />
      <Gallery />
      <Pagintaion />
    </>
  );
};
