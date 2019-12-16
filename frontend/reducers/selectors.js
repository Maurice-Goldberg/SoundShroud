export const findTrack = ({entities}, trackTitle, artistName) => {
    let tracksArr = Object.values(entities.tracks);
    let users = entities.users;

    for(let i = 0; i < tracksArr.length; i++) {
        let track = tracksArr[i];
        let artist = users[track.authorId];
        if(track.title === trackTitle && artist.accountName === artistName ) {
            return track;
        }
    }

    return {};
}

export const findTrackArtist = ({entities}, trackId) => {
    let usersArr = Object.values(entities.users);
    for (let i = 0; i < usersArr.length; i++) {
        let user = usersArr[i];
        if (user.authoredTrackIds[trackId]) {
            return user;
        }
    }
    return {};
}

export const currentUser = ({entities, session}) => {
    return entities.users[session.currentUserId];
}