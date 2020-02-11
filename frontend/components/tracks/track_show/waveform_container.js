import WaveForm from './waveform';
import {connect} from 'react-redux';
import { updatePlaypoint } from '../../../actions/track_playing_actions';
import {startLoading, stopLoading} from '../../../actions/loading_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        track: ownProps.track,
        trackPlaying: state.ui.trackPlaying,
        // audioPlayer: ownProps.audioPlayer,
        barHeight: ownProps.barHeight
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updatePlaypoint: (newTime) => dispatch(updatePlaypoint(newTime)),
        startLoading: () => dispatch(startLoading()),
        stopLoading: () => dispatch(stopLoading())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WaveForm);