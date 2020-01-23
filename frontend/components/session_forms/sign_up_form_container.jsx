import {connect} from 'react-redux';
import SessionForm from './session_form';
import {signup, receiveSessionErrors} from '../../actions/session_actions';


const mapStateToProps = (state) => {
  return {
    errors: state.errors.sessionErrors,
    formType: 'Create account',
    currentUserId: state.session.currentUserId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitUser: (user) => dispatch(signup(user)),
    setErrors: (errors) => dispatch(receiveSessionErrors(errors))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);