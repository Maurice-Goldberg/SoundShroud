import {connect} from 'react-redux';
import TrackShow from './track_show';
import {fetchUser} from '../../../actions/user_actions';
import {fetchTrack} from '../../../actions/track_actions';
import {
    receiveCurrentTrack,
    pauseTrack,
    playTrack,
    updatePlaypoint
} from '../../../actions/track_playing_actions';
import {currentUser} from '../../../reducers/selectors';
import {openModal, closeModal} from '../../../actions/modal_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    let track = state.entities.tracks[ownProps.match.params.trackId] || {};
    let artist = state.entities.users[track.account_id] || {};
    return {
        track: track,
        artist: artist,
        context: ownProps.context,
        currentUser: currentUser(state),
        currentTrackId: state.ui.trackPlaying.track_id,
        trackPlaying: state.ui.trackPlaying,
        modal: state.ui.modal,
        audioPlayer: ownProps.audioPlayer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTrack: (trackId) => dispatch(fetchTrack(trackId)),
        fetchUser: (account_id) => dispatch(fetchUser(account_id)),
        openEditModal: () => dispatch(openModal("Edit")),
        openDeleteModal: () => dispatch(openModal("Delete")),
        closeModal: () => dispatch(closeModal()),
        receiveCurrentTrack: (track) => dispatch(receiveCurrentTrack(track)),
        pauseTrack: () => dispatch(pauseTrack()),
        playTrack: () => dispatch(playTrack()),
        updatePlaypoint: () => dispatch(updatePlaypoint())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TrackShow));
