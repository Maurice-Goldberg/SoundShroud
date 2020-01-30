import WaveForm from './waveform';
import {connect} from 'react-redux';
import { updatePlaypoint } from '../../../actions/track_playing_actions';

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updatePlaypoint: (newTime) => dispatch(updatePlaypoint(newTime)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WaveForm);