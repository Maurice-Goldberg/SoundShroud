import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import TrackPlayPauseContainer from '../tracks/track_play_pause_container';
import {Link} from 'react-router-dom';
import WaveFormContainer from '../tracks/track_show/waveform_container';
import {formatUploadTime} from '../../util/track_util';
import EditModalContainer from '../tracks/modals/edit_modal_container';
import DeleteModalContainer from '../tracks/modals/delete_modal_container';

class UserShow extends React.Component {
    constructor(props) {
        super(props);

        this.responseButtons = this.responseButtons.bind(this);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.userId);
        this.props.fetchTracks();
    }

    responseButtons() {
        return (
            <div className="response-buttons-bar">
                <div className="edit-btn" onClick={this.props.openEditModal}>
                    <p className="pencil-png">✏️</p>
                    <p className="edit-btn-ele" >Edit</p>
                </div>
                <div className="delete-btn" onClick={this.props.openDeleteModal}>
                    <p className="trashcan-png">🗑</p>
                    <p className="delete-btn-ele">Delete</p>
                </div>
            </div>
        )
    }

    render() {
        if(!this.props.userTracks) {
            return null;
        }

        let responseBtns = <></>;
        if(this.props.currentUser) {
            if (this.props.user.account_name === this.props.currentUser.account_name) {
                responseBtns = this.responseButtons();
            }
        }

        let pictureArea = <img id="profile-picture" src={this.props.user.photoUrl} />;
        let userTracks = this.props.userTracks.map((userTrack) => {
            return (
                <>
                    {this.props.modal === "Edit" &&
                        this.props.currentUser &&
                        <EditModalContainer track={userTrack} currentUserId={this.props.currentUser.id} />
                    }
                    {this.props.modal === "Delete" &&
                        this.props.currentUser &&
                        <DeleteModalContainer track={userTrack} currentUserId={this.props.currentUser.id} artist={userTrack.artist} />
                    }
                    <div className="track-hero-wrapper">
                        <div className="track-hero">
                            <Link to={`/tracks/${userTrack.id}`}>
                                <img className="track-cover" src={userTrack.photoUrl} />
                            </Link>
                            <div className="right-wrapper">
                                <div id="play-btn-track-text-and-creation-time">
                                    <div id="user-show-play-btn-wrapper">
                                        <TrackPlayPauseContainer
                                            track={userTrack}
                                            currentTrackId={this.props.trackPlaying.track_id}
                                        />
                                    </div>
                                    <div className="track-text-and-creation-time">
                                        <div className="track-text">
                                            <div className="artist-name-wrapper">
                                                <Link to={`/users/${this.props.user.id}`}>
                                                    <p className="artist-name">{this.props.user.account_name}</p>
                                                </Link>
                                            </div>
                                            <div className="track-name-wrapper">
                                                <Link to={`/tracks/${userTrack.id}`}>
                                                    <h2 className="track-name">{userTrack.title}</h2>
                                                </Link>
                                            </div>
                                        </div>
                                        <p className="creation-time-elapsed">{formatUploadTime(userTrack.created_at)}</p>
                                    </div>
                                </div>

                                <div className="show-track-player">
                                    <WaveFormContainer track={userTrack} audioPlayer={this.props.audioPlayer} barHeight={0.5} />
                                </div>
                                {responseBtns}
                            </div>
                        </div>
                    </div>
                </>
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
                    <div id="track-section-wrapper">
                        <p id="tracks-header">Tracks</p>
                        {userTracks}
                    </div>
                </div>
            </>
        );
    }
}

export default UserShow;