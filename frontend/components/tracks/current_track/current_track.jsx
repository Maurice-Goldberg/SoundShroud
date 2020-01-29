import React from 'react';
import {formatTrackTime} from '../../../util/track_util';
import {Link} from 'react-router-dom';

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
        this.handleDrag = this.handleDrag.bind(this);

        this.audioPlayer = React.createRef();
    }

    handlePlayPauseClick() {
        if(this.props.playing) {
            this.props.pauseTrack();
            this.audioPlayer.current.pause();
        } else {
            this.props.playTrack();
            this.audioPlayer.current.play();
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

    handleDrag() {

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
        //maybe i have to make it play automatically?
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
                        id="audio-player"
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
                                {this.props.playing ? 
                                    <img id="pause-btn" src={window.pause_btn} onClick={this.handlePlayPauseClick}/>
                                    :
                                    <img id="play-btn" src={window.play_btn} onClick={this.handlePlayPauseClick}/>
                                }
                                <img id="skip-btn" src={window.skip_btn}/>
                                <img id="loop-btn" src={window.loop_btn}/>
                            </div>
                            <div className="audio-scrollbar-wrapper">
                                <p>{formatTrackTime(this.state.timeElapsed)}</p>
                                <input
                                    className="audio-scrollbar"
                                    type="range"
                                    value="0"
                                    onChange={this.handleDrag}
                                    min="0"
                                    max={this.state.duration}
                                />
                                <p>{formatTrackTime(this.state.duration)}</p>
                            </div>
                            <img src={window.speaker_btn} className="vol-control"/>
                            <div className="track-info-and-art">
                                <Link to={`/tracks/${this.props.trackPlaying.id}`}>
                                    <img className="cover-art" src={this.props.trackPlaying.photoUrl} />
                                </Link>
                                <div className="track-info">
                                    <p className="artist-name">{this.props.trackPlaying.artist}</p>
                                    <Link className="track-name" to={`/tracks/${this.props.trackPlaying.id}`}>{this.props.trackPlaying.title}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );
        }
    }
}

export default CurrentTrack;