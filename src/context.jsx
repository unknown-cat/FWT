import React, { useState, useContext, useEffect } from 'react';
import { paginate } from './utils/utils';
import { getData } from './api/api';

const API_PAINTINGS_ENDPONT = 'https://test-front.framework.team/paintings?q=';
const API_AUTHORS_ENDPONT = 'https://test-front.framework.team/authors';
const API_LOCATIONS_ENDPOINT = 'https://test-front.framework.team/locations';

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
  const [selectAuthor, setSelectAuthor] = useState([]);
  const [selectLocation, setSelectLocation] = useState([]);
  const [name, setName] = useState('');
  const [authorId, setAuthorId] = useState('');
  const [locationId, setLocationId] = useState('');
  const [createdBefore, setCreatedBefore] = useState('');
  const [createdFrom, setCreatedFrom] = useState('');

  const toggleTheme = () =>
    theme === 'light' ? setTheme('dark') : setTheme('light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    setIsLoading(true);
    getData(
      `${API_PAINTINGS_ENDPONT}${name}${authorId}${locationId}${createdBefore}${createdFrom}`
    ).then((data) => {
      data.map(d=>console.log({d}))
      return setData(paginate(data));
    });
    setIsLoading(false);
  }, [name, authorId, locationId, createdBefore, createdFrom]);

  useEffect(() => {
    if (isLoading) return;
    setPictures(data[page]);
  }, [isLoading, page, data]);

  useEffect(() => {
    getData(API_AUTHORS_ENDPONT).then((data) => {
      const authors = data.map((author) => ({
        value: author.id,
        label: author.name,
      }));
      setSelectAuthor(authors);
    }, []);

    getData(API_LOCATIONS_ENDPOINT).then((data) => {
      const locations = data.map((location) => ({
        value: location.id,
        label: location.location,
      }));
      setSelectLocation(locations);
    });
  }, []);
  return (
    <AppContext.Provider
      value={{
        toggleTheme,
        theme,
        isLoading,
        data,
        pictures,
        page,
        setPage,
        selectAuthor,
        selectLocation,
        setName,
        setAuthorId,
        setLocationId,
        setCreatedBefore,
        setCreatedFrom,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
