import {connect} from 'react-redux';
import SessionForm from './session_form';
import {signup} from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.sessionErrors,
    formType: 'sign up'
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitUser: (user) => dispatch(signup(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);