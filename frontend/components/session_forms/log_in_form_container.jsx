import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';
import React from 'react';


const mapStateToProps = (state) => {
  return {
    errors: state.errors.sessionErrors,
    formType: 'Sign in',
    currentUserId: state.session.currentUserId
  };
};

const mapDispatchToProps = (dispatch) => {
  debugger
  return {
    submitUser: (user) => dispatch(login(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);