import firebase from 'firebase';

import { auth } from '../../initFirebase';

export function loginWithGoogle(): Promise<firebase.auth.UserCredential> {
  const provider = new firebase.auth.GoogleAuthProvider();
  return auth.signInWithPopup(provider);
}
