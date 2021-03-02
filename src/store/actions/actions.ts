import { SET_AUTH_FALSE, SET_AUTH_TRUE } from './actionTypes';

function setAuthTrue(): Record<string, unknown> {
  return {
    type: SET_AUTH_TRUE,
  };
}

function setAuthFalse(): Record<string, unknown> {
  return {
    type: SET_AUTH_FALSE,
  };
}

export { setAuthTrue, setAuthFalse };
