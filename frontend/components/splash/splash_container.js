import {connect} from 'react-redux';
import Splash from './splash';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({session}) => {
  return {
    currentUserId: session.currentUserId
  }
}

export default connect(mapStateToProps, null)(Splash);