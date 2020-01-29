import {connect} from 'react-redux';
import CurrentTrack from './current_track';
import { playTrack, pauseTrack, restartTrack, updatePlaypoint } from '../../../actions/track_playing_actions';
import {fetchTracks} from '../../../actions/track_actions';
import {fetchUser} from '../../../actions/user_actions';

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.currentUserId],
        trackPlaying: state.entities.tracks[state.ui.trackPlaying.track_id],
        timeElapsed: state.ui.trackPlaying.timeElapsed,
        playing: state.ui.trackPlaying.playing
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        playTrack: () => dispatch(playTrack()),
        pauseTrack: () => dispatch(pauseTrack()),
        restartTrack: () => dispatch(restartTrack()),
        updatePlaypoint: (newTime) => dispatch(updatePlaypoint(newTime)),
        receiveCurrentTrack: (track) => dispatch(receiveCurrentTrack(track)),
        fetchUser: (id) => dispatch(fetchUser(id)),

        //just for testing purposes
        fetchTracks: () => dispatch(fetchTracks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentTrack);