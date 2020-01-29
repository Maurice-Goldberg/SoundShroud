import React from 'react';
import {formatUploadTime} from '../../../util/track_util';
import EditModalContainer from '../modals/edit_modal_container';
import DeleteModalContainer from '../modals/delete_modal_container';
import AudioPlayer from '../audio_player';
import TrackPlayPauseContainer from '../track_play_pause_container';
import NavBarContainer from '../../nav_bar/nav_bar_container';

class TrackShow extends React.Component {
    constructor(props) {
        super(props);
        this.responseButtons = this.responseButtons.bind(this);
    }

    responseButtons() {
        if(this.props.currentUser.id === this.props.artist.id) {
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
    }

    componentDidMount() {
        this.props.fetchTrack(this.props.match.params.trackId);
        this.trashcan = window.trashcan;
        this.pencil = window.pencil;
    }

    componentDidUpdate(prevProps) {
        if(prevProps.match.params.trackId !== this.props.match.params.trackId) {
            this.props.fetchTrack(this.props.match.params.trackId);
        }
    }

    render() {
        const { track, artist, modal, currentUser, currentTrackId } = this.props;
        if (Object.entries(track).length === 0) {
            return null;
        } else {
            return (
                <>
                    <NavBarContainer />
                    <div className="track-show-container">
                    {modal === "Edit" && <EditModalContainer track={track} currentUserId={currentUser.id}/>}
                    {modal === "Delete" && <DeleteModalContainer track={track} currentUserId={currentUser.id} artist={artist} />}
                        <div className="track-show-center-panel">
                            <div className="track-hero-wrapper">
                                <div className="track-hero">
                                    <div className="left-wrapper">
                                        <div id="play-btn-track-text-and-creation-time">
                                            <TrackPlayPauseContainer
                                                track={track}
                                                currentTrackId={currentTrackId}
                                            />
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
                                            <AudioPlayer track={track}/>
                                        </div>
                                    </div>
                                    <div className="creation-time-and-track-cover">
                                        <p className="creation-time-elapsed">{formatUploadTime(track.created_at)}</p>
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
                                    {currentUser ? this.responseButtons : <></>}
                                </div>
                                <div className="profile-and-description">
                                    <div className="t-s-artist-profile">
                                        <span className="circular-profile-picture">
                                            <img src={artist.photoUrl}/>
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
                </>
            )
        }
    }
}

export default TrackShow;