import { connect } from 'react-redux';

import { StateProps } from '../../const/index';
import { RootState } from '../../store/reducers/rootReducer';

import { App } from './App';

const mapStateToProps = (state: RootState) => {
  const { auth } = state.authFirebase;
  return {
    auth,
  };
};

export default connect<StateProps>(mapStateToProps)(App);
