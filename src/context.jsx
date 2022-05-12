import React, { useState, useContext, useEffect } from 'react';
import { getData } from './api/api';

const API_PAINTINGS_ENDPONT = 'https://test-front.framework.team/paintings?q=';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const toggleTheme = () =>
    theme === 'light' ? setTheme('dark') : setTheme('light');

  useEffect(() => {
    setIsLoading(true);
    getData(API_PAINTINGS_ENDPONT).then((data) => setData(data));
    setIsLoading(false);
  }, []);

  return (
    <AppContext.Provider value={{ toggleTheme, theme, isLoading, data }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
