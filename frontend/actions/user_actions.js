import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";

export const receiveUser = (user) => {
    return {
        type: RECEIVE_USER,
        user
    }
}

export const receiveUsers = (users) => {
    
    return {
        type: RECEIVE_USERS,
        users
    }
}

export const fetchUser = (user_id) => (dispatch) => {
    return UserAPIUtil.fetchUser(user_id).then(
        user => dispatch(receiveUser(user))
        );
    }
    
export const fetchUsers = () => (dispatch) => {
    
    return UserAPIUtil.fetchUsers().then(
        (users) => dispatch(receiveUsers(users))
    );
}

export const updateUser = (formData, id) => (dispatch) => {
    return UserAPIUtil.updateUser(formData, id).then(
        updatedUser => (dispatch(receiveUser(updatedUser)))
    );
}