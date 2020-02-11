import TrackPlayPause from './track_play_pause';
import {connect} from 'react-redux';
import { receiveCurrentTrack, playTrack, pauseTrack, updatePlaypoint, clearIntervalId } from '../../actions/track_playing_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        track: ownProps.track,
        keyName: ownProps.keyName,
        playing: state.ui.trackPlaying.playing,
        trackPlayingId: state.ui.trackPlaying.track_id,
        selectVertical: ownProps.selectVertical,
        loading: state.ui.loading,
        intervalId: state.ui.trackPlaying.intervalId
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        receiveCurrentTrack: (track) => dispatch(receiveCurrentTrack(track)),
        playTrack: () => dispatch(playTrack()),
        pauseTrack: () => dispatch(pauseTrack()),
        updatePlaypoint: (time) => dispatch(updatePlaypoint(time))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackPlayPause);