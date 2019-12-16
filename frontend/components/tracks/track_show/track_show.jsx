import React from 'react';

class TrackShow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { track, artist, currentUser, currentTrackId, trackPlaying } = this.props;
        
        return (
            <>
                <div className="track-hero">
                    <p className="artist-name">{artist.account_name}</p>
                    <h2 className="track-name">{track.title}</h2>
                    <img className="track-cover"/>
                    <div className="play-btn"></div>
                    <p className="creation-time-elapsed">{relativeTime(track.created_at)}</p>
                    <div className="show-track-player"></div>
                </div>
                <div className="track-response-bar">
                    <div className="comment-bar">
                        <img className="current-user-avatar"/>
                        <input className="comment-input" type="text"/>
                    </div>
                </div>
                <div className="t-s-artist-profile">
                    <img className="circular-profile-picture"/>
                    <h3 className="t-s-artist-name">{artist.account_name}</h3>
                </div>
                <p className="track-description">{track.description}</p>
                <ul className="track-comments"></ul>
                <div className="logo-footer"></div>
            </>
        )
    }
}

export default TrackShow;