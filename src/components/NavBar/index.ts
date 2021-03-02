import { connect } from 'react-redux';

import { StateProps } from '../../const/index';
import { RootState } from '../../store/reducers/rootReducer';

import { NavBar } from './NavBar';

const mapStateToProps = (state: RootState) => {
  const { auth } = state.authFirebase;
  return {
    auth,
  };
};

export default connect<StateProps>(mapStateToProps)(NavBar);
