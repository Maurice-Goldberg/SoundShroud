import React from 'react';
import { withRouter } from 'react-router';
import TrackPlayPause from '../tracks/track_play_pause';

class Discover extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.history.push('/discover');
    this.props.fetchTracks();
  }

  render() {
    const {
            ocean_of_tears,
            chrome_country,
            gone,
            control,
            stripped,
            flamboyant,
            last_bloom,
            touch,
            hand_crushed_by_a_mallet,
            mercy_street,
            running_up_that_hill,
            that_world
          } = this.props;

    if (!chrome_country) {
      return null;
    }

    let scrollbarTracks = (
      <>
        <li><p className="artist">Caroline Polachek</p> - <p className="track">Ocean of Tears</p></li>
        <li><p className="artist">Charli XCX</p> - <p className="track">Gone</p></li>
        <li><p className="artist">Galen Tipton</p> - <p className="track">touch</p></li>
        <li><p className="artist">Oneohtrix Point Never</p> - <p className="track">Chrome Country</p></li>
        <li><p className="artist">100 Gecs</p> - <p className="track">Hand Crushed By a Mallet</p></li>
        <li><p className="artist">Dorian Electra</p> - <p className="track">Flamboyant</p></li>
        <li><p className="artist">Tim Hecker</p> - <p className="track">That world</p></li>
        <li><p className="artist">Floating Points</p> - <p className="track">Last Bloom</p></li>
      </>
    )

    let newTracks = (
      <>
        <div id="track-container">
          <img src={flamboyant.photoUrl} />
          <TrackPlayPause track={flamboyant} />
          <p id="track-title">Flamboyant</p>
          <p>Dorian Electra</p>
        </div>
        <div id="track-container">
          <img src={ocean_of_tears.photoUrl} />
          <TrackPlayPause track={ocean_of_tears} />
          <p id="track-title">Ocean of Tears</p>
          <p>Caroline Polachek</p>
        </div>
        <div id="track-container">
          <img src={that_world.photoUrl} />
          <TrackPlayPause track={that_world} />
          <p id="track-title">That World</p>
          <p>Tim Hecker</p>
        </div>
        <div id="track-container">
          <img src={last_bloom.photoUrl} />
          <TrackPlayPause track={last_bloom} />
          <p id="track-title">Last Bloom</p>
          <p>Floating Points</p>
        </div>
        <div id="track-container">
          <img src={hand_crushed_by_a_mallet.photoUrl} />
          <TrackPlayPause track={hand_crushed_by_a_mallet} />
          <p id="track-title">Hand Crushed By A Mallet</p>
          <p>100 Gecs</p>
        </div>
        <div id="track-container">
          <img src={gone.photoUrl} />
          <TrackPlayPause track={gone} />
          <p id="track-title">Gone</p>
          <p>Charli XCX</p>
        </div>
        <div id="track-container">
          <img src={touch.photoUrl} />
          <TrackPlayPause track={touch} />
          <p id="track-title">touch</p>
          <p>Galen Tipton</p>
        </div>
      </>
    );

    let oldTracks = (
      <>
        <div id="track-container">
          <img src={stripped.photoUrl} />
          <TrackPlayPause track={stripped} />
          <p id="track-title">Stripped</p>
          <p>Depeche Mode</p>
        </div>
        <div id="track-container">
          <img src={control.photoUrl} />
          <TrackPlayPause track={control} />
          <p id="track-title">Control</p>
          <p>Janet Jackson</p>
        </div>
        <div id="track-container">
          <img src={running_up_that_hill.photoUrl} />
          <TrackPlayPause track={running_up_that_hill} />
          <p id="track-title">Running Up That Hill</p>
          <p>Kate Bush</p>
        </div>
        <div id="track-container">
          <img src={mercy_street.photoUrl} />
          <TrackPlayPause track={mercy_street} />
          <p id="track-title">Mercy Street</p>
          <p>Peter Gabriel</p>
        </div>
      </>
    )

    let carousel = (
      <div class="carousel-container">
        <h2>slider</h2>
        <div class="carousel my-carousel carousel--translate">
          <div class="carousel__controls">
            <label class="carousel__control carousel__control--backward" for="J"></label>
            <label class="carousel__control carousel__control--forward" for="G"></label>
          </div>
          <div class="carousel__controls">
            <label class="carousel__control carousel__control--backward" for="F"></label>
            <label class="carousel__control carousel__control--forward" for="H"></label>
          </div>
          <div class="carousel__controls">
            <label class="carousel__control carousel__control--backward" for="G"></label>
            <label class="carousel__control carousel__control--forward" for="I"></label>
          </div>
          <div class="carousel__controls">
            <label class="carousel__control carousel__control--backward" for="H"></label>
            <label class="carousel__control carousel__control--forward" for="J"></label>
          </div>
          <div class="carousel__controls">
            <label class="carousel__control carousel__control--backward" for="I"></label>
            <label class="carousel__control carousel__control--forward" for="F"></label>
          </div>
          <div class="carousel__track">
            <div id="track-container">
              <img src={flamboyant.photoUrl} />
              <TrackPlayPause track={flamboyant} />
              <p id="track-title">Flamboyant</p>
              <p>Dorian Electra</p>
            </div>
            <div id="track-container">
              <img src={ocean_of_tears.photoUrl} />
              <TrackPlayPause track={ocean_of_tears} />
              <p id="track-title">Ocean of Tears</p>
              <p>Caroline Polachek</p>
            </div>
            <div id="track-container">
              <img src={that_world.photoUrl} />
              <TrackPlayPause track={that_world} />
              <p id="track-title">That World</p>
              <p>Tim Hecker</p>
            </div>
            <div id="track-container">
              <img src={last_bloom.photoUrl} />
              <TrackPlayPause track={last_bloom} />
              <p id="track-title">Last Bloom</p>
              <p>Floating Points</p>
            </div>
            <div id="track-container">
              <img src={hand_crushed_by_a_mallet.photoUrl} />
              <TrackPlayPause track={hand_crushed_by_a_mallet} />
              <p id="track-title">Hand Crushed By A Mallet</p>
              <p>100 Gecs</p>
            </div>
            <div id="track-container">
              <img src={gone.photoUrl} />
              <TrackPlayPause track={gone} />
              <p id="track-title">Gone</p>
              <p>Charli XCX</p>
            </div>
            <div id="track-container">
              <img src={touch.photoUrl} />
              <TrackPlayPause track={touch} />
              <p id="track-title">touch</p>
              <p>Galen Tipton</p>
            </div>
          </div>
        </div>
      </div>
    )

    return (
      <div className="discover-container">
        <div className="discover-wrapper">
          <div className="listening-panel">
            <div className="best-of">
              <h2 className="discover-panel-header">Best of 2019</h2>
              <h3 className="discover-panel-subtitle">Our top SoundShroud 2019 picks.</h3>
              <div className="tracks-panel-wrapper">
                <div className="tracks-panel">
                  <div className="playlist-cover">
                    <img src={ocean_of_tears.photoUrl} alt="Caroline Polachek" className="playlist-cover-img"/>
                    <TrackPlayPause track={ocean_of_tears}/>
                  </div>
                  <ul className="tracks">{scrollbarTracks}</ul>
                </div>
              </div>
            </div>
            <div className="soundshroud-weekly">
              <h2 className="discover-panel-header">SoundShroud Weekly</h2>
              <h3 className="discover-panel-subtitle">All of SoundShroud. Just for you.</h3>
              <div className="tracks-panel">
                <div className="playlist-cover">
                  <img src={chrome_country.photoUrl} alt="Oneohtrix Point Never" className="playlist-cover-img" />
                  <TrackPlayPause track={chrome_country}/>
                </div>
                <ul className="tracks">{scrollbarTracks}</ul>
              </div>
            </div>
            <div className="new-music-now">
              <h2 className="discover-panel-header">New Music Now</h2>
              <h3 className="discover-panel-subtitle">The latest hits, updated all the time</h3>
              <div className="tracks-carousel">
                <ul className="tracks">
                  {newTracks}
                </ul>
              </div>
            </div>
            <div className="soundshroud-classics">
              <h2 className="discover-panel-header">SoundShroud Classics</h2>
              <h3 className="discover-panel-subtitle">The oldies never get old if they're good</h3>
              <div className="tracks-carousel">
                <ul className="tracks">
                  {oldTracks}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Discover);