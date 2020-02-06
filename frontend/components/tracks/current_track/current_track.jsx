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

        // this.audioPlayer = React.createRef();
        this.scrollbar = React.createRef();
        this.volumebar = React.createRef();
    }

    handlePlayPauseClick() {
        this.clearPlayingTimeUpdates();
        clearInterval(this.intervalId);
        if(this.props.playing) {
            this.props.pauseTrack();
            this.props.audioPlayer.current.pause();
        } else {
            this.props.playTrack();
            this.props.audioPlayer.current.play();
        }
    }

    updatePlayingTime() {
        this.intervalId = setInterval(() => {
            this.scrollbar.current.value = this.props.audioPlayer.current.currentTime;
            this.setState({timeElapsed: this.props.audioPlayer.current.currentTime - 0.5});
            this.props.updatePlaypoint(this.state.timeElapsed);
        }, 50);
    }

    clearPlayingTimeUpdates() {
        clearInterval(this.intervalId);
        this.setState({ timeElapsed: this.props.audioPlayer.current.currentTime });
    }

    handleAudioEnd() {
        clearInterval(this.intervalId);
        this.props.pauseTrack();
        this.props.audioPlayer.pause();
        this.scrollbar.current.value = 0;
        this.props.updatePlaypoint(0);
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
            this.props.audioPlayer.current.currentTime = 0;
            this.scrollbar.current.value = 0;
            this.props.updatePlaypoint(0);
            this.props.restartTrack();
        });
    }

    skipTrack() {
        this.setState({
            playing: false,
            timeElapsed: 0
        }, () => {
            this.props.audioPlayer.current.currentTime = 0;
            this.scrollbar.current.value = 0;
            this.props.updatePlaypoint(0);
            this.props.pauseTrack();
            this.props.audioPlayer.current.pause();
            clearInterval(this.intervalId);
        });
    }  

    changePlaypoint(e) {
        e.persist();
        this.setState({ timeElapsed: e.target.value }, () => {
            this.props.audioPlayer.current.currentTime = e.target.value;
        });
    }

    changeVol(e) {
        e.persist();
        this.setState({ volume: e.target.value / 1000.0 }, () => {
            this.volumebar.current.value = e.target.value;
            this.props.audioPlayer.current.volume = e.target.value / 1000.0;
        });
    }

    toggleMute() {
        let vol = this.state.volume;
        if(vol !== 0.0) {
            this.setState({
                mutedVolume: vol,
                volume: 0.0
            }, () => {
                this.props.audioPlayer.current.volume = this.state.volume;
                this.volumebar.current.value = 0;
            });
        } else {
            this.setState({
                volume: this.state.mutedVolume
            }, () => {
                this.props.audioPlayer.current.volume = this.state.volume;
                this.volumebar.current.value = this.state.volume * 1000;
            });
        }
    }

    toggleLoop() {
        if(this.props.audioPlayer.current.loop) {
            this.props.audioPlayer.current.loop = false;
            this.setState({looping: false});
        } else {
            this.props.audioPlayer.current.loop = true;
            this.setState({looping: true});
        }
    }

    handleMD(e) {
        e.preventDefault();
        this.setState({
            trackLoaded: true,
            duration: this.props.audioPlayer.current.duration,
            playing: this.props.playing,
            trackPlaying: this.props.trackPlaying
        });
        //maybe i have to make it play automatically?
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
                        ref={this.props.audioPlayer}
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
                            <div className="volume-btn-bar-container"
                                onMouseEnter={() => this.setState({ volumeHovered: true })}
                                onMouseLeave={() => this.setState({ volumeHovered: false })}
                            >
                                {this.state.volumeHovered && 
                                    <div
                                        className="volume-bar-wrapper" 
                                        onMouseEnter={() => this.setState({ volumeHovered: true })}
                                        onMouseLeave={() => this.setState({ volumeHovered: false })}
                                    >
                                        <input
                                            type="range"
                                            id="volume-bar"
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
                            </div>
                            <div className="track-info-and-art">
                                <Link to={`/tracks/${this.props.trackPlaying.id}`}>
                                    <img className="cover-art" src={this.props.trackPlaying.photoUrl} />
                                </Link>
                                <div className="track-info">
                                    <Link to={`/users/${this.props.trackPlaying.account_id}`}>
                                        <p className="artist-name">{this.props.trackPlaying.artist}</p>
                                    </Link>
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