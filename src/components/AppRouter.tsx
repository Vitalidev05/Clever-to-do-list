import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Route, Switch, Redirect } from 'react-router-dom';

import { AppContext } from '../const/initFirebase';
import { privateRoutes, publicRoutes } from '../routes';
import { HOME_ROUTE, LOGIN_ROUTE } from '../utils';

const AppRouter = (): JSX.Element => {
  const { auth } = useContext(AppContext);
  const [user] = useAuthState(auth);

  return user ? (
    <Switch>
      {privateRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      <Redirect to={HOME_ROUTE} />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      <Redirect to={LOGIN_ROUTE} />
    </Switch>
  );
};

export default AppRouter;
