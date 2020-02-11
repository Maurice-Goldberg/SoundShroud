import React from 'react';
import WaveSurfer from 'wavesurfer.js';
import {formatTrackTime} from '../../../util/track_util';
import {withRouter} from 'react-router-dom';

class WaveForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            timeElapsed: 0,
            mounted: false
        }

        this.waveformRef = React.createRef();
        this.scrollbar = React.createRef();
    }

    componentDidMount() {
        this.props.startLoading();
        const {track} = this.props;
        if(track) {
            this.wavesurfer = WaveSurfer.create({
                container: `#waveform-${track.id}`,
                waveColor: 'white',
                progressColor: 'darkblue',
                barGraph: 10,
                barHeight: this.props.barHeight || 1,
                barWidth: 2,
                fillParent: true,
                cursorWidth: 0,
                interact: false,
                autoCenter: true,
                closeAudioContext: true,
                hideScrollbar: true,
                partialRender: true,
                removeMediaElementOnDestroy: true,
                pixelRatio: 1
            });
            this.wavesurfer.load(track.trackUrl);
            this.wavesurfer.on('ready', () => {
                this.duration =
                    (<p id="duration-bar">
                        {formatTrackTime(this.wavesurfer.getDuration())}
                    </p>);
                this.setState({ loading: false });
                this.props.stopLoading();
            });
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.trackId !== this.props.match.params.trackId) {
            this.wavesurfer.destroy();
            this.setState({
                loading: true,
            });
            this.props.startLoading();
            const { track } = this.props;
            if (track) {
                this.wavesurfer = WaveSurfer.create({
                    container: `#waveform-${track.id}`,
                    waveColor: 'white',
                    progressColor: 'darkblue',
                    barGraph: 10,
                    barHeight: this.props.barHeight || 1,
                    barWidth: 2,
                    fillParent: true,
                    cursorWidth: 0,
                    interact: false,
                    autoCenter: true,
                    closeAudioContext: true,
                    hideScrollbar: true,
                    partialRender: true,
                    removeMediaElementOnDestroy: true,
                    pixelRatio: 1
                });
                this.wavesurfer.load(track.trackUrl);
                this.wavesurfer.on('ready', () => {
                    this.duration =
                        (<p id="duration-bar">
                            {formatTrackTime(this.wavesurfer.getDuration())}
                        </p>);
                    this.setState({ loading: false });
                    this.props.stopLoading();
                });
            }
        }
    }

    // changePlaypoint(e) {
    //     e.persist();
        
    //     this.setState({ timeElapsed: e.target.value }, () => {
    //         this.props.audioPlayer.current.currentTime = e.target.value;
    //         this.props.updatePlaypoint(this.state.timeElapsed);
    //     });
    // }

    render() {
        const {trackPlaying, track} = this.props;
        let timeElapsedBar;
        let elapsedTime;
        let durationTime;
        let scrollbarMax;

        if(this.wavesurfer) {
            if (track.id === trackPlaying.track_id) {
                this.scrollbar.current.value = 0;
                elapsedTime = formatTrackTime(trackPlaying.timeElapsed);
            } else {
                elapsedTime = "0:00";
            }
            durationTime = formatTrackTime(this.wavesurfer.getDuration());
        }
        
        if (trackPlaying.playing && this.wavesurfer && track.id === trackPlaying.track_id) {
            let waveformSeekVal = (trackPlaying.timeElapsed + 0.5) / this.wavesurfer.getDuration();
            if (waveformSeekVal > 1) {
                this.wavesurfer.seekTo(1);
            } else {
                this.wavesurfer.seekTo(waveformSeekVal);
            }

            scrollbarMax = this.wavesurfer.getDuration();

            this.scrollbar.current.value = trackPlaying.timeElapsed || "0";

            timeElapsedBar = (
                <p id="time-elapsed-bar">
                    {formatTrackTime(trackPlaying.timeElapsed)}
                </p>
            );
        }

        let trackScrollbarId = "track-show-scrollbar"
        if(this.state.loading) {
            trackScrollbarId = "track-show-scrollbar-loading"
        }

        return (
            <div id="waveform-wrapper">
                <div id={`waveform-${track.id}`} ref={this.waveformRef}>

                </div>

                

                {this.state.loading ?
                    <div id="track-show-loading-group">
                        <p id="loading-text">Loading...</p>
                        <img id="waveform-loading-icon" src={window.loading_icon}/>
                    </div>
                    :
                    timeElapsedBar
                }
                <input
                    id={trackScrollbarId}
                    type="range"
                    ref={this.scrollbar}
                    min="0"
                    max={scrollbarMax}
                    defaultValue="0"
                />
                <div id="click-barrier"></div>
                {this.state.loading === false && this.duration}
            </div>
        );
    }
}

export default withRouter(WaveForm);