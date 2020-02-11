import React from 'react';
import {withRouter} from 'react-router';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      headerText: this.props.title,
    };
    this.logoutUser = this.logoutUser.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.dropDownParent = React.createRef();
    this.handleChildEvent = this.handleChildEvent.bind(this);
    this.toggleList = this.toggleList.bind(this);
  }

  handleClickOutside() {
    this.setState({
      open: false
    });
  }

  handleChildEvent(ref, callback) {
    return event => {
      if(!ref.current.contains(event.relatedTarget)) {
        callback();
      }
    };
  }

  toggleList() {
    this.setState(oldState => ({
      open: !oldState.open
    }));
  }

  logoutUser() {
    this.props.logout();
    this.toggleList();
    this.props.closeModal();
    this.props.history.push('/');
  }

  render() {
    let signOutListItem;
    if(this.props.currentUser) {
      signOutListItem = (<li id="signOutListItem" onClick={this.logoutUser}>Sign out</li>);
    }
    //determine what dropdown it is usng a prop and ternary, for classname stuff
    return (
      <div className="dropdown-background">
        <div ref={this.dropDownParent}
        className={this.props.classStr === "account-dropdown" ? "account-dropdown" : "settings-dropdown"}>
          <button className="dropdown-header" onClick={() => this.toggleList()} onBlur={this.handleChildEvent(this.dropDownParent, this.handleClickOutside)}>
            <div className="dropdown-header-text">{this.state.headerText}</div>
          </button>
          {this.state.open && <ul tabIndex="0" className="dropdown-list">
            {this.props.list}
            {signOutListItem}
          </ul>}
        </div>
      </div>
    );
  }
}

export default withRouter(Dropdown);