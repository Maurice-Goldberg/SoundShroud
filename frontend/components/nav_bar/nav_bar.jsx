import React from 'react';
import DropdownContainer from './dropdowns/dropdown_container';
import Modal from '../session_forms/modal';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let userNavItem;
    const {logout, currentUser} = this.props;
    if (currentUser) {
      userNavItem = <Link className="user-profile-link" to={`/users/${currentUser.id}`}>
                      {currentUser.account_name}
                    </Link>;
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
              <Link className="home-tab" to="/discover">Home</Link>
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