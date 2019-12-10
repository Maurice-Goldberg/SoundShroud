import {createStore, applyMiddlware} from 'redux';
import RootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const configureStore = (preLoadedState = {}) => {
  return createStore(RootReducer, preLoadedState, applyMiddlware(thunk, logger));
};

export default configureStore;