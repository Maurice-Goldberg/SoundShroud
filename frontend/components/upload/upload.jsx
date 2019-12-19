import React from 'react';
import ModalUpload from './modal_upload';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      private: false,
      photoFile: null,
      trackFile: null,

      formPage: "prompt page"
    };
    this.handleFirstSubmit = this.handleFirstSubmit.bind(this);
    this.handleSecondSubmit = this.handleSecondSubmit.bind(this);
    this.uploadPromptPage = this.uploadPromptPage.bind(this);
    this.uploadDetailsPage = this.uploadDetailsPage.bind(this);
    this.handleTrackFile = this.handleTrackFile.bind(this);
    this.handlePhotoFile = this.handlePhotoFile.bind(this);
  }

  handleTrackFile(e) {
    this.setState({trackFile: e.currentTarget.files[0]});
  }

  handlePhotoFile(e) {
    this.setState({photoFile: e.currentTarget.files[0]});
  }

  handleFirstSubmit(e) {
    e.preventDefault();
    //check to make sure it's a valid music file
        //if no, return error message
    //else
    this.setState({
      formPage: "details page"
    });
  }

  handleSecondSubmit(e) {
    e.preventDefault();
    const formData = newFormData();
    formData.append('track[title]', this.state.title);
    formData.append('track[description]', this.state.description);
    formData.append('track[private]', this.state.private);
    formData.append('track[photo]', this.state.photoFile);
    formData.append('track[track_file]', this.state.trackFile);
    this.props.uploadTrack(formData);
  }

  uploadPromptPage() {
    return (
      <>
        {this.props.modal ?
          <ModalUpload handleTrackFile={this.handleTrackFile} closeModal={this.props.closeModal}/>
          : <></>}

        <div className="uploadPromptPage" onDragOver={this.props.openUploadModal()} onDragEnd={this.props.closeModal()}>
          <div className="first-form-box">
            <form onSubmit={this.handleFirstSubmit}>
              <h2>Drag and drop your track here</h2>
              <input className="track-upload-btn"
                onChange={this.handleTrackFile}
                value={this.state.trackFile}
              >or choose a file to upload</input>
              <div className="privacy-radio-inputs">
                <p>Privacy:</p>
                <input type="radio" value="Public" defaultChecked onClick={this.setState({private: false})}></input>
                <input type="radio" value="Private" onClick={this.setState({private: true})}></input>
                <p className="soundfile-disclaimer">
                  We recommend uploading a lossless HD file format such as FLAC, WAV, ALAC, or AIFF for highest sound quality.
                </p>
              </div>
            </form>
          </div>
        </div>
      </>
    )
  }

  uploadDetailsPage() {
    let coverSquare;
    if(this.state.photoUrl) {
      coverSquare = <img className="cover-art" />
    } else {
      coverSquare = (
        <>
          <div className="black-image-square"></div>
          <input className="image-input" onChange={this.handlePhotoFile}/>
        </>
      );
    }

    return (
      <div className="upload-details-page">
        <div className="upload-details-box">
          <form onSubmit={this.handleSecondSubmit}>
            {coverSquare}
            <label>Title *
              <input type="text"/>
            </label>
            <label>Description
              <input type="textarea"/>
            </label>
            <label>Privacy:
              {/* HOW DO I PERSIST THE CHOICE OF PRIVATE VS PUBLIC FROM THE FIRST FORM?? */}
              <input type="radio" value="Public" onClick={this.setState({ private: false })}></input>
              <input type="radio" value="Private" onClick={this.setState({ private: true })}></input>
            </label>
          </form>
          <div className="upload-bottom-bar">
            <p>* Required field</p>
            <button className="cancel-upload-btn">Cancel</button>
            <button className="save-upload-btn">Save</button>
          </div>
        </div>
      </div>
    )
  }

  render() {
    switch(this.state.formPage) {
      case "prompt page":
        return this.uploadPromptPage();
      case "details page":
        return this.uploadDetailsPage();
      default:
        return null;
    }
  }
}

export default Upload;