export const findTrack = ({entities}, trackId) => {
    let tracksArr = Object.values(entities.tracks);
    if(tracksArr.length === 0) {
        return {};
    }
    debugger
    let users = entities.users;
    debugger
    for(let i = 0; i < tracksArr.length; i++) {
        debugger
        let track = tracksArr[i];
        if(track.id === parseInt(trackId)) {
            debugger
            return track;
        }
    }
    debugger
    return {};
}

export const findTrackArtist = ({entities}, trackId) => {
    if(trackId) {
        let usersArr = Object.values(entities.users);
        debugger
        for (let i = 0; i < usersArr.length; i++) {
            debugger
            let user = usersArr[i];
            debugger
            if (user.authoredTrackIds[trackId]) {
                return user;
            }
        }
        return {};
    } else {
        return {};
    }
};

export const currentUser = ({entities, session}) => {
    return entities.users[session.currentUserId];
}