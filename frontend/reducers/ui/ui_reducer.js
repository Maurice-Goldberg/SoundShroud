import {combineReducers} from 'redux';

import loadingReducer from './loading_reducer';
import trackPlayingReducer from './track_playing_reducer';
import modalReducer from './modal_reducer';

const uiReducer = combineReducers({
  loading: loadingReducer,
  trackPlaying: trackPlayingReducer,
  modal: modalReducer,
});

export default uiReducer;