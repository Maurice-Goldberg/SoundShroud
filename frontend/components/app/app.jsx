import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';
import SplashContainer from '../splash/splash_container';
import TrackShowContainer from '../tracks/track_show/track_show_container';

const App = (props) => {
  return (
    <>
      {props.currentUserId ?
      <NavBarContainer /> :
      <SplashContainer />}
      <div className="content">
        <ProtectedRoute exact path='/tracks/:trackId' component={TrackShowContainer} />
      </div>
    </>
  );
};

export default App;