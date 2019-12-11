import React from 'react';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      headerText: this.props.title,
    };
    this.logoutUser = this.logoutUser.bind(this);
  }

  handleClickOutside() {
    this.setState({
      open: false
    });
  }

  toggleList() {
    this.setState(oldState => ({
      open: !oldState.open
    }));
  }

  logoutUser() {
    this.props.logout();
    this.toggleList();
    debugger
    this.props.closeModal();
  }

  render() {
    let signOutListItem;
    if(this.props.currentUser) {
      signOutListItem = (<li onClick={this.logoutUser}>Sign out</li>);
    }
    return (
      <div className="dropdown">
        <div className="dropdown-header" onClick={() => this.toggleList()}>
          <div className="dropdown-header-text">{this.state.headerText}</div>
        </div>
        {this.state.open && <ul className="dropdown-list">
          {this.props.list}
          {signOutListItem}
        </ul>}
      </div>
    );
  }
}

export default Dropdown;