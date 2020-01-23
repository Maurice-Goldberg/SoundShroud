import {createStore, applyMiddleware} from 'redux';
import RootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';

let middlewares = [thunk];

if (process.env.NODE_ENV !== "production") {
  // must use 'require' (import only allowed at top of file)
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const configureStore = (preLoadedState = {}) => {
  return createStore(RootReducer, preLoadedState, applyMiddleware(...middlewares));
};

export default configureStore;