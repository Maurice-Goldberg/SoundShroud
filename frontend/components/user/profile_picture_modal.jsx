import React from 'react';

class ProfilePictureModal extends React.Component {
    constructor(props) {
        super(props);

        this.submitNewPicture = this.submitNewPicture.bind(this);
    }

    submitNewPicture(e) {
        const {user} = this.props;
        e.preventDefault();
        const formData = new FormData();
        formData.append('user[photo]', this.props.possiblePhotoFile);
        this.props.updateUser(formData, user.id);
        setTimeout(this.props.closeModal, 1000);
        this.props.forceUserShowUpdate();
    }

    render() {
        return (
            <div className="profile-modal-background" onClick={this.props.closeModal}>
                <p className="x">x</p>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    <h2>{this.props.user.account_name}</h2>
                    <p>For best results, upload images of at least 1000x1000 pixels.</p>
                    <img className="profile-photo" src={this.props.possiblePhotoUrl}/>
                    <div className="second-upload-buttons">
                        <button className="cancel-upload-btn" onClick={this.props.closeModal}>Cancel</button>
                        <button className="save-upload-btn" onClick={this.submitNewPicture}>Save</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default ProfilePictureModal;