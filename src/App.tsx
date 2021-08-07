import React from 'react';

import config from 'src/config';
import GlobalProvider from 'src/providers/GlobalProvider';
import RoutesProvider from 'src/providers/RoutesProvider';

const App: React.FC = () => (
  <GlobalProvider>
    <RoutesProvider routes={config.routes} />
  </GlobalProvider>
);

export default App;
