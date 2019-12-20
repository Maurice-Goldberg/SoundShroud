import React from 'react';
import UploadContainer from '../../upload/upload_container';

class EditModal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="modal-background" onClick={this.props.closeModal}>
                <div className="modal-child">
                    <div className="edit-modal-form-wrapper">
                        <form className="edit-modal-form">
                            <UploadContainer/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditModal;