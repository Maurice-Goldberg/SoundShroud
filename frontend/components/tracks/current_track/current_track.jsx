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
                        <img src={window.rewind_btn} alt=""/>
                        <img src={window.play_btn} alt=""/>
                        <img src={window.skip_btn} alt=""/>
                        <img src={window.loop_btn} alt=""/>
                    </div>
                    <div className="scrollbar">

                    </div>
                    <img src={window.speaker_btn} className="vol-control"/>
                    <img className="cover-art"/>
                    <div className="track-info">
                        <p className="artist-name"></p>
                        <p className="track-name"></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default CurrentTrack;