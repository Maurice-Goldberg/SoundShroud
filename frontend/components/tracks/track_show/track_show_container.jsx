import {connect} from 'react-redux';
import TrackShow from './track_show';
import {fetchUser, fetchUsers} from '../../../actions/user_actions';
import {fetchTrack} from '../../../actions/track_actions';
import {currentUser} from '../../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
    let track = state.entities.tracks[ownProps.match.params.trackId] || {};
    let artist = state.entities.users[track.account_id];
    debugger
    return {
        track: track,
        artist: artist,
        currentUser: currentUser(state),
        currentTrackId: state.ui.trackPlaying.track_id,
        trackPlaying: state.ui.trackPlaying,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTrack: (trackId) => dispatch(fetchTrack(trackId)),
        fetchUser: (account_id) => dispatch(fetchUser(account_id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackShow);