import React from 'react';

class CurrentTrack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    togglePlayPause() {

    }

    handlePlayPauseClick() {

    }

    changeVol() {

    }

    muteTrack() {

    }

    changePlaypoint(e) {

    }

    restartTrack() {

    }

    skipTrack() {

    }

    loopTrack() {

    }

    componentDidMount() {
        // this.props.fetchTrack(this.props.trackId);

    }

    render() {
        return (
            <div className="current-track-wrapper">
                <div className="current-track-box">
                    <div className="audio-controls">
                        <img id="rewind-btn" src={window.rewind_btn} alt=""/>
                        <img id="play-btn" src={window.play_btn} alt=""/>
                        <img id="skip-btn" src={window.skip_btn} alt=""/>
                        <img id="loop-btn" src={window.loop_btn} alt=""/>
                    </div>
                    <div className="audio-scrollbar-wrapper">
                        <p>start</p>
                        <input
                            className="audio-scrollbar"
                            type="range"
                        />
                        <p>end</p>
                    </div>
                    <img src={window.speaker_btn} className="vol-control"/>
                    <img className="cover-art"/>
                    <div className="track-info">
                        <p className="artist-name">sample artistname</p>
                        <p className="track-name">very long sample trackname (remix)</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default CurrentTrack;