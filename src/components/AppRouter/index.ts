import { connect } from 'react-redux';

import { StateProps } from '../../const/index';
import { RootState } from '../../store/reducers/rootReducer';

import { AppRouter } from './AppRouter';

const mapStateToProps = (state: RootState) => {
  const { auth } = state.authFirebase;
  return {
    auth,
  };
};

export default connect<StateProps>(mapStateToProps)(AppRouter);
