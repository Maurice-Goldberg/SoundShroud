import React from 'react';
import WaveSurfer from 'wavesurfer.js';

class WaveForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        }

        this.waveformRef = React.createRef();
    }

    componentDidMount() {

    }

    render() {
        return (
            <div id="waveform" ref={this.waveformRef}>

            </div>
        )
    }
}

export default WaveForm;