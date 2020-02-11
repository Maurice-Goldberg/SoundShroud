import {connect} from 'react-redux';
import SessionForm from './session_form';
import {signup, receiveSessionErrors, login} from '../../actions/session_actions';


const mapStateToProps = (state) => {
  return {
    errors: state.errors.sessionErrors,
    formType: 'Create account',
    currentUserId: state.session.currentUserId,
    users: state.entities.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitUser: (user) => dispatch(signup(user)),
    demoSubmitUser: (user) => dispatch(login(user)),
    login: (user) => dispatch(login(user)),
    setErrors: (errors) => dispatch(receiveSessionErrors(errors))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);