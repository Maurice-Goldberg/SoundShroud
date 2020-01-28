import React from 'react';

class CurrentTrack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            duration: "",
            timeElapsed: 0,
            playing: props.playing,
            volume: 1,
            looping: false,
            trackLoaded: false,
            trackPlaying: this.props.trackPlaying
        }

        this.handlePlayPauseClick = this.handlePlayPauseClick.bind(this);
        this.changeVol = this.changeVol.bind(this);
        this.muteTrack = this.muteTrack.bind(this);
        this.changePlaypoint = this.changePlaypoint.bind(this);
        this.restartTrack = this.restartTrack.bind(this);
        this.skipTrack = this.skipTrack.bind(this);
        this.toggleLoop = this.toggleLoop.bind(this);
        this.handleMD = this.handleMD.bind(this);

        this.audioPlayer = React.createRef();
    }

    handlePlayPauseClick() {
        if (this.state.playing) {
            this.setState({ playing: false },
                () => {
                    this.props.pauseTrack();
                    this.audioPlayer.current.pause();
                }
            );
        } else {
            this.setState({playing: true},
                () => {
                    this.props.playTrack();
                    this.audioPlayer.current.play();
                }
            );
        }
    }

    changeVol() {

    }

    muteTrack() {

    }

    changePlaypoint(e) {

    }

    restartTrack() {
        this.setState({ playing: this.props.playing });
        this.audioPlayer.current.currentTime = 0;
    }

    skipTrack() {

    }

    toggleLoop() {
        if(this.state.looping) {
            this.setState({looping: false});
        } else {
            this.setState({looping: true});
        }
    }

    handleMD(e) {
        e.preventDefault();
        this.setState({
            trackLoaded: true,
            duration: this.audioPlayer.current.duration,
            playing: this.props.playing,
            trackPlaying: this.props.trackPlaying
        });
        //have it play automatically?
    }

    componentDidMount() {
        this.props.fetchTracks();
    }

    componentDidUpdate() {
        //throwing a "user didn't interact with dom first" error
        // if(this.props.trackPlaying) {
        //     this.audioPlayer.current.play();
        // } else {
        //     this.audioPlayer.current.pause();
        // }
        
    }

    render() {
        if(!this.props.trackPlaying) {
            return null;
        } else {
            let trackUrl = this.props.trackPlaying.trackUrl;
            return (
                <>
                    <audio
                        preload="auto"
                        type="audio/mp3"
                        ref={this.audioPlayer}
                        src={trackUrl}
                        onLoadedMetadata={this.handleMD}
                        style={{display: 'none'}}
                    />
                    <div className="current-track-wrapper">
                        <div className="current-track-box">
                            <div className="audio-controls">
                                <img id="rewind-btn" src={window.rewind_btn}/>
                                {this.state.playing ? 
                                    <img id="pause-btn" src={window.pause_btn} onClick={this.handlePlayPauseClick}/>
                                    :
                                    <img id="play-btn" src={window.play_btn} onClick={this.handlePlayPauseClick}/>
                                }
                                <img id="skip-btn" src={window.skip_btn}/>
                                <img id="loop-btn" src={window.loop_btn}/>
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
                                <p className="artist-name">{this.props.artist.name}</p>
                                <p className="track-name">{this.props.trackPlaying.title}</p>
                            </div>
                        </div>
                    </div>
                </>
            );
        }
    }
}

export default CurrentTrack;