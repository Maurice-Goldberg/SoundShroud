import {connect} from 'react-redux';
import Discover from './discover';
import {fetchTracks} from '../../actions/track_actions';
import {fetchUsers} from '../../actions/user_actions';
import {findTrackByTitle, findTrackArtist } from '../../reducers/selectors';
import {receiveCurrentTrack, playTrack} from '../../actions/track_playing_actions';

const mapStateToProps = (state, ownProps) => {
  if (findTrackByTitle(state, "Chrome Country")) {
    return {
      currentUserId: state.session.currentUserId,
      trackPlaying: state.ui.trackPlaying,
      loading: state.ui.loading,
      intervalId: state.ui.trackPlaying.intervalId,
  
      chrome_country: findTrackByTitle(state, "Chrome Country"),
      ocean_of_tears: findTrackByTitle(state, "Ocean of Tears"),
      gone: findTrackByTitle(state, "Gone"),
      control: findTrackByTitle(state, "Control"),
      stripped: findTrackByTitle(state, "Stripped"),
      flamboyant: findTrackByTitle(state, "Flamboyant"),
      last_bloom: findTrackByTitle(state, "Last Bloom"),
      hand_crushed_by_a_mallet: findTrackByTitle(state, "Hand Crushed By a Mallet"),
      mercy_street: findTrackByTitle(state, "Mercy Street"),
      running_up_that_hill: findTrackByTitle(state, "Running Up That Hill"),
      that_world: findTrackByTitle(state, "That World"),
      touch: findTrackByTitle(state, "Touch"),
  
      opn: findTrackArtist(state.entities.users, findTrackByTitle(state, "Chrome Country").id),
      galen_tipton: findTrackArtist(state.entities.users, findTrackByTitle(state, "Touch").id),
      hunnid_gecs: findTrackArtist(state.entities.users, findTrackByTitle(state, "Hand Crushed By a Mallet").id)
    }
  } else {
    return {}
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTracks: () => dispatch(fetchTracks()),
    fetchUsers: () => dispatch(fetchUsers()),
    receiveCurrentTrack: (track) => dispatch(receiveCurrentTrack(track)),
    playTrack: () => dispatch(playTrack())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Discover);