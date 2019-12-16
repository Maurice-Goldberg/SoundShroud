import * as TrackAPIUtil from '../util/track_api_util'

export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const RECEIVE_TRACKS = "RECEIVE_TRACKS";

export const receiveTrack = (track) => {
    return {
        type: RECEIVE_TRACK,
        track
    }
}

export const receiveTracks = (tracks) => {
    return {
        type: RECEIVE_TRACKS,
        tracks
    }
}

export const fetchTrack = (trackId) => (dispatch) => {
    return TrackAPIUtil.fetchTrack(trackId).then(
        track => dispatch(receiveTrack(track))
    )
}

export const fetchTracks = () => (dispatch) => {
    return TrackAPIUtil.fetchTracks().then(
        tracks => dispatch(receiveTracks(tracks))
    )
}

export const uploadTrack = (track) => (dispatch) => {
    return TrackAPIUtil.uploadTrack(track).then(
        uploadedTrack => (dispatch(receiveTrack(uploadedTrack))
    ));
};

