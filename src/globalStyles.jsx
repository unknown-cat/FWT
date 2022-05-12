import { createGlobalStyle } from 'styled-components';

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
  background: white;
  color: black;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1rem;
  transition: all 0.25s linear;
}
`;
