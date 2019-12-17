import React from 'react';
import { withRouter } from 'react-router';

class Discover extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.history.push('/discover');
  }

  render() {
    let placeholderTracks = (
      <>
        <li><p className="artist">Caroline Polachek</p> - <p className="track">Ocean of Tears</p></li>
        <li><p className="artist">Charli XCX</p> - <p className="track">Gone</p></li>
        <li><p className="artist">Galen Tipton</p> - <p className="track">touch</p></li>
        <li><p className="artist">Oneohtrix Point Never</p> - <p className="track">The Ballad of Howie Bling</p></li>
        <li><p className="artist">100 Gecs</p> - <p className="track">Money Machine</p></li>
        <li><p className="artist">Dorian Electra</p> - <p className="track">Flamboyant</p></li>
        <li><p className="artist">Tim Hecker</p> - <p className="track">That world</p></li>
        <li><p className="artist">Floating Points</p> - <p className="track">Last Bloom</p></li>
      </>
    );

    return (
      <div className="discover-container">
        <div className="discover-wrapper">
          <div className="listening-panel">
            <div className="best-of">
              <h2 className="discover-panel-header">Best of 2019</h2>
              <h3 className="discover-panel-subtitle">Our top SoundShroud 2019 picks.</h3>
              <div className="tracks-panel-wrapper">
                <div className="tracks-panel">
                  <div className="playlist-cover"></div>
                  <ul className="tracks">{placeholderTracks}</ul>
                </div>
              </div>
            </div>
            <div className="soundshroud-weekly">
              <h2 className="discover-panel-header">SoundShroud Weekly</h2>
              <h3 className="discover-panel-subtitle">All of SoundShroud. Just for you.</h3>
              <div className="tracks-panel">
                <div className="playlist-cover"></div>
                <ul className="tracks">{placeholderTracks}</ul>
              </div>
            </div>
            <div className="new-music-now">
              <h2 className="discover-panel-header">New Music Now</h2>
              <h3 className="discover-panel-subtitle">The latest hits, updated all the time</h3>
              <div className="tracks-panel"></div>
            </div>
            <div className="artists-you-should-know">
              <h2 className="discover-panel-header">Artists You Should Know</h2>
              <h3 className="discover-panel-subtitle">Top tracks from artists similar to Oneohtrix Point Never</h3>
              <div className="tracks-panel"></div>
            </div>
          </div>
          {this.props.currentUserId &&
          <div className="side-panel">
            <div className="who-to-follow-panel">
              <h3 className="side-panel-header">Who to follow</h3>
              <div className="s-p-follow-list"></div>
            </div>
            <div className="likes-panel">
              <h3 className="side-panel-header">109 likes</h3>
              <div className="s-p-track-list"></div>
            </div>
            <div className="listening-history-panel">
              <h3 className="side-panel-header">Listening history</h3>
              <div className="s-p-track-list"></div>
            </div>
          </div>}
        </div>
      </div>
    );
  }
}

export default withRouter(Discover);