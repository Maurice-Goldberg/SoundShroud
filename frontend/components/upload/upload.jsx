import React from 'react';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      private: false,
      photoFile: null,
      trackFile: null,
      errorMsg: false,
      formPage: "prompt page"
    };
    this.handleFirstFileUpload = this.handleFirstFileUpload.bind(this);
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

  //to be used once I can dynamically generate audio tags based on file type
  fileTypeChecker(file) {
    let allowableFileStrs = ["audio/mp3", "audio/wav", "audio/flac", "audio/alac", "audio/aiff", "audio/ogg", "audio/mp2", "audio/aac", "audio/amr", "audio/wma"];
    allowableFileStrs.forEach((fileType) => {
      if(file.type === fileType) {
        return true;
      }
    });
    return false;
  }

  handleFirstFileUpload(e) {
    e.preventDefault();
    let filesArr = e.currentTarget.files;
    if (filesArr.length > 1 || !(filesArr[0].type === "audio/mpeg" || filesArr[0].type === "audio/mp3")) {
      this.setState({errorMsg: true});
    } else {
      this.setState({
        trackFile: e.currentTarget.files[0],
        formPage: "details page"
      });
    }
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

  handleRadioInput(e) {
    if(e.currentTarget.value === "Public") {
      this.setState({ private: false });
    } else {
      this.setState({ private: true });
    }
  }

  uploadPromptPage() {
    let errorMsg = (<input className="error-msg"
      readOnly
      autoFocus={true}
      value="This file type is not supported."
      type="text"
      onBlur={() => this.setState({ errorMsg: null })}
      onClick={() => this.setState({ errorMsg: null })}
      />);

    return (
      <>
        {this.state.errorMsg &&
          errorMsg}
        <div className="upload-prompt-page">
          <div className="first-form-box">
            <form className="first-form">
              <div className="file-upload-group">
                <h2 className="upload-prompt-header">Upload your track here</h2>
                <label className="upload-btn-text">Choose a track to upload
                  <input className="track-upload-btn"
                    onChange={this.handleFirstFileUpload}
                    type="file"
                  />
                </label>
              </div>
              <div className="privacy-radio-inputs">
                <p>Privacy:</p>
                <label>
                  <input type="radio" name="privacy" value="Public" defaultChecked onClick={this.updateRadioInput}/>
                  Public
                </label>
                <label>
                  <input type="radio" name="privacy" value="Private" onClick={this.updateRadioInput}/>
                  Private
                </label>
              </div>
              <p className="soundfile-disclaimer">
                We recommend uploading a lossless HD file format such as FLAC, WAV, ALAC, or AIFF for highest sound quality.
              </p>
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
              <input type="radio" name="privacy" value="Public" onClick={this.updateRadioInput}/>
              <input type="radio" name="privacy" value="Private" onClick={this.updateRadioInput}/>
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