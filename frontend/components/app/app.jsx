import React from 'react';

import NavBarContainer from '../nav_bar/nav_bar_container';
import SplashContainer from '../splash/splash_container';

const App = (props) => {
  return (
    <>
      {props.currentUserId ?
      <NavBarContainer /> :
      <SplashContainer />}
    </>
  );
};

export default App;