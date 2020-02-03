import TrackPlayPause from './track_play_pause';
import {connect} from 'react-redux';
import { receiveCurrentTrack, playTrack, pauseTrack, updatePlaypoint } from '../../actions/track_playing_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        track: ownProps.track,
        keyName: ownProps.keyName,
        playing: state.ui.trackPlaying.playing,
        trackPlayingId: state.ui.trackPlaying.track_id,
        selectVertical: ownProps.selectVertical
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