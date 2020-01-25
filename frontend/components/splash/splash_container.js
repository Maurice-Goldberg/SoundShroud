import {connect} from 'react-redux';
import Splash from './splash';
import { closeModal } from '../../actions/modal_actions';
import { fetchTracks } from '../../util/track_api_util';

const mapStateToProps = ({session}) => {
  return {
    currentUserId: session.currentUserId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTracks: () => dispatch(fetchTracks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);