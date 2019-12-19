import {connect} from 'react-redux';
import Discover from './discover';
import {fetchTracks} from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    currentUserId: state.session.currentUserId,
    trackPhoto1: state.entities.tracks[ownProps.match.params.trackId],

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTracks: () => dispatch(fetchTracks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Discover);