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
            volume: 1.0,
            mutedVolume: null,
            looping: false,
            trackLoaded: false,
            trackPlaying: this.props.trackPlaying
        }

        this.handlePlayPauseClick = this.handlePlayPauseClick.bind(this);
        this.changeVol = this.changeVol.bind(this);
        this.toggleMute = this.toggleMute.bind(this);
        this.changePlaypoint = this.changePlaypoint.bind(this);
        this.restartTrack = this.restartTrack.bind(this);
        this.skipTrack = this.skipTrack.bind(this);
        this.toggleLoop = this.toggleLoop.bind(this);
        this.handleMD = this.handleMD.bind(this);
        this.updatePlayingTime = this.updatePlayingTime.bind(this);
        this.clearPlayingTimeUpdates = this.clearPlayingTimeUpdates.bind(this);
        this.handleAudioEnd = this.handleAudioEnd.bind(this);

        this.audioPlayer = React.createRef();
        this.scrollbar = React.createRef();
        this.volumebar = React.createRef();
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

    updatePlayingTime() {
        this.intervalId = setInterval(() => {
            this.scrollbar.current.value = this.audioPlayer.current.currentTime;
            this.setState({timeElapsed: this.audioPlayer.current.currentTime - 0.5});
            this.props.updatePlaypoint(this.state.timeElapsed);

            if(this.audioPlayer.current.ended) {
                this.restartTrack();
                this.props.pauseTrack();
            }
        }, 50);
    }

    clearPlayingTimeUpdates() {
        clearInterval(this.intervalId);
        this.setState({ timeElapsed: this.audioPlayer.current.currentTime });
    }

    handleAudioEnd() {
        clearInterval(this.intervalId);
        this.props.pauseTrack();
        this.setState({
            timeElapsed: 0,
            playing: false
        });
    }

    restartTrack() {
        this.setState({
            timeElapsed: 0,
            playing: this.props.playing
        }, () => {
            this.audioPlayer.current.currentTime = 0;
            this.props.restartTrack();
            this.props.updatePlaypoint(0);
        });
    }

    skipTrack() {
        //commented out code will be used when playlist functionality is implemented

        // this.audioPlayer.current.currentTime = this.audioPlayer.current.duration;
        this.setState({
            // playing: this.props.playing,
            playing: false
        });
        this.props.pauseTrack();
        this.audioPlayer.current.pause();
        this.audioPlayer.current.currentTime = 0;
        this.props.updatePlaypoint(0);
    }  

    changePlaypoint(e) {
        e.persist();
        this.setState({ timeElapsed: e.target.value }, () => {
            this.audioPlayer.current.currentTime = e.target.value;
        });
    }

    changeVol(e) {
        e.persist();
        this.setState({ volume: e.target.value / 1000.0 }, () => {
            this.volumebar.current.value = e.target.value;
            this.audioPlayer.current.volume = e.target.value / 1000.0;
        });
    }

    toggleMute() {
        let vol = this.state.volume;
        if(vol !== 0.0) {
            this.setState({
                mutedVolume: vol,
                volume: 0.0
            }, () => {
                this.audioPlayer.current.volume = this.state.volume;
                this.volumebar.current.value = 0;
            });
        } else {
            this.setState({
                volume: this.state.mutedVolume
            }, () => {
                this.audioPlayer.current.volume = this.state.volume;
                this.volumebar.current.value = this.state.volume * 1000;
            });
        }
    }

    toggleLoop() {
        if(this.audioPlayer.current.loop) {
            this.audioPlayer.current.loop = false;
            this.setState({looping: false});
        } else {
            this.audioPlayer.current.loop = true;
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
                        onPlaying={this.updatePlayingTime}
                        onPause={this.clearPlayingTimeUpdates}
                        onEnded={this.handleAudioEnd}
                        style={{ display: 'none' }}
                    />
                    <div className="current-track-wrapper">
                        <div className="current-track-box">
                            <div className="audio-controls">
                                <img id="rewind-btn" src={window.rewind_btn} onClick={this.restartTrack}/>
                                {this.props.playing ? 
                                    <img id="pause-btn" src={window.pause_btn} onClick={this.handlePlayPauseClick}/>
                                    :
                                    <img id="play-btn" src={window.play_btn} onClick={this.handlePlayPauseClick}/>
                                }

                                <img id="skip-btn" src={window.skip_btn} onClick={this.skipTrack}/>

                                {this.state.looping ? 
                                    <img id="loop-btn" src={window.loop_selected_btn} onClick={this.toggleLoop} />
                                    :
                                    <img id="loop-btn" src={window.loop_btn} onClick={this.toggleLoop}/>
                                }
                            </div>
                            <div className="audio-scrollbar-wrapper">
                                <p>{formatTrackTime(this.state.timeElapsed)}</p>
                                <input
                                    className="audio-scrollbar"
                                    type="range"
                                    onInput={(e) => this.changePlaypoint(e)}
                                    ref={this.scrollbar}
                                    min="0"
                                    defaultValue="0"
                                    max={this.state.duration}
                                />
                                <p>{formatTrackTime(this.state.duration)}</p>
                            </div>
                            {this.state.volumeHovered && 
                                <div
                                    className="volume-bar-wrapper" 
                                    onMouseEnter={() => this.setState({ volumeHovered: true })}
                                    onMouseLeave={() => this.setState({ volumeHovered: false })}
                                >
                                    <input
                                        type="range"
                                        className="volume-bar"
                                        ref={this.volumebar}
                                        min="0"
                                        max="1000"
                                        defaultValue={this.state.volume * 1000}
                                        onChange={(e) => this.changeVol(e)}
                                    />
                                </div>
                            }
                            {this.state.volume === 0.0 ? 
                                <img src={window.muted_speaker_btn}
                                    className="vol-control"
                                    onClick={this.toggleMute}
                                    onMouseEnter={() => this.setState({ volumeHovered: true })}
                                    onMouseLeave={() => this.setState({ volumeHovered: false })}
                                />
                                :
                                <img src={window.speaker_btn}
                                    className="vol-control"
                                    onClick={this.toggleMute}
                                    onMouseEnter={() => this.setState({ volumeHovered: true })}
                                    onMouseLeave={() => this.setState({ volumeHovered: false })}
                                />
                            }
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