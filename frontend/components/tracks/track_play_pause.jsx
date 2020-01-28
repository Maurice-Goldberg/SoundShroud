import React from 'react';

class TrackPlayPause extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playing: false
        }

        this.switchPlayPause = this.switchPlayPause.bind(this);
    }

    switchPlayPause() {
        if (this.state.playing) {
            this.props.pauseTrack();
        } else {
            this.props.playTrack();
        }

        this.setState({ playing: !this.props.trackPlaying.playing });
        this.props.receiveCurrentTrack(this.props.track);
    }

    render() {
        return (
        <span className="play-btn">
            {this.state.playing ?
                <img src={window.pause_btn} className="pause-sign" onClick={this.switchPlayPause} />
                : <img src={window.play_btn} className="play-sign" onClick={this.switchPlayPause} />}
        </span>
        )
    }
}

export default TrackPlayPause;