import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`	
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
}

html {
  font-size: 14px;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
  color: black;
}

body {
  min-width: 320px;
  margin: auto;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.txt};
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1rem;
  transition: all 0.25s linear;
}
`;

// Theme
export const lightTheme = {
  bg: '#FFFFFF',
  txt: '#000000',
  searchBg: '#FFFFFF',
  searchBorder: 'rgba(0, 0, 0, 0.3)',
  border: 'rgba(0, 0, 0, 0.8)',
  buttonHover: '#EDEDED',
  inputBg: '#EFEFEF',
};

export const darkTheme = {
  bg: '#000000',
  txt: '#FFFFFF',
  searchBg: '#0C0C0C',
  searchBorder: 'rgba(255, 255, 255, 0.3)',
  border: 'rgba(255, 255, 255, 0.8)',
  buttonHover: '#464646',
  inputBg: '#FFFFFF',
};

export const Wrapper = styled.div`
  position: relative;
  box-sizing: border-box;

  @media screen and (min-width: 1365px) {
    flex: 0 1 260px;
  }

  @media screen and (max-width: 1365px) {
    flex: 0 1 220px;
  }

  @media screen and (max-width: 1023px) {
    flex: 0 1 160px;
  }

  @media screen and (max-width: 767px) {
    flex: unset;
  }
`;
