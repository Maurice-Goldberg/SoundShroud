import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import TrackPlayPauseContainer from '../tracks/track_play_pause_container';
import {Link} from 'react-router-dom';
import WaveFormContainer from '../tracks/track_show/waveform_container';
import {formatUploadTime} from '../../util/track_util';

class UserShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.userId);
        this.props.fetchTracks();
    }

    render() {
        if(!this.props.userTracks) {
            return null;
        }

        let pictureArea = <img id="profile-picture" src={this.props.user.photoUrl} />;
        let userTracks = this.props.userTracks.map((userTrack) => {
            return (
                <div className="track-hero-wrapper">
                    <div className="track-hero">
                        <div className="left-wrapper">
                            <img className="track-cover" src={userTrack.photoUrl} />
                            <div id="play-btn-track-text-and-creation-time">
                                <TrackPlayPauseContainer
                                    track={userTrack}
                                    currentTrackId={this.props.trackPlaying.track_id}
                                />
                                <div className="track-text-and-creation-time">
                                    <div className="track-text">
                                        <div className="artist-name-wrapper">
                                            <Link to={`/users/${this.props.user.id}`}>
                                                <p className="artist-name">{this.props.user.account_name}</p>
                                            </Link>
                                        </div>
                                        <div className="track-name-wrapper">
                                            <h2 className="track-name">{userTrack.title}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="show-track-player">
                                <WaveFormContainer track={userTrack} audioPlayer={this.props.audioPlayer} />
                            </div>
                        </div>
                        <div className="creation-time-and-track-cover">
                            <p className="creation-time-elapsed">{formatUploadTime(userTrack.created_at)}</p>
                        </div>
                    </div>
                </div>
            );
        });

        if(!this.props.user.photoUrl) {
            if(this.props.user.id === this.props.currentUser.id) {
                pictureArea = (
                    <div id="profile-picture-form">
    
                    </div>
                );
            } else {
                pictureArea = (
                    <div id="blank-profile-picture">

                    </div>
                );
            }
        }

        return (
            <>
                <NavBarContainer />
                <div className="user-show-wrapper">
                    <div id="banner">
                        {pictureArea}
                        <p id="account-name">{this.props.user.account_name}</p>
                    </div>
                    {userTracks}
                </div>
            </>
        );
    }
}

export default UserShow;