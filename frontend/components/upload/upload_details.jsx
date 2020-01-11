import React from 'react';
import { withRouter } from 'react-router';

class UploadDetails extends React.Component {
    constructor(props) {
        super(props);

        if(props.formType !== "edit") {
            this.state = {
                title: "",
                description: "",
                photoUrl: "",
                photoFile: null,
                private: props.private,
                trackFile: props.trackFile,
                formType: props.formType,
            }
        } else {
            // $.get(props.photoUrl).then(photo => {
                this.state = {
                    title: props.title,
                    description: props.description,
                    photoUrl: props.photoUrl,
                    photoFile: null,
                    private: props.private,
                    trackFile: null,
                    formType: props.formType,
                }
            // })
        }

        this.handlePhotoFile = this.handlePhotoFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('track[title]', this.state.title);
        formData.append('track[description]', this.state.description);
        formData.append('track[private]', this.state.private);
        formData.append('track[account_id]', this.props.currentUserId);
        
        if (this.props.formType !== "edit") {
            formData.append('track[track_file]', this.state.trackFile);
            formData.append('track[photo]', this.state.photoFile);
            this.props.uploadTrack(formData)
                .then(
                    ({ trackResponse }) => this.props.history.push(`/tracks/${trackResponse.track.id}`)
                )
        } else {
            //ASK TA
            //NOT SURE HOW TO COMMUNICATE WITH AWS HERE FOR UPDATING.
            //I KEEP GETTING AN "INVALID SIGNATURE" ERROR BC IM SENDING UP AN URL AND NOT A FILE??

            formData.append('track[track_file]', this.state.trackUrl);
            formData.append('track[photo]', this.state.photoUrl);
            // formData.append('track[track_file]', new File(this.state.trackUrl));
            // formData.append('track[photo]', new File(this.state.photoUrl));
            this.props.updateTrack(formData, this.props.id)
                .then(
                    ({ trackResponse }) => this.props.history.push(`/tracks/${trackResponse.track.id}`)
                )
        }
    }

    handlePhotoFile(e) {
        e.preventDefault();
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleRadioInput(e) {
        if (e.currentTarget.value === "Public") {
            this.setState({ private: false });
        } else {
            this.setState({ private: true });
        }
    }
    
    render() {
        let coverSquare;
    
        if (this.state.photoUrl) {
            coverSquare =
                (<div className="left-div">
                    <img className="cover-art" src={this.state.photoUrl} />
                    <div>
                        <div className="image-input-text-bar">
                            <label className="image-input-text">Upload image
                    <img className="camera-png" src={window.camera} />
                                <input className="image-input" type="file" accept="image/jpeg,image/pjpeg,image/gif,image/png" onChange={this.handlePhotoFile} />
                            </label>
                        </div>
                    </div>
                </div>)
        } else {
            coverSquare = (
                <div className="left-div">
                    <div className="blank-image-square"></div>
                    <div>
                        <div className="image-input-text-bar">
                            <label className="image-input-text">Upload image
                                <img className="camera-png" src={window.camera} />
                                <input
                                    className="image-input"
                                    value={this.state.photoUrl}
                                    type="file"
                                    accept="image/jpeg,image/pjpeg,image/gif,image/png"
                                    onChange={this.handlePhotoFile}
                                />
                            </label>
                        </div>
                    </div>
                </div>
            );
        }
    
        return (
            <div className="upload-details-page">
                <div className="upload-details-box">
                    <h2 className="upload-details-header">Basic info</h2>
                    <form className="upload-details-form" >
                        <div className="upload-details-content">
                            {coverSquare}
                            <div className="right-div">
                                <div className="title-div">
                                    <label className="title-input-label">Title *
                                        <br></br>
                                        <input className="title-input"
                                            type="text"
                                            value={this.state.title}
                                            onChange={(e) => this.setState({ title: e.currentTarget.value })} />
                                    </label>
                                </div>
                                <div className="description-div">
                                    <label className="description-input-label">Description
                                        <br></br>
                                        <textarea className="description-input"
                                            value={this.state.description}
                                            rows="10"
                                            onChange={(e) => this.setState({ description: e.currentTarget.value })}></textarea>
                                    </label>
                                </div>
                                <div className="privacy-div">
                                    <label>Privacy:</label>
                                    {this.state.private ? 
                                    <>
                                        <label className="public-label">
                                            <input type="radio" name="privacy" value={false} onClick={this.updateRadioInput} />
                                            Public
                                        </label>
                                        <label className="private-label">
                                            <input defaultChecked type="radio" name="privacy" value={true} onClick={this.updateRadioInput} />
                                            Private
                                        </label>
                                    </>
                                    :
                                    <>
                                        <label className="public-label">
                                            <input defaultChecked type="radio" name="privacy" value={false} onClick={this.updateRadioInput} />
                                            Public
                                        </label>
                                        <label className="private-label">
                                            <input type="radio" name="privacy" value={true} onClick={this.updateRadioInput} />
                                            Private
                                        </label>
                                    </>
                                    }
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="upload-bottom-bar">
                        <p>* Required field</p>
                        <div className="second-upload-btns">
                            {this.props.formType === "edit" ? 
                                <button className="cancel-upload-btn" onClick={this.props.closeModal}>Cancel</button>
                                :
                                <button className="cancel-upload-btn" onClick={() => this.setState({ formPage: "prompt page" })}>Cancel</button>
                            }
                            <button className="save-upload-btn" onClick={this.handleSubmit}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(UploadDetails);