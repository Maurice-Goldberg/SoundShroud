import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

export const receiveCurrentUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

export const receiveSessionErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};


export const login = user => dispatch => {
  return SessionAPIUtil.loginUser(user).then(
    user => dispatch(receiveCurrentUser(user))
  ).fail(
    errors => dispatch(receiveSessionErrors(errors.responseJSON))
  );
};

export const logout = () => dispatch => {
  return SessionAPIUtil.logoutUser().then(
    () => dispatch(logoutCurrentUser())
  );
};


export const signup = user => dispatch => {
  return SessionAPIUtil.signupUser(user).then(
    user => dispatch(receiveCurrentUser(user))
  ).fail(
    errors => dispatch(receiveSessionErrors(errors.responseJSON))
  );
};