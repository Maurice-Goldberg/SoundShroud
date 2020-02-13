import {
  RECEIVE_CURRENT_TRACK,
  PLAY_TRACK,
  PAUSE_TRACK,
  RESTART_TRACK,
  UPDATE_PLAYPOINT,
  RECEIVE_INTERVAL_ID,
  RECEIVE_RECENT_LISTEN,
  CLEAR_INTERVAL_ID
} from '../../actions/track_playing_actions';


let defaultState = {
  playing: false,
  timeElapsed: 0,
  recentlyPlayedIds: [1, 2, 3],
  //just for testing purposes right now
  track_id: 3
}
const trackPlayingReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_TRACK:
      newState.track_id = action.track.id;
      return newState;
    case PLAY_TRACK:
      newState.playing = true;
      return newState;
    case PAUSE_TRACK:
      newState.playing = false;
      return newState;
    case RECEIVE_RECENT_LISTEN:
      newState.recentlyPlayedIds.unshift(action.trackId);
      newState.recentlyPlayedIds.pop();
      return newState;
    case RECEIVE_INTERVAL_ID:
      newState.intervalId = action.intervalId;
      return newState;
    case CLEAR_INTERVAL_ID:
      newState.intervalId = null;
      return newState;
    case RESTART_TRACK:
      newState.timeElapsed = 0;
      return newState;
    case UPDATE_PLAYPOINT:
      newState.timeElapsed = action.newTime;
      return newState;
    default:
      return oldState;
  }
};

export default trackPlayingReducer;