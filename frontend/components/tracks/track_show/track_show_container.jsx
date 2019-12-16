import {connect} from 'react-redux';
import TrackShow from './track_show';
import {findTrack, findTrackArtist, currentUser} from '../../../reducers/selectors';
import {fetchArtist} from '../../../actions/artist_actions';
import {fetchTrack} from '../../../actions/track_actions';

const mapStateToProps = (state, ownProps) => {
    //finding track from track component's own state
    let componentTrack;
    if(ownProps.location.state) {
        componentTrack = ownProps.location.state.track;
    }

    debugger
    //finding track from url path
    const urlTrack = findTrack(state, ownProps.match.params.trackId);

    let track;
    if(componentTrack) {
        track = componentTrack;
    } else if (urlTrack) {
        track = urlTrack;
    } else {
        track = {};
    }

    return {
        track: track,
        artist: findTrackArtist(state, track.id),
        currentUser: currentUser(state),
        currentTrackId: state.ui.trackPlaying.track_id,
        trackPlaying: state.ui.trackPlaying,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchArtist: (artist) => dispatch(fetchArtist(artist)),
        fetchTrack: (trackId) => dispatch(fetchTrack(trackId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackShow);