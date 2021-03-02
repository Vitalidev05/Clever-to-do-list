import React, { useContext } from 'react';
import './App.scss';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BrowserRouter } from 'react-router-dom';

import AppRouter from './components/AppRouter';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import { AppContext } from './const/initFirebase';

const App = (): JSX.Element => {
  const { auth } = useContext(AppContext);
  const [, loading] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
    // <div />
  );
};

export default App;
