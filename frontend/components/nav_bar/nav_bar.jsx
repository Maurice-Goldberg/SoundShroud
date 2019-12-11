import React from 'react';
import DropdownContainer from './dropdowns/dropdown_container';
import Modal from '../session_forms/modal';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  accountNav() {
    let account_name = this.props.currentUser.account_name;
    let list = (
      <>
        <li className="dropdown-list-item">Profile</li>
        <li className="dropdown-list-item">Tracks</li>
      </>
    );

    return (
      <DropdownContainer
        title={account_name}
        list={list}  
      />
    );
  }

  render() {
    let userNavItem;
    const {currentUser, logout} = this.props;
    if (typeof currentUser === 'undefined') {
      userNavItem = <Modal />;
    } else {
      userNavItem = this.accountNav();
    }
  
    let settings = (
      <>
        <li></li>
        <li></li>
        <li></li>
      </>
    );

    return (
      <nav className="nav-bar">
        <figure class="logo">
          <img id="logo-img" src={window.logo}/>
          <h1 id="site-title">SOUNDSHROUD</h1>
        </figure>

        <input id="search-bar"
          type="text"
          placeholder="Search for artists, bands, tracks, podcasts"
        />
        {userNavItem}
        <div className="settings-dropdown">
          <DropdownContainer
            title="..."
            list={settings}
            currentUser={currentUser}
            logout={logout}
          />
        </div>
      </nav>
    );
  }
}

export default NavBar;