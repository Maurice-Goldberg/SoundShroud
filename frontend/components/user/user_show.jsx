import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import TrackPlayPauseContainer from '../tracks/track_play_pause_container';
import {Link} from 'react-router-dom';
import WaveFormContainer from '../tracks/track_show/waveform_container';
import {formatUploadTime} from '../../util/track_util';
import EditModalContainer from '../tracks/modals/edit_modal_container';
import DeleteModalContainer from '../tracks/modals/delete_modal_container';
import ProfilePictureModalContainer from '../user/profile_picture_modal_container.js';

class UserShow extends React.Component {
    constructor(props) {
        super(props);

        //gotta have the delete modal change the state of UserShow, but the userTracks has to actually point to
        //an array of userTracks, not DOM elements of user tracks (that can still just happen in the render method)

        this.state = {
            userTracks: null,
            photoFile: null,
            photoUrl: "",
            possiblePhotoFile: null,
            possiblePhotoUrl: ""
        }

        this.responseButtons = this.responseButtons.bind(this);
        this.forceUserShowUpdate = this.forceUserShowUpdate.bind(this);
        this.userTracks = this.userTracks.bind(this);
        this.pictureArea = this.pictureArea.bind(this);
        this.handlePhotoFile = this.handlePhotoFile.bind(this);
    }

    responseButtons() {
        if(this.props.currentUser) {
            if(parseInt(this.props.userId) === this.props.currentUser.id) {
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
                );
            }
        }
    }

    handlePhotoFile(e) {
        e.preventDefault();
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ possiblePhotoFile: file, possiblePhotoUrl: fileReader.result });
            this.props.openProfilePictureModal();
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    pictureArea() {
        if (!this.state.photoUrl) {
            if (this.props.user.id === this.props.currentUser.id) {
                return (
                    <div id="blank-profile-picture">
                        <div>
                            <div className="image-input-text-bar">
                                <label className="image-input-text">Upload image
                                <img className="camera-png" src={window.camera} />
                                    <input
                                        className="image-input"
                                        type="file"
                                        accept="image/jpeg,image/pjpeg,image/gif,image/png"
                                        onChange={this.handlePhotoFile}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                );
            } else {
                return (
                    <div id="blank-profile-picture">

                    </div>
                );
            }
        } else {
            return (
                <div id="filled-profile-picture">
                    <img id="profile-picture" src={this.state.photoUrl} />
                    <div className="image-input-text-bar">
                        <label className="image-input-text">Update image
                            <img className="camera-png" src={window.camera} />
                            <input
                                className="image-input"
                                type="file"
                                accept="image/jpeg,image/pjpeg,image/gif,image/png"
                                onChange={this.handlePhotoFile}
                            />
                        </label>
                    </div>
                </div>
            );
        }
    }

    userTracks() {
        console.log(this.props.currentUser);
        console.log(this.props.userTracks);
        return this.props.userTracks.map((userTrack) => {
            return (
                <div key={userTrack.id}>
                    {this.props.modal === "Edit" &&
                        this.props.currentUser &&
                        <EditModalContainer track={userTrack} currentUserId={this.props.currentUser.id} forceUserShowUpdate={this.forceUserShowUpdate} />
                    }
                    {this.props.modal === "Delete" &&
                        this.props.currentUser &&
                        <DeleteModalContainer track={userTrack} currentUserId={this.props.currentUser.id} artist={this.props.user} forceUserShowUpdate={this.forceUserShowUpdate} />
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
                                {this.responseButtons()}
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    }

    forceUserShowUpdate() {
        this.props.fetchTracks().then(() => {
            this.setState({
                userTracks: this.userTracks()
            })
        });
    }

    componentDidMount() {
        this.props.fetchUser(this.props.userId);
        this.props.fetchTracks().then(() => {
            this.setState({
                userTracks: this.userTracks(),
                photoUrl: this.props.user.photoUrl
            })
        });
    }

    componentDidUpdate() {
        // this.props.fetchUser(this.props.userId);
        // this.props.fetchTracks().then(() => {
        //     this.setState({
        //         userTracks: this.userTracks()
        //     })
        // });
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

        return (
            <>
                <NavBarContainer />
                {this.props.modal === "Profile Picture" && <ProfilePictureModalContainer possiblePhotoUrl={this.state.possiblePhotoUrl}/>}
                <div className="user-show-wrapper">
                    <div id="banner">
                        {this.pictureArea()}
                        <p id="account-name">{this.props.user.account_name}</p>
                    </div>
                    <div id="track-section-wrapper">
                        <p id="tracks-header">Tracks</p>
                        {this.state.userTracks}
                    </div>
                </div>
            </>
        );
    }
}

export default UserShow;