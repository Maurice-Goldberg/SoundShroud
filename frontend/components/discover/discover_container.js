import {connect} from 'react-redux';
import Discover from './discover';
import {fetchTracks} from '../../actions/track_actions';
import {findTrackByTitle} from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUserId: state.session.currentUserId,
    track1: findTrackByTitle(state, "Ocean of Tears"),
    track2: findTrackByTitle(state, "Chrome Country")
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTracks: () => dispatch(fetchTracks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Discover);