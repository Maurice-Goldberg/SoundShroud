import { STOP_LOADING, START_LOADING } from '../../actions/loading_actions';

const loadingReducer = (oldState = false, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case START_LOADING:
      return true;
    case STOP_LOADING:
      return false;
    default:
      return oldState;
  }
};

export default loadingReducer;