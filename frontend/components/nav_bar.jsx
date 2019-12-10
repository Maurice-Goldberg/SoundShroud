import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <button id='sign-in-btn'>Sign in</button>
        <button id='create-acc-btn'>Create account</button>
      </>
    )
  }
}

export default NavBar;