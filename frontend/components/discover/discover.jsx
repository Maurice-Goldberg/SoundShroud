import React from 'react';
import {Link} from 'react-router-dom';
import TrackPlayPauseContainer from '../tracks/track_play_pause_container';
import NavBarContainer from '../nav_bar/nav_bar_container';
import { findTrackArtist } from '../../reducers/selectors';

class Discover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredTrack: "",
      selectedTrackId: "",
      selectedTrackPhotoUrl: "",
      selectedTrackTrackUrl: "",
      selectedTrack: "",
      loading: true
    }

    this.handleClick = this.handleClick.bind(this);
    this.selectVertical = this.selectVertical.bind(this);
  }

  selectVertical() {
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
      clearInterval(this.props.intervalId);
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
    this.props.fetchUsers().then(
      () => {
        this.props.fetchTracks().then(
        () => {
            if(this.props.trackPlaying.playing) {
              this.setState({
                hoveredTrack: this.props.track.title,
                selectedTrackId: this.props.trackPlaying.track_id,
                selectedTrackPhotoUrl: this.props.track.photoUrl,
                selectedTrackTrackUrl: this.props.track.trackUrl,
                selectedTrack: this.props.track
              });
            } else {
              this.setState({
                hoveredTrack: "",
                selectedTrackId: null,
                selectedTrackPhotoUrl: this.props.ocean_of_tears.photoUrl,
                selectedTrackTrackUrl: this.props.ocean_of_tears.trackUrl,
                selectedTrack: this.props.ocean_of_tears
              });
            }
          }
        );
      }
    )
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
            that_world,

            opn,
            galen_tipton,
            hunnid_gecs
          } = this.props;

    if (!chrome_country) {
      
      return null;
    }
    
    let trackArr = [
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
    ];

    let scrollbarTracks = trackArr.map((track) => {
      if(track.id === this.props.trackPlaying.track_id) {
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
          <Link to={`/tracks/${flamboyant.id}`} >
            <p id="track-title">Flamboyant</p>
          </Link>
          
          <Link to={`/users/${flamboyant.account_id}`}>
            <p>Dorian Electra</p>
          </Link>
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
          <Link to={`/tracks/${that_world.id}`} >
            <p id="track-title">That World</p>
          </Link>

          <Link to={`/users/${that_world.account_id}`}>
            <p>Tim Hecker</p>
          </Link>
          
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
          <Link to={`/tracks/${last_bloom.id}`} >
            <p id="track-title">Last Bloom</p>
          </Link>
          <Link to={`/users/${last_bloom.account_id}`}>
            <p>Floating Points</p>
          </Link>
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
          <Link to={`/tracks/${hand_crushed_by_a_mallet.id}`} >
            <p id="track-title">Hand Crushed By A Mallet</p>
          </Link>
          <Link to={`/users/${hand_crushed_by_a_mallet.account_id}`}>
            <p>100 Gecs</p>
          </Link>

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
          <Link to={`/tracks/${gone.id}`} >
            <p id="track-title">Gone</p>
          </Link>
          <Link to={`/users/${gone.account_id}`}>
            <p>Charli XCX</p>
          </Link>

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
          <Link to={`/tracks/${touch.id}`} >
            <p id="track-title">touch</p>
          </Link>

          <Link to={`/users/${touch.account_id}`}>
            <p>Galen Tipton</p>
          </Link>
        </div>
        <div id="track-container">
          <img src={ocean_of_tears.photoUrl} />
          <Link id="play-pause-wrapper" to={`/tracks/${ocean_of_tears.id}`} onMouseEnter={() => this.setState({ hoveredTrack: "Ocean of Tears1" })} onMouseLeave={() => this.setState({ hoveredTrack: "" })}>
          </Link>
          {this.state.hoveredTrack === "Ocean of Tears1" &&
            <div onMouseEnter={() => this.setState({ hoveredTrack: "Ocean of Tears1" })}>
              <TrackPlayPauseContainer track={ocean_of_tears} />
            </div>
          }
          <Link to={`/tracks/${ocean_of_tears.id}`} >
            <p id="track-title">Ocean of Tears</p>
          </Link>

          <Link to={`/users/${ocean_of_tears.account_id}`}>
            <p>Caroline Polachek</p>
          </Link>
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
          <Link to={`/tracks/${stripped.id}`} >
            <p id="track-title">Stripped</p>
          </Link>
          <Link to={`/users/${stripped.account_id}`}>
            <p>Depeche Mode</p>
          </Link>
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
          <Link to={`/tracks/${control.id}`} >
            <p id="track-title">Control</p>
          </Link>

          <Link to={`/users/${control.account_id}`}>
            <p>Janet Jackson</p>
          </Link>
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
          <Link to={`/tracks/${running_up_that_hill.id}`} >
            <p id="track-title">Running Up That Hill</p>
          </Link>
          <Link to={`/users/${running_up_that_hill.account_id}`}>
            <p>Kate Bush</p>
          </Link>

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
          <Link to={`/tracks/${mercy_street.id}`} >
            <p id="track-title">Mercy Street</p>
          </Link>

          <Link to={`/users/${mercy_street.account_id}`}>
            <p>Peter Gabriel</p>
          </Link>
        </div>
      </>
    )

    let imgClass = "playlist-cover-loading"
    if(!this.state.loading) {
      imgClass = "playlist-cover-img";
    }

    

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
                    {this.state.loading && <img className="loading-icon" src={window.loading_icon} />}
                    <img src={this.state.selectedTrackPhotoUrl} className={imgClass} onLoad={() => this.setState({ loading: false })}/>
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
            <div className="sidebar-panel-wrapper">
              <div className="sidebar-panel">
                <div className="top-section">
                  <img src={window.people}/>
                  <h3>Artists to check out</h3>
                </div>
                <div className="artists-to-check-out">
                  <div className="artist">
                    <Link to={`/users/${hunnid_gecs.id}`}>
                      <img className="artist-photo" src={hunnid_gecs.photoUrl} />
                    </Link>
                    
                    <div className="name-and-track-count">
                      <Link to={`/users/${hunnid_gecs.id}`}>
                        <p className="name">100 Gecs</p>
                      </Link>
                      <div className="track-count">
                        <img className="waveform-img" src={window.waveform}/>
                        <p>{hunnid_gecs.track_ids.length}</p>
                      </div>
                    </div>
                  </div>
                  <div className="artist">
                    <Link to={`/users/${opn.id}`}>
                      <img className="artist-photo" src={ opn.photoUrl } />
                    </Link>
                    <div className="name-and-track-count">
                      <Link to={`/users/${opn.id}`}>
                        <p className="name">Oneohtrix Point Never</p>
                      </Link>
                      <div className="track-count">
                        <img className="waveform-img" src={window.waveform}/>
                        <p>{opn.track_ids.length}</p>
                      </div>
                    </div>
                  </div>
                  <div className="artist">
                    <Link to={`/users/${galen_tipton.id}`}>
                      <img className="artist-photo" src={ galen_tipton.photoUrl } />
                    </Link>
                    <div className="name-and-track-count">
                      <Link to={`/users/${galen_tipton.id}`}>
                        <p className="name">Galen Tipton</p>
                      </Link>
                      <div className="track-count">
                        <img className="waveform-img" src={window.waveform}/>
                        <p>{galen_tipton.track_ids.length}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>`
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Discover;