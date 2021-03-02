import { combineReducers } from 'redux';

import authFirebase from './authFirebase';

const rootReducer = combineReducers({
  authFirebase,
});

type RootState = ReturnType<typeof rootReducer>;

export { rootReducer, RootState };
