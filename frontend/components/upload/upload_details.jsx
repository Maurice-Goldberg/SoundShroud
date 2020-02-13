import React from 'react';
import { withRouter } from 'react-router';

class UploadDetails extends React.Component {
    constructor(props) {
        super(props);

        if(props.formType !== "edit") {
            this.state = {
                title: this.props.trackName,
                description: "",
                photoUrl: props.photoUrl,
                photoFile: props.photoFile,
                private: props.private,
                trackFile: props.trackFile,
                formType: props.formType,
                loading: false,
                photoError: false
            }
        } else {
            this.state = {
                title: props.title,
                description: props.description,
                photoUrl: props.photoUrl,
                photoFile: null,
                private: props.private,
                trackFile: null,
                formType: props.formType,
                loading: false,
                photoError: false
            }
        }

        this.handlePhotoFile = this.handlePhotoFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showImageError = this.showImageError.bind(this);
    }

    preventEnter(event) {
        let code = event.keyCode || event.which;
        if(code === 13) {
            event.preventDefault();
        }
    }

    showImageError() {
        if(this.props.errors.length > 0) {
            return (
                <p className="image-error">
                    {`${this.props.errors[0]}`}
                </p>
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

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.photoUrl === "") {
            this.props.setErrors(["Please add a song cover"]);
            this.setState({photoError: true})
            return;
        }

        this.setState({
            loading: true
        });
        const formData = new FormData();
        formData.append('track[title]', this.state.title);
        formData.append('track[description]', this.state.description);
        formData.append('track[private]', this.state.private);
        formData.append('track[account_id]', this.props.currentUserId);
        formData.append('track[artist]', this.props.currentUser.account_name);
        
        if (this.props.formType === "edit") {    
            if(this.state.photoFile) {
                formData.append('track[photo]', this.state.photoFile);
            }
            this.props.updateTrack(formData, this.props.id)
                .then(this.props.closeModal)
        } else {
            formData.append('track[track_file]', this.state.trackFile);
            formData.append('track[photo]', this.state.photoFile);
            
            this.props.uploadTrack(formData)
                .then(({ trackResponse }) => {
                        this.props.setErrors([]);
                        this.props.history.push(`/tracks/${trackResponse.track.id}`)
                    }
                ).fail(() => {
                        this.setState({loading: false});
                    }
                );
        }
    }
    
    render() {
        let coverSquare;
    
        if (this.state.photoUrl) {
            coverSquare = (
                <div className="left-div">
                    <img className="cover-art" src={this.state.photoUrl} />
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
                </div>)
        } else {
            let errorId = this.state.photoError ? "errored-image-square" : "";
            coverSquare = (
                <div className="left-div">
                    <div className="blank-image-square" id={errorId}></div>
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
                    {this.showImageError()}
                </div>
            );
        }
    
        return (
            <div className="upload-details-page">
                <div className="upload-details-box">
                    {this.state.loading && this.props.formType !== "edit" && 
                        <div className="loading-group">
                            <p className="loading-text">Uploading...</p>
                            <img className="loading-icon" src={window.loading_icon} />
                        </div>
                    }
                    <div className="upload-header-wrapper">
                        <h2 className="upload-details-header">Basic info</h2>
                    </div>
                    <form className="upload-details-form" >
                        <div className="upload-details-content">
                            {coverSquare}
                            <div className="right-div">
                                <div className="title-div">
                                    <label className="title-input-label">Title *
                                        <br></br>
                                        {this.state.title.length > 0 ?
                                            <input
                                                className="title-input"
                                                type="text"
                                                value={this.state.title}
                                                onChange={(e) => this.setState({ title: e.currentTarget.value })}
                                                onKeyPress={this.preventEnter}
                                                autoFocus
                                            />
                                            :
                                            <div className="errored-title-group">
                                                <input
                                                    className="title-input"
                                                    type="text"
                                                    value={this.state.title}
                                                    onChange={(e) => this.setState({ title: e.currentTarget.value })}
                                                    onKeyPress={this.preventEnter}
                                                    autoFocus
                                                />
                                                <p className="title-error">Enter a title.</p>
                                            </div>
                                        }
                                    </label>
                                </div>
                                <div className="description-div">
                                    <label className="description-input-label">Description
                                        <br></br>
                                        <textarea className="description-input"
                                            value={this.state.description}
                                            rows="10"
                                            onChange={(e) => this.setState({ description: e.currentTarget.value })}
                                            onKeyPress={this.preventEnter}
                                        ></textarea>
                                    </label>
                                </div>
                                <div className="privacy-div" onClick={e => e.stopPropagation()}>
                                    <label>Privacy:</label>
                                    {this.state.private ? 
                                    <>
                                        <label className="public-label">
                                            <input
                                                type="radio"
                                                name="privacy"
                                                onClick={() => this.setState({private: false})}
                                            />
                                            Public
                                        </label>
                                        <label className="private-label">
                                            <input
                                                defaultChecked
                                                type="radio"
                                                name="privacy"
                                                onClick={() => this.setState({private: true})}
                                            />
                                            Private
                                        </label>
                                    </>
                                    :
                                    <>
                                        <label className="public-label">
                                            <input
                                                defaultChecked
                                                type="radio"
                                                name="privacy"
                                                onClick={() => this.setState({ private: false })}
                                            />
                                            Public
                                        </label>
                                        <label className="private-label">
                                            <input
                                                type="radio"
                                                name="privacy"
                                                onClick={() => this.setState({ private: true })}
                                            />
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
                                <button className="cancel-upload-btn" onClick={() => {
                                    this.props.setErrors([]);
                                    this.setState({
                                        photoFile: null,
                                        photoUrl: ""
                                    }, this.props.returnToPromptPage);
                                }}>Cancel</button>
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