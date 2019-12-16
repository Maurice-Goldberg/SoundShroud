import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

const AuthComponent = ({ component: Component, path, loggedIn, exact }) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={props => loggedIn ? <Redirect to="/discover" /> : <Component {...props} />}
    />
  )
}

const ProtectedComponent = ({ component: Component, path, loggedIn, exact }) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={props => loggedIn ? <Component {...props}/> : <Redirect to="/"/>} 
    />
  );
}

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUserId)
  }
}

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(ProtectedComponent));
export const AuthRoute = withRouter(connect(mapStateToProps, null)(AuthComponent));