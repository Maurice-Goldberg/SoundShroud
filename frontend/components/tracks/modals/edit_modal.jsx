import React from 'react';
import UploadDetails from '../../upload/upload_details';

class EditModal extends React.Component {
    constructor(props) {
        super(props);
    }

    //close on click of modal-background doesn't work, something having to do with the stopPropagation....
    //ok to leave it the way it is in the meantime
    render() {
        const {currentUserId, track, closeModal, updateTrack} = this.props;
        return (
            <div className="modal-background" onClick={closeModal}>
                <div className="edit-modal-child" onClick={e => e.stopPropagation()}>
                    <UploadDetails
                        className="edit-upload-details"
                        formType="edit"
                        title={track.title}
                        description={track.description}
                        photoUrl={track.photoUrl}
                        trackUrl={track.trackUrl}
                        private={track.private}
                        currentUserId={currentUserId}
                        closeModal={closeModal}
                        updateTrack={updateTrack}
                        id={track.id}
                    />
                </div>
            </div>
        )
    }
}

export default EditModal;