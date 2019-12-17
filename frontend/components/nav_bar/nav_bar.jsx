import React from 'react';
import DropdownContainer from './dropdowns/dropdown_container';
import Modal from '../session_forms/modal';
import {Link} from 'react-router-dom';

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
          classStr="account-dropdown"
          title={account_name}
          list={list}  
        />
    );
  }

  render() {
    let userNavItem;
    const {logout, currentUser} = this.props;
    if (currentUser) {
      userNavItem = this.accountNav();
    } else {
      userNavItem = <Modal />;
    }
  
    let settings = (
        <>
        </>
    );

    return (
      <header className="nav-bar-container">
        <nav className="nav-bar">
          <figure className="logo">
            <img id="logo-img" src={window.logo}/>
          </figure>
          <div className="nav-tabs">
            <div className="nav-tab-wrapper">
              <h2 id="home-tab">Home</h2>
            </div>
            <div className="nav-tab-wrapper">
              <h2 id="stream-tab">Stream</h2>
            </div>
            <div className="nav-tab-wrapper">
              <h2 id="library-tab">Library</h2>
            </div>
          </div>
          <input id="search-bar"
            type="text"
            placeholder="Search for artists, bands, tracks, podcasts"
          />
          <Link to="/upload" className="upload-link">Upload</Link>
          {userNavItem}
          <div>
            {currentUser && <DropdownContainer
              classStr = "settings-dropdown"
              title="..."
              list={settings}
              currentUser={currentUser}
              logout={logout}
            />}
          </div>
        </nav>
      </header>
    );
  }
}

export default NavBar;