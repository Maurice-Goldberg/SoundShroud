import React from 'react';
import {withRouter} from 'react-router';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      private: false,
      photoFile: null,
      trackFile: null,
      photoUrl: null,
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
    e.preventDefault();
    this.setState({trackFile: e.currentTarget.files[0]});
  }

  handlePhotoFile(e) {
    e.preventDefault();
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () =>  {
      this.setState({photoFile: file, photoUrl: fileReader.result });
    };
    if(file) {
      fileReader.readAsDataURL(file);
    }
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
    const formData = new FormData();
    formData.append('track[title]', this.state.title);
    formData.append('track[description]', this.state.description);
    formData.append('track[private]', this.state.private);
    formData.append('track[photo]', this.state.photoFile);
    formData.append('track[track_file]', this.state.trackFile);
    formData.append('track[account_id]', this.props.currentUserId);
    this.props.uploadTrack(formData).then(
      ({trackResponse}) => this.props.history.push(`/tracks/${trackResponse.track.id}`)
    );
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
      coverSquare = 
        (<div className="left-div">
          <img className="cover-art" src={this.state.photoUrl}/>
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
                <img className="camera-png" src={window.camera}/>
                <input className="image-input" type="file" accept="image/jpeg,image/pjpeg,image/gif,image/png" onChange={this.handlePhotoFile}/>
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
          <form className="upload-details-form">
            <div className="upload-details-content">
              {coverSquare}
              <div className="right-div">
                <div className="title-div">
                  <label className="title-input-label">Title *
                    <br></br>
                    <input className="title-input"
                      type="text"
                      onChange={(e) => this.setState({title: e.currentTarget.value })}/>
                  </label>
                </div>
                <div className="description-div">
                  <label className="description-input-label">Description
                    <br></br>
                    <textarea className="description-input"
                      rows="10"
                      onChange={(e) => this.setState({description: e.currentTarget.value })}></textarea>
                  </label>
                </div>
                <div className="privacy-div">
                  <label>Privacy:
                  </label>
                    {/* HOW DO I PERSIST THE CHOICE OF PRIVATE VS PUBLIC FROM THE FIRST FORM?? */}
                    <label className="public-label">
                      <input type="radio" name="privacy" value={false} onClick={this.updateRadioInput}/>
                      Public
                    </label>
                    <label className="private-label">
                      <input type="radio" name="privacy" value={true} onClick={this.updateRadioInput}/>
                      Private
                    </label>
                </div>
              </div>
            </div>
          </form>
          <div className="upload-bottom-bar">
            <p>* Required field</p>
            <div className="second-upload-btns">
              <button className="cancel-upload-btn" onClick={() => this.setState({formPage: "prompt page"})}>Cancel</button>
              <button className="save-upload-btn" onClick={this.handleSecondSubmit}>Save</button>
            </div>
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

export default withRouter(Upload);