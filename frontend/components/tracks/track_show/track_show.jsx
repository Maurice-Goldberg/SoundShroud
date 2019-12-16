import React from 'react';
const rtf = new Intl.RelativeTimeFormat('en', { style: 'narrow' });

class TrackShow extends React.Component {
    constructor(props) {
        super(props);
    }

    // isEmpty(obj) {
    //     for (let key in obj) {
    //         if (obj.hasOwnProperty(key))
    //             return false;
    //         }   
    //     return true;
    // }

    componentDidMount() {
        debugger
        this.props.fetchTrack(this.props.match.params.trackId);
    }

    render() {
        const { track, artist, currentUser, currentTrackId, trackPlaying } = this.props;
        debugger
        
        if (Object.entries(track).length === 0) {
            debugger
            return null;
        } else {
            debugger
            return (
                <>
                    <div className="track-hero">
                        <p className="artist-name">{artist.account_name}</p>
                        <h2 className="track-name">{track.title}</h2>
                        <img className="track-cover"/>
                        <div className="play-btn"></div>
                        {/* <p className="creation-time-elapsed">{rtf.format(track.created_at)}</p> */}
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
}

export default TrackShow;