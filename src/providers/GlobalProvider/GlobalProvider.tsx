import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import theme, { GlobalStyles } from 'src/theme';
import { store } from 'src/store';

const GlobalProvider: React.FC = ({ children }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  </Provider>
);

export default GlobalProvider;
