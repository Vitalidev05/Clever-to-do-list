import { combineReducers } from 'redux';

import authFirebase from './authFirebase';
import calendar from './calendar';

const rootReducer = combineReducers({
  authFirebase,
  calendar,
});

type RootState = ReturnType<typeof rootReducer>;

export { rootReducer, RootState };
