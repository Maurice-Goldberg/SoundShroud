import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  let preLoadedState = undefined;
  if(window.currentUser) {
    preLoadedState = {
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser 
        }
      },
      session: {
        currentUserId: window.currentUser.id
      }
    };
  }
  let store = configureStore(preLoadedState);

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

  //FOR TESTING PURPOSES ONLY:
  window.getState = store.getState;
});