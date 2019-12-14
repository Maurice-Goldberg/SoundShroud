import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      account_name: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoSignIn = this.handleDemoSignIn.bind(this);
  }

  handleSubmit(event) {
    const {submitUser} = this.props;
    event.preventDefault();
    submitUser(this.state);
    this.setState({
      email: "",
      password: "",
      account_name: ""
    });
  }

  update(formField) {
    return e => this.setState({ [formField]: e.currentTarget.value });
  }

  showErrors() {
    let errors = this.props.errors.map((error, i) => {
      return (
        <li key={`err${i}`}>
          {error}
        </li>
      );
    });

    return (
      <ul>
        {errors}
      </ul>
    );
  }

  handleDemoSignIn() {
    const {submitUser} = this.props;
    submitUser({
      email: "demouser@gmail.com",
      password: "password123"});

    this.setState({
      email: "",
      password: ""
    });
  }

  processContinue() {
    //if log in or if sign up and already email exists
      //hide normal email input field
      //hide demo user button
      //reveal password field
      //reveal sign in button
      //reveal disabled email input field
    //else
      //hide normal email input field
      //reveal disabled email input field
      //reveal password field
      //reveal account name field
      //reveal accept & continue button
  }

  returnToFirstForm() {

  }

  render() {
    const {formType} = this.props;
    const lastButton = formType === "Sign in" ?
      <button
        id="signin-button"
        type="submit"
        className="session-button"
      >Sign in</button> :
      <button
        id="accept-continue-btn"
        type="submit"
        className="session-button"
      >Accept {"&"} Continue</button>;

    const or = (
      <div id="or-border">
        <p id="line">____________________</p>
        <p id="modal-or">or</p>
        <p id="line">____________________</p>
      </div>);
    
    return (
      <label>
        <form onSubmit={this.handleSubmit} className="session-form">
          {formType === "Sign in" && <button
            id="demo-login-btn"
            onClick={this.handleDemoSignIn}
            className="session-button"
          >Demo User</button>}
          
          {formType === "Sign in" && or}

          <input type="text"
            id="email-input"
            placeholder="Your email address *"
            value={this.state.email}
            onChange={this.update('email')}
          />
          <p
            id="second-email-input"
            onClick={this.returnToFirstForm}
          >{this.state.email}</p>
          <div className="left-arrow"></div>
          <input
            id="password-input"
            type="password"
            placeholder="Your password *"
            value={this.state.password}
            onChange={this.update('password')}
          />
          {formType === "Create account" && <input type="text" placeholder="Your account name *"
            value={this.state.account_name}
            onChange={this.update('account_name')}
          />}
          <button
            id="continue-btn"
            className="session-button"
            onClick={this.processContinue}
            >Continue</button>
          {lastButton}
        </form>
        {this.showErrors()}
      </label>
    );
  }
}

export default SessionForm;