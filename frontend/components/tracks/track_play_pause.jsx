import React from 'react';

class TrackPlayPause extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let audioPlayer = document.getElementById("audio-player");

        if (this.props.playing && this.props.track.id === this.props.trackPlayingId) {
            this.props.pauseTrack();
            audioPlayer.pause();
        } else {
            this.props.receiveCurrentTrack(this.props.track);
            this.props.playTrack();
            audioPlayer.setAttribute("autoPlay", "");
            audioPlayer.play();
        }
    }

    render() {
        return (
            <div id="play-btn-wrapper" onClick={e => e.stopPropagation()}>
                <span className="play-btn" onClick={this.handleClick}>
                    {this.props.playing && this.props.track.id === this.props.trackPlayingId ?
                        <img src={window.pause_btn} className="pause-sign" />
                        : <img src={window.play_btn} className="play-sign" />}
                </span>
            </div>
        )
    }
}

export default TrackPlayPause;