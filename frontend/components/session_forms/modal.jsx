import React from 'react';
import { closeModal, openModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from './log_in_form_container';
import SignupFormContainer from './sign_up_form_container';

const Modal = (props) => {
  const { modal, closeModal, openSignInModal, openCreateAccModal } = props;

  let component;
  switch (modal) {
    case "Sign in":
      component = <LoginFormContainer />;
      break;
    case "Create account":
      component = <SignupFormContainer />;
      break;
  }
  
  let sessionButtons = (
    <>
      <button id="sign-in-btn" onClick={() => openSignInModal()}>
        Sign in
        </button>
      <button id="create-acc-btn" onClick={() => openCreateAccModal()}>
        Create account
        </button>
    </>
  );

  if (!modal) {
    return sessionButtons;
  }

  return (
    <>
      {sessionButtons}
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          {component}
        </div>
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    openSignInModal: () => dispatch(openModal('Sign in')),
    openCreateAccModal: () => dispatch(openModal('Create account'))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);