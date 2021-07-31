import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme, { GlobalStyles } from 'src/theme';

const GlobalProvider: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default GlobalProvider;
