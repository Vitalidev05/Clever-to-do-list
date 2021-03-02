// import '@/assets/stylesheets/index.scss';

import firebase from 'firebase';
import React from 'react';
import ReactDOM from 'react-dom';

import App from '@/App';
import 'firebase/firestore';

import { AppContext, auth, firestore } from './const/initFirebase';
// Initialize Firebase

ReactDOM.render(
  <AppContext.Provider
    value={{
      firebase,
      auth,
      firestore,
    }}
  >
    <App />
  </AppContext.Provider>,
  document.getElementById('app')
);
