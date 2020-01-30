import React from 'react';
import {Link} from 'react-router-dom';
import TrackPlayPauseContainer from '../tracks/track_play_pause_container';
import NavBarContainer from '../nav_bar/nav_bar_container';

class Discover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredTrack: "",
      selectedTrackId: "",
      selectedTrackPhotoUrl: "",
      selectedTrackTrackUrl: "",
      selectedTrack: ""
    }

    this.handleClick = this.handleClick.bind(this);
    this.selectVertical = this.selectVertical.bind(this);
  }

  selectVertical() {
    debugger
    this.setState({ selectedTrackId: this.state.selectedTrack.id });
  }

  handleClick(track) {
    let audioPlayer = document.getElementById("audio-player");
    this.setState({
      selectedTrackId: track.id,
      selectedTrackPhotoUrl: track.photoUrl,
      selectedTrackTrackUrl: track.trackUrl,
      selectedTrack: track
    }, () => {
      this.props.receiveCurrentTrack(track);
      this.props.playTrack();
      audioPlayer.setAttribute("autoPlay", "");
      audioPlayer.play();
    });
  }

  revealPlayPauseBtn(id) {
    document.getElementById(id).display = "initial";
    console.log(document.getElementById(id));
  }
  
  hidePlayPauseBtn(id) {
    document.getElementById(id).display = "none";
    console.log(document.getElementById(id));
  }

  componentDidMount() {
    this.props.fetchTracks().then(
      () => {
        this.setState({
          hoveredTrack: "",
          selectedTrackId: null,
          selectedTrackPhotoUrl: this.props.chrome_country.photoUrl,
          selectedTrackTrackUrl: this.props.chrome_country.trackUrl,
          selectedTrack: this.props.chrome_country
        });
      }
    );
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
    
    let trackArr = [
      chrome_country,
      ocean_of_tears,
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
    ];

    let scrollbarTracks = trackArr.map((track) => {
      if(track.id === this.state.selectedTrackId) {
        return (
          <li key={track.id} id="selected"><p className="artist">{track.artist}</p> - <p className="track">{track.title}</p></li>
        );
      } else {
        return (
          <li key={track.id} onClick={() => this.handleClick(track)}><p className="artist">{track.artist}</p> - <p className="track">{track.title}</p></li>
        )
      }
    });

    let newTracks = (
      <>
        <div id="track-container">
          <img src={flamboyant.photoUrl} />
          <Link id="play-pause-wrapper" to={`/tracks/${flamboyant.id}`} onMouseEnter={() => this.setState({hoveredTrack: "Flamboyant"})} onMouseLeave={() => this.setState({hoveredTrack: ""})}>
          </Link>
          {this.state.hoveredTrack === "Flamboyant" && 
            <div onMouseEnter={() => this.setState({ hoveredTrack: "Flamboyant" })}>
              <TrackPlayPauseContainer track={flamboyant} />
            </div>
          }
          <p id="track-title">Flamboyant</p>
          <p>Dorian Electra</p>
        </div>
        <div id="track-container">
          <img src={ocean_of_tears.photoUrl} />
          <Link id="play-pause-wrapper" to={`/tracks/${ocean_of_tears.id}`} onMouseEnter={() => this.setState({hoveredTrack: "Ocean of Tears1"})} onMouseLeave={() => this.setState({hoveredTrack: ""})}>
          </Link>
          {this.state.hoveredTrack === "Ocean of Tears1" && 
            <div onMouseEnter={() => this.setState({ hoveredTrack: "Ocean of Tears1" })}>
              <TrackPlayPauseContainer track={ocean_of_tears} />
            </div>
          }
          <p id="track-title">Ocean of Tears</p>
          <p>Caroline Polachek</p>
        </div>
        <div id="track-container">
          <img src={that_world.photoUrl} />
          <Link id="play-pause-wrapper" to={`/tracks/${that_world.id}`} onMouseEnter={() => this.setState({hoveredTrack: "That World"})} onMouseLeave={() => this.setState({hoveredTrack: ""})}>
          </Link>
                    {this.state.hoveredTrack === "That World" && 
            <div onMouseEnter={() => this.setState({ hoveredTrack: "That World" })}>
              <TrackPlayPauseContainer track={that_world} />
            </div>
          }
          <p id="track-title">That World</p>
          <p>Tim Hecker</p>
        </div>
        <div id="track-container">
          <img src={last_bloom.photoUrl} />
          <Link id="play-pause-wrapper" to={`/tracks/${last_bloom.id}`} onMouseEnter={() => this.setState({hoveredTrack: "Last Bloom"})} onMouseLeave={() => this.setState({hoveredTrack: ""})}>
          </Link>
                    {this.state.hoveredTrack === "Last Bloom" && 
            <div onMouseEnter={() => this.setState({ hoveredTrack: "Last Bloom" })}>
              <TrackPlayPauseContainer track={last_bloom} />
            </div>
          }
          <p id="track-title">Last Bloom</p>
          <p>Floating Points</p>
        </div>
        <div id="track-container">
          <img src={hand_crushed_by_a_mallet.photoUrl} />
          <Link id="play-pause-wrapper" to={`/tracks/${hand_crushed_by_a_mallet.id}`} onMouseEnter={() => this.setState({hoveredTrack: "Hand Crushed By a Mallet"})} onMouseLeave={() => this.setState({hoveredTrack: ""})}>
          </Link>
                    {this.state.hoveredTrack === "Hand Crushed By a Mallet" && 
            <div onMouseEnter={() => this.setState({ hoveredTrack: "Hand Crushed By a Mallet" })}>
              <TrackPlayPauseContainer track={hand_crushed_by_a_mallet} />
            </div>
          }
          <p id="track-title">Hand Crushed By A Mallet</p>
          <p>100 Gecs</p>
        </div>
        <div id="track-container">
          <img src={gone.photoUrl} />
          <Link id="play-pause-wrapper" to={`/tracks/${gone.id}`} onMouseEnter={() => this.setState({hoveredTrack: "Gone"})} onMouseLeave={() => this.setState({hoveredTrack: ""})}>
          </Link>
                    {this.state.hoveredTrack === "Gone" && 
            <div onMouseEnter={() => this.setState({ hoveredTrack: "Gone" })}>
              <TrackPlayPauseContainer track={gone} />
            </div>
          }
          <p id="track-title">Gone</p>
          <p>Charli XCX</p>
        </div>
        <div id="track-container">
          <img src={touch.photoUrl} />
          <Link id="play-pause-wrapper" to={`/tracks/${touch.id}`} onMouseEnter={() => this.setState({hoveredTrack: "Touch"})} onMouseLeave={() => this.setState({hoveredTrack: ""})}>
          </Link>
                    {this.state.hoveredTrack === "Touch" && 
            <div onMouseEnter={() => this.setState({ hoveredTrack: "Touch" })}>
              <TrackPlayPauseContainer track={touch} />
            </div>
          }
          <p id="track-title">touch</p>
          <p>Galen Tipton</p>
        </div>
      </>
    );

    let oldTracks = (
      <>
        <div id="track-container">
          <img src={stripped.photoUrl} />
          <Link id="play-pause-wrapper" to={`/tracks/${stripped.id}`} onMouseEnter={() => this.setState({hoveredTrack: "Stripped"})} onMouseLeave={() => this.setState({hoveredTrack: ""})}>
          </Link>
          {this.state.hoveredTrack === "Stripped" && 
            <div onMouseEnter={() => this.setState({ hoveredTrack: "Stripped" })}>
              <TrackPlayPauseContainer track={stripped} />
            </div>
          }
          <p id="track-title">Stripped</p>
          <p>Depeche Mode</p>
        </div>
        <div id="track-container">
          <img src={control.photoUrl} />
          <Link id="play-pause-wrapper" to={`/tracks/${control.id}`} onMouseEnter={() => this.setState({hoveredTrack: "Control"})} onMouseLeave={() => this.setState({hoveredTrack: ""})}>
          </Link>
          {this.state.hoveredTrack === "Control" && 
            <div onMouseEnter={() => this.setState({ hoveredTrack: "Control" })}>
              <TrackPlayPauseContainer track={control} />
            </div>
          }
          <p id="track-title">Control</p>
          <p>Janet Jackson</p>
        </div>
        <div id="track-container">
          <img src={running_up_that_hill.photoUrl} />
          <Link id="play-pause-wrapper" to={`/tracks/${running_up_that_hill.id}`} onMouseEnter={() => this.setState({hoveredTrack: "Running Up That Hill"})} onMouseLeave={() => this.setState({hoveredTrack: ""})}>
          </Link>
          {this.state.hoveredTrack === "Running Up That Hill" && 
            <div onMouseEnter={() => this.setState({ hoveredTrack: "Running Up That Hill" })}>
              <TrackPlayPauseContainer track={running_up_that_hill} />
            </div>
          }
          <p id="track-title">Running Up That Hill</p>
          <p>Kate Bush</p>
        </div>
        <div id="track-container">
          <img src={mercy_street.photoUrl} />
          <Link id="play-pause-wrapper" to={`/tracks/${mercy_street.id}`} onMouseEnter={() => this.setState({hoveredTrack: "Mercy Street"})} onMouseLeave={() => this.setState({hoveredTrack: ""})}>
          </Link>
          {this.state.hoveredTrack === "Mercy Street" && 
            <div onMouseEnter={() => this.setState({ hoveredTrack: "Mercy Street" })}>
              <TrackPlayPauseContainer track={mercy_street} />
            </div>
          }
          <p id="track-title">Mercy Street</p>
          <p>Peter Gabriel</p>
        </div>
      </>
    )

    return (
      <>
        <NavBarContainer />
        <div className="discover-container">
          <div className="discover-wrapper">
            <div className="listening-panel">
              <div className="soundshroud-weekly">
                <h2 className="discover-panel-header">SoundShroud Weekly</h2>
                <h3 className="discover-panel-subtitle">All of SoundShroud. Just for you.</h3>
                <div className="tracks-panel">
                  <div className="playlist-cover">
                    <img src={this.state.selectedTrackPhotoUrl} className="playlist-cover-img" />
                    <Link id="play-pause-wrapper" to={`/tracks/${this.state.selectedTrack.id}`} onMouseEnter={() => this.setState({ hoveredTrack: this.state.selectedTrack.title })} onMouseLeave={() => this.setState({ hoveredTrack: "" })}>
                    </Link>
                    {this.state.hoveredTrack === this.state.selectedTrack.title &&
                      <div onMouseEnter={() => this.setState({ hoveredTrack: this.state.selectedTrack.title })}>
                          <TrackPlayPauseContainer track={this.state.selectedTrack} selectVertical={this.selectVertical}/>
                      </div>
                    }
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
              {/* <div className="best-of">
                <h2 className="discover-panel-header">Best of 2019</h2>
                <h3 className="discover-panel-subtitle">Our top SoundShroud 2019 picks.</h3>
                <div className="tracks-panel-wrapper">
                  <div className="tracks-panel">
                    <div className="playlist-cover">
                      <img src={ocean_of_tears.photoUrl} alt="Caroline Polachek" className="playlist-cover-img" />
                      <Link id="play-pause-wrapper" to={`/tracks/${ocean_of_tears.id}`} onMouseEnter={() => this.setState({ hoveredTrack: "Ocean of Tears2" })} onMouseLeave={() => this.setState({ hoveredTrack: "" })}>
                      </Link>
                      {this.state.hoveredTrack === "Ocean of Tears2" &&
                        <div onMouseEnter={() => this.setState({ hoveredTrack: "Ocean of Tears2" })}>
                          <TrackPlayPauseContainer track={ocean_of_tears} />
                        </div>
                      }
                    </div>
                    <ul className="tracks">{scrollbarTracks}</ul>
                  </div>
                </div>
              </div> */}
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
      </>
    );
  }
}

export default Discover;