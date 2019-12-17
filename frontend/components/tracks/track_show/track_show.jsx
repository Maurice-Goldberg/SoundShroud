import React from 'react';
import {formatTime} from '../../../util/track_util';

class TrackShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchTrack(this.props.match.params.trackId);
    }

    render() {
        const { track, artist, currentUser, currentTrackId, trackPlaying } = this.props;

        debugger
        
        if (Object.entries(track).length === 0) {
            return null;
        } else {
            return (
                <div className="track-show-container">
                    <div className="track-show-center-panel">
                        <div className="track-hero">
                            <p className="artist-name">{artist.account_name}</p>
                            <h2 className="track-name">{track.title}</h2>
                            <img className="track-cover"/>
                            <span class="play-btn"></span>
                            <div className="play-sign"></div>
                            <div className="pause-sign"></div>
                            <p className="creation-time-elapsed">{formatTime(track.created_at)}</p>
                            <div className="show-track-player"></div>
                        </div>
                        <div className="track-response-bar">
                            <div className="comment-bar">
                                <img className="current-user-avatar"/>
                                <input className="comment-input"
                                type="text"
                                placeholder="Write a comment"/>
                            </div>
                            <div className="response-buttons-bar"></div>
                        </div>
                        <div className="t-s-artist-profile">
                            <span className="circular-profile-picture">
                                <img />
                            </span>
                            <h3 className="t-s-artist-name">{artist.account_name}</h3>
                        </div>
                        <p className="track-description">{track.description}</p>
                        <ul className="track-comments"></ul>
                        <div className="logo-footer"></div>
                    </div>
                </div>
            )
        }
    }
}

export default TrackShow;