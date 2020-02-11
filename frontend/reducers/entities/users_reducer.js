import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_USER, RECEIVE_USERS } from '../../actions/user_actions';
import { RECEIVE_TRACK } from '../../actions/track_actions';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState[action.user.id] = action.user;
      return newState;
    case RECEIVE_USERS:
      return action.users;
    case RECEIVE_USER:
      newState[action.user.id] = action.user;
      return newState;
    case RECEIVE_TRACK:
      newState[action.trackResponse.user.id] = action.trackResponse.user;
      return newState;
    default:
      return oldState;
  }
};

export default usersReducer;