import { RECEIVE_TRACK, RECEIVE_TRACKS, REMOVE_TRACK } from '../../actions/track_actions';

const tracksReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_TRACK:
            newState[action.trackResponse.track.id] = action.trackResponse.track;
            return newState;
        case RECEIVE_TRACKS:
            return action.tracks;
        case REMOVE_TRACK:
            delete newState[action.trackResponse.track.id];
            return newState;
        default:
            return oldState;
    }
}

export default tracksReducer;