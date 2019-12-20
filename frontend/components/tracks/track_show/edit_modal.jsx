import React from 'react';
import UploadDetails from '../../upload/upload_details';

class EditModal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {currentUserId, track, closeModal} = this.props;
        return (
            <div className="modal-background" onClick={closeModal}>
                <div className="edit-modal-form-wrapper">
                    <form className="edit-modal-form">
                        <UploadDetails className=".edit-upload-details" private={track.private} currentUserId={currentUserId}/>
                    </form>
                </div>
            </div>
        )
    }
}

export default EditModal;