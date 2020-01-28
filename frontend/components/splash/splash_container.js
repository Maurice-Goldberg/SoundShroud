import {connect} from 'react-redux';
import Splash from './splash';
import { closeModal } from '../../actions/modal_actions';
import { fetchTracks } from '../../actions/track_actions';
import { findTrackByTitle } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    currentUserId: state.session.currentUserId,
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
    touch: findTrackByTitle(state, "Touch")
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTracks: () => dispatch(fetchTracks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);