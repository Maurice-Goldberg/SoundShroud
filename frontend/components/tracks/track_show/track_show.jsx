import React from 'react';
import {formatTime} from '../../../util/track_util';

class TrackShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchTrack(this.props.match.params.trackId);
    }


    componentDidUpdate(prevProps) {
        if(prevProps.match.params.trackId !== this.props.match.params.trackId) {
            this.props.fetchTrack(this.props.match.params.trackId);
        }
    }

    render() {
        const { track, artist, currentUser, currentTrackId, trackPlaying } = this.props;
        if (Object.entries(track).length === 0) {
            return null;
        } else {
            return (
                <div className="track-show-container">
                    <div className="track-show-center-panel">
                        <div className="track-hero-wrapper">
                            <div className="track-hero">
                                <div className="left-wrapper">
                                    <div className="play-btn-track-text-and-creation-time">
                                        <span className="play-btn"></span>
                                        <div className="play-sign"></div>
                                        <div className="pause-sign"></div>
                                        <div className="track-text-and-creation-time">
                                            <div className="track-text">
                                                <div className="artist-name-wrapper">
                                                    <p className="artist-name">{artist.account_name}</p>
                                                </div>
                                                <div className="track-name-wrapper">
                                                    <h2 className="track-name">{track.title}</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="show-track-player">
                                        <audio className="audio-player" controls>
                                            <source src={track.trackUrl} type="audio/mpeg" />
                                        </audio>
                                    </div>
                                </div>
                                <div className="creation-time-and-track-cover">
                                    <p className="creation-time-elapsed">{formatTime(track.created_at)}</p>
                                    <img className="track-cover" src={track.photoUrl}/>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-info">
                            <div className="track-response-bar">
                                <div className="comment-bar">
                                    <img className="current-user-avatar"/>
                                    <input className="comment-input"
                                    type="text"
                                    placeholder="Write a comment"/>
                                </div>
                                <div className="response-buttons-bar"></div>
                            </div>
                            <div className="profile-and-description">
                                <div className="t-s-artist-profile">
                                    <span className="circular-profile-picture">
                                        <img />
                                    </span>
                                    <h3 className="t-s-artist-name">{artist.account_name}</h3>
                                </div>
                                <p className="track-description">{track.description}</p>
                                <ul className="track-comments"></ul>
                            </div>
                            <div className="logo-footer"></div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default TrackShow;