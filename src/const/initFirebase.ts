import firebase from 'firebase';
import { createContext } from 'react';
import 'firebase/firestore';

interface IContext {
  firebase: typeof firebase;
  auth: firebase.auth.Auth;
  firestore: firebase.firestore.Firestore;
}

firebase.initializeApp({
  apiKey: 'AIzaSyAU5IW47WSRmjXICRKwyqJAyymmOuGL3Aw',
  authDomain: 'clever-todo-list-112a0.firebaseapp.com',
  databaseURL: 'https://clever-todo-list-112a0-default-rtdb.firebaseio.com',
  projectId: 'clever-todo-list-112a0',
  storageBucket: 'clever-todo-list-112a0.appspot.com',
  messagingSenderId: '641598800841',
  appId: '1:641598800841:web:c3cb4c750c3ebd08d81e18',
  measurementId: 'G-1JCPB2TKJP',
});

const auth = firebase.auth();
const firestore = firebase.firestore();

const AppContext = createContext<IContext>({
  firebase,
  auth,
  firestore,
});

export { auth, firestore, AppContext };
