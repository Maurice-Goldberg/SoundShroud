import React from 'react';
import Modal from '../session_forms/modal';
import TrackPlayPause from '../tracks/track_play_pause';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTracks();
  }

  render() {
    if(!this.props.chrome_country) {
      return null;
    }

    return (
      <div className="splash-div">
        <div className="top-border"></div>
        <nav className="nav-bar">
          <figure className="logo">
            <img id="logo-img" src={window.logo} />
            <h1 id="site-title">SOUNDSHROUD</h1>
          </figure>
          <div className="splash-modal-btns">
            <Modal />
          </div>
        </nav>
        <div className="splash-content">
          <div className="splash-panel">
            <div className="splash-panel-wrapper">
              <div className="splash-panel-carousel">
                <figure className="panel-1">
                  <img id="panel-img-1" src={window.charli_xcx}/>
                  <h2 className="carousel-text">SoundShroud: the future of Dark-mode Audio Streaming</h2>
                </figure>
                <figure className="panel-2">
                  <img id="panel-img-2" src={window.oneohtrix}/>
                  <h2 className="carousel-text">What's next in music is first on SoundShroud</h2>
                </figure>
                <figure className="panel-3">
                  <img id="panel-img-3" src={window.bjork} />
                  <h2 className="carousel-text">Discover more with SoundShroud Go+</h2>
                  <h2></h2>
                </figure>
                <figure className="panel-1">
                  <img id="panel-img-1" src={window.charli_xcx} />
                  <h2 className="carousel-text">SoundShroud: the future of Dark-mode Audio Streaming</h2>
                </figure>
                <figure className="panel-2">
                  <img id="panel-img-2" src={window.oneohtrix} />
                  <h2 className="carousel-text">What's next in music is first on SoundShroud</h2>
                </figure>
              </div>
            </div>
          </div>
            <div className="search-bar-row">
              <input id="search-bar" type="text"
              autoComplete="off"
              placeholder="Search bar coming soon..." />
            </div>
            <h1 id="banner-text">Hear what's trending for free in the SoundShroud community</h1>
            <div id="trending-tracks">
              <div id="track-container">
                <img src={this.props.flamboyant.photoUrl}/>
                <TrackPlayPause track={this.props.flamboyant}/>
              </div>
              <div id="track-container">
                <img src={this.props.chrome_country.photoUrl}/>
                <TrackPlayPause track={this.props.chrome_country}/>
              </div>
              <div id="track-container">
                <img src={this.props.ocean_of_tears.photoUrl}/>
                <TrackPlayPause track={this.props.ocean_of_tears}/>
              </div>
              <div id="track-container">
                <img src={this.props.stripped.photoUrl}/>
                <TrackPlayPause track={this.props.stripped}/>
              </div>
              <div id="track-container">
                <img src={this.props.last_bloom.photoUrl}/>
                <TrackPlayPause track={this.props.last_bloom}/>
              </div>
              <div id="track-container">
                <img src={this.props.hand_crushed_by_a_mallet.photoUrl}/>
                <TrackPlayPause track={this.props.hand_crushed_by_a_mallet}/>
              </div>
              <div id="track-container">
                <img src={this.props.running_up_that_hill.photoUrl}/>
                <TrackPlayPause track={this.props.running_up_that_hill}/>
              </div>
              <div id="track-container">
                <img src={this.props.mercy_street.photoUrl}/>
                <TrackPlayPause track={this.props.mercy_street}/>
              </div>
              <div id="track-container">
                <img src={this.props.that_world.photoUrl}/>
                <TrackPlayPause track={this.props.that_world}/>
              </div>
              <div id="track-container">
                <img src={this.props.control.photoUrl}/>
                <TrackPlayPause track={this.props.control}/>
              </div>
              <div id="track-container">
                <img src={this.props.gone.photoUrl}/>
                <TrackPlayPause track={this.props.gone}/>
              </div>
              <div id="track-container">
                <img src={this.props.touch.photoUrl}/>
                <TrackPlayPause track={this.props.touch}/>
              </div>
            </div>
            <div id="splash-footer">
              <h2 id="thank-you-text">Thanks for listening. Now join in.</h2>
              <h3 id="thank-you-subheader">Save tracks, follow artists, and build playlists. All for free.</h3>
              <div id="sign-in-footer">
                <p id="small-text">Already have an account?</p>
                 <Modal />
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Splash;