import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import AppRouter from '../AppRouter/index';
import Loader from '../Loader/index';
import Navbar from '../NavBar/index';

const App = (): JSX.Element => {
  const { auth } = useTypedSelector(state => state.authFirebase);

  const [, loading] = useAuthState(auth);

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
