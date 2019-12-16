import * as ArtistAPIUtil from '../util/artist_api_util';

export const RECEIVE_ARTIST = "RECEIVE_ARTIST";

export const receiveArtist = (artist) => {
    return {
        type: RECEIVE_ARTIST,
        artist
    }
}

export const fetchArtist = (artist) => (dispatch) => {
    return ArtistAPIUtil.fetchArtist(artist).then(
        artist => dispatch(receiveArtist(artist))
    );
}