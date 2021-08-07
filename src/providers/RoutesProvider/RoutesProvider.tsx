import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import _map from 'lodash/map';

interface RouteProps {
  path: string;
  component: React.ComponentType;
}

export interface RoutesProviderProps {
  routes: RouteProps[];
}

const RoutesProvider: React.FC<RoutesProviderProps> = ({ routes }) => (
  <BrowserRouter>
    <Switch>
      {_map(routes, (route) => (
        <Route
          key={route.path}
          path={route.path}
          component={route.component}
          exact
        />
      ))}
    </Switch>
  </BrowserRouter>
);

export default RoutesProvider;
