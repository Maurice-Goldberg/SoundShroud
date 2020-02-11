import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, receiveSessionErrors, signup } from '../../actions/session_actions';


const mapStateToProps = (state) => {
  return {
    errors: state.errors.sessionErrors,
    formType: 'Log in',
    currentUserId: state.session.currentUserId,
    users: state.entities.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitUser: (user) => dispatch(login(user)),
    setErrors: (errors) => dispatch(receiveSessionErrors(errors)),
    signup: (user) => dispatch(signup(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);