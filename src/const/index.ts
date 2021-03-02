import firebase from 'firebase';

import { SET_AUTH_TRUE, SET_AUTH_FALSE } from '../store/actions/actionTypes';

type AuthActionType =
  | {
    type: typeof SET_AUTH_TRUE;
  }
  | {
    type: typeof SET_AUTH_FALSE;
  };

interface StateProps {
  auth: firebase.auth.Auth;
}

export { AuthActionType, StateProps };
