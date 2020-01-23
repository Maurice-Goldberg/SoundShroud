import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, receiveSessionErrors } from '../../actions/session_actions';


const mapStateToProps = (state) => {
  return {
    errors: state.errors.sessionErrors,
    formType: 'Log in',
    currentUserId: state.session.currentUserId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitUser: (user) => dispatch(login(user)),
    setErrors: (errors) => dispatch(receiveSessionErrors(errors))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);