import React from 'react';
import {Provider} from 'react-redux';

import LogInFormContainer from './session_forms/log_in_form_container';
import SignUpFormContainer from './session_forms/sign_up_form_container';

const App = (props) => {
  return (
    <>
      <h1>SoundShroud</h1>
      <LogInFormContainer />
      <SignUpFormContainer />
    </>
  );
};

export default App;