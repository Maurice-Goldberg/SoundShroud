import React from 'react';
import {withRouter} from 'react-router';
import {formatUploadTime} from '../../../util/track_util';
import TrackPlayPauseContainer from '../../tracks/track_play_pause_container';
import WaveFormContainer from '../track_show/waveform_container';

class DeleteModal extends React.Component {
    constructor(props) {
        super(props);
        this.deleteTrackHelper = this.deleteTrackHelper.bind(this);
    }


    deleteTrackHelper(id) {
        this.props.deleteTrack(id);
        if(this.props.context === "track show") {
            this.props.history.push('/discover');
        } else {
            this.props.forceUserShowUpdate();
            // this.props.history.push(`/users/${this.props.currentUserId}`);
        }
        this.props.closeModal();
    }

    render() {
        const {closeModal, track, artist, trackPlaying} = this.props;
        return (
            <div className="modal-background" onClick={closeModal}>
                <div className="delete-modal-child">
                    <div className="delete-modal-box" onClick={e => e.stopPropagation()}>
                        <div className="delete-modal-track-preview">
                            <img className="track-cover" src={track.photoUrl} />
                            <div className="track-player">
                                <div className="track-player-top-row">
                                    <div className="play-btn-track-text-and-creation-time">
                                        <TrackPlayPauseContainer
                                            track={track}
                                            currentTrackId={trackPlaying.track_id}
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
                                    <p className="creation-time-elapsed">{formatUploadTime(track.created_at)}</p>
                                </div>

                                <div className="show-track-player">
                                    <WaveFormContainer track={track} audioPlayer={this.props.audioPlayer} barHeight={0.5} />
                                </div>
                                {/* <div className="comment-bar">
                                    <img className="current-user-avatar" />
                                    <input className="comment-input"
                                        type="text"
                                        placeholder="Write a comment" />
                                </div> */}
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className="bottom-half" >
                            <h2 className="delete-prompt">Permanently delete this track?</h2>
                            <div className="choice-box">
                                <p className="delete-warning">
                                    Removing this track is irreversible.<br/>
                                    You will lose all the plays, likes and <br/>
                                    comments for this track with no way <br/>
                                    to get them back.
                                </p>
                                <div className="btns">
                                    <button className="cancel-delete" onClick={closeModal}>Cancel</button>
                                    <button onClick={() => this.deleteTrackHelper(track.id)}>Delete forever</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(DeleteModal);