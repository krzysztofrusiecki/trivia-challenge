import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    font-family: 'Quicksand', sans-serif;
    font-weight: 500;
  }

  #root {
    height: 100%;
  }
`;

export default GlobalStyles;
