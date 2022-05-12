import React, { useState, useContext, useEffect } from 'react';
import { paginate } from './utils/utils';
import { getData } from './api/api';

const API_PAINTINGS_ENDPONT = 'https://test-front.framework.team/paintings?q=';

const AppContext = React.createContext();

// Set Theme
const getLocalStorageTheme = () => {
  let theme = localStorage.getItem('theme')
    ? localStorage.getItem('theme')
    : 'light';
  return theme;
};

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(getLocalStorageTheme());
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(0);

  const toggleTheme = () =>
    theme === 'light' ? setTheme('dark') : setTheme('light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    setIsLoading(true);
    getData(API_PAINTINGS_ENDPONT).then((data) => setData(paginate(data)));
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (isLoading) return;
    setPictures(data[page]);
  }, [isLoading, page, data]);

  return (
    <AppContext.Provider
      value={{ toggleTheme, theme, isLoading, data, pictures, page, setPage }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
