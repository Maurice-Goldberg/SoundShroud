import React from 'react';
import UploadDetails from './upload_details';
const mm = require('music-metadata-browser');

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      private: false,
      trackFile: null,
      errorMsg: false,
      formPage: "prompt page",
      trackName: "",
      photoUrl: "",
      photoFile: null
    };

    this.uploadPromptPage = this.uploadPromptPage.bind(this);
    this.handlePromptSubmit = this.handlePromptSubmit.bind(this);
    this.handleTrackFile = this.handleTrackFile.bind(this);
    this.updateRadioInput = this.updateRadioInput.bind(this);
    this.returnToPromptPage = this.returnToPromptPage.bind(this);
  }

  handleTrackFile(e) {
    e.preventDefault();

    this.setState({
      trackFile: e.currentTarget.files[0],
    });
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

  handlePromptSubmit(e) {
    e.preventDefault();
    let filesArr = e.currentTarget.files;
    if (filesArr.length > 1 || !(filesArr[0].type === "audio/mpeg" || filesArr[0].type === "audio/mp3")) {
      this.setState({errorMsg: true});
    } else {
      let file = e.currentTarget.files[0];
      let formattedTrackname = file.name.split(".")[0].split("-").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");

      let that = this;

      //extracting picture and title from file if it's there
      mm.parseBlob(file).then(metadata => {
        if(metadata.common.picture) {
          const { data, type } = metadata.common.picture[0];
          const byteArray = new Uint8Array(data);
          const photoBlob = new Blob([byteArray], { type });
          const photoUrl = URL.createObjectURL(photoBlob);
          that.setState({
            photoFile: photoBlob,
            photoUrl: photoUrl,
            trackName: tag.tags.title
          }, () => {
            that.setState({
              trackFile: file,
              formPage: "details page"
            }, () => {
              that.setState({
                photoUrl: "",
                photoFile: null,
              });
            });
          });
        } else {
          that.setState({
            trackName: formattedTrackname,
          }, () => {
            that.setState({
              trackFile: file,
              formPage: "details page"
            });
          });
        }
      });
    }
  }

  updateRadioInput(e) {
    if(e.currentTarget.value === "Public") {
      this.setState({ private: false });
    } else {
      this.setState({ private: true });
    }
  }

  returnToPromptPage() {
    this.setState({ formPage: "prompt page" });
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
                    onChange={this.handlePromptSubmit}
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

  render() {
    switch(this.state.formPage) {
      case "prompt page":
        return this.uploadPromptPage();
      case "details page":
        return <UploadDetails
                trackFile={this.state.trackFile}
                private={this.state.private}
                currentUserId={this.props.currentUserId}
                uploadTrack={this.props.uploadTrack}
                trackName={this.state.trackName}
                returnToPromptPage={this.returnToPromptPage}
                photoUrl={this.state.photoUrl}
                photoFile={this.state.photoFile}
                closeModal={this.props.closeModal}
              />;
      default:
        return null;
    }
  }
}

export default Upload;
