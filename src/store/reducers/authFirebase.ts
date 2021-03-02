import { AuthActionType } from '../../const';
import { auth, firestore, AppContext } from '../../const/initFirebase';
import { SET_AUTH_TRUE, SET_AUTH_FALSE } from '../actions/actionTypes';

const initialState = {
  isAuth: false,
  auth,
  firestore,
  AppContext,
};

const authorization = (state = initialState, action: AuthActionType) => {
  switch (action.type) {
    case SET_AUTH_TRUE: {
      return {
        ...state,
        isAuth: true,
      };
    }
    case SET_AUTH_FALSE: {
      return {
        ...state,
        isAuth: false,
      };
    }

    default:
      return state;
  }
  return state;
};

export default authorization;
