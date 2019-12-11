import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions';
import NavBar from './nav_bar';

const mapStateToProps = (state) => {
  const { entities, session } = state;
  return {
    currentUser: entities.users[session.currentUserId]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);