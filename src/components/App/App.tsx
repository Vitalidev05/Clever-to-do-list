import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';

import { StateProps } from '../../const/index';
import AppRouter from '../AppRouter/index';
import Loader from '../Loader/index';
import Navbar from '../NavBar/index';

const App = (props: StateProps): JSX.Element => {
  const [, loading] = useAuthState(props.auth);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
};

export { App };
