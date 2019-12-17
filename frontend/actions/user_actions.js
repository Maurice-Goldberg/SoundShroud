import * as UserAPIUTil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = (user) => {
    return {
        type: RECEIVE_USER,
        user
    }
}

export const fetchUser = (user_id) => (dispatch) => {
    return UserAPIUTil.fetchUser(user_id).then(
        user => dispatch(receiveUser(user))
    );
}