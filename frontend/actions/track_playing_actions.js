export const RECEIVE_CURRENT_TRACK = 'RECEIVE_CURRENT_TRACK';
export const PLAY_TRACK = 'PLAY_TRACK';
export const PAUSE_TRACK = 'PAUSE_TRACK';
export const RECEIVE_RECENT_LISTEN = 'RECEIVE_RECENT_LISTEN';
export const UPDATE_PLAYPOINT = 'UPDATE_PLAYPOINT';
export const RESTART_TRACK = 'RESTART_TRACK';
export const RECEIVE_INTERVAL_ID = 'RECEIVE_INTERVAL_ID';
export const CLEAR_INTERVAL_ID = 'CLEAR_INTERVAL_ID';

export const receiveCurrentTrack = (track) => {
    return {
        type: RECEIVE_CURRENT_TRACK,
        track
    }
}

export const playTrack = () => {
    return {
        type: PLAY_TRACK
    }
}

export const pauseTrack = () => {
    return {
        type: PAUSE_TRACK
    }
}

export const receiveRecentListen = (trackId) => {
    return {
        type: RECEIVE_RECENT_LISTEN,
        trackId
    }
}

export const receiveIntervalId = (intervalId) => {
    return {
        type: RECEIVE_INTERVAL_ID,
        intervalId
    }
}

export const clearIntervalId = () => {
    return {
        type: CLEAR_INTERVAL_ID
    }
}

export const restartTrack = () => {
    return {
        type: RESTART_TRACK
    }
}

export const updatePlaypoint = (newTime) => {
    return {
        type: UPDATE_PLAYPOINT,
        newTime
    }
}