import React from 'react';
import {findByEmail} from '../../util/session_api_util';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userParams: {
        email: "",
        password: "",
        account_name: ""
      },
      formToRender: "First form"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoSignIn = this.handleDemoSignIn.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { submitUser } = this.props;
    submitUser(this.state.userParams);
    this.setState({
      userParams: {
        email: "",
        password: "",
        account_name: ""
      },
      formToRender: "First form"
    });
  }

  //hopefully this doesn't run an error with the new userParams state structure?
  update(formField) {
    return e => this.setState({
      userParams: { [formField]: e.currentTarget.value }
    });
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

  handleDemoSignIn(event) {
    event.preventDefault();
    const { submitUser } = this.props;
    // this.setState({userParams: {
    //   email: "demouser@gmail.com",
    //   password: "password123"
    // }});

    submitUser({email: "demouser@gmail.com", password: "password123"})

    this.setState({
      userParams: {
        email: "",
        password: ""
      }
    });
  }

  userExists(email) {
    findByEmail(email).success(
      this.setState({ formToRender: "Log in" })
    ).fail(
      this.setState({ formToRender: "Create account" })
    )
  }

  processFirstContinue(email) {
    const formType = this.props.formType;
    if(formType === "Sign in" || (formType === "Create account" && this.userExists(email))) {
      this.setState({formToRender: "Sign in"});
    } else {
      this.setState({formToRender: "Create account"});
    }
  }

  processSignUpContinue() {
    this.setState({formToRender: "Account name"});
  }

  returnToFirstForm() {
    this.setState({
      formToRender: 'First form'
    });
  }

  firstForm() {
    return (
      <div id="first-form">
        <button
          id="demo-login-btn"
          onClick={event => this.handleDemoSignIn(event)}
          className="session-button"
        >Demo User</button>

        <div id="or-border">
          <p id="line">____________________</p>
          <p id="modal-or">or</p>
          <p id="line">____________________</p>
        </div>

        <input type="text"
          id="email-input"
          placeholder="Your email address *"
          value={this.state.userParams.email}
          onChange={this.update('email')}
        />

        <p
          id="continue-btn"
          className="session-button"
          onClick={() => this.processFirstContinue(this.state.userParams.email)}
        >Continue</p>
      </div>
    );
  }

  pwLoginForm() {
    return (
      <div id="pw-login-form">
        <p
          id="second-email-input"
          onClick={this.returnToFirstForm}
        >{this.state.userParams.email}</p>
        <div className="left-arrow" onClick={this.returnToFirstForm}></div>
        
        <input
          id="password-input"
          type="password"
          placeholder="Your password *"
          value={this.state.userParams.password}
          onChange={this.update('password')}
        />
        
        <button
          id="signin-button"
          type="submit"
          className="session-button"
        >Sign in</button>
      </div>
    )
  }

  pwSignupForm() {
    return(
      <div id="pw-signup-form">
        <h2 id="signup-header">Create your SoundShroud account</h2>
        
        <input type="text"
          id="email-input"
          placeholder="Your email address *"
          value={this.state.userParams.email}
          onChange={this.update('email')}
        />
        
        <p
          id="accept-continue-btn"
          type="submit"
          className="session-button"
          onClick={() => this.processSignUpContinue()}
        >Accept {"&"} Continue</p>
      </div>
    )
  }

  accountNameForm() {
    return (
      <div id="acc-name-form">
        <h2 id="acc-name-header">Tell us a bit about yourself</h2>

        <input type="text" placeholder="Your account name *"
          value={this.state.userParams.account_name}
          onChange={this.update('account_name')}
        />

        <button
          id="get-started-btn"
          type="submit"
          className="session-button"
        >Get started</button>
      </div>
    )
  }

  render() {
    let form;
    switch (this.state.formToRender) {
      case "First form":
        form = this.firstForm();
      case "Create account":
        form = this.pwSignupForm();
      case "Log in":
        form = this.pwLoginForm();
      case "Account name":
        form = this.accountNameForm();
      default:
        form = this.firstForm();
    }

    return (
        <form onSubmit={event => this.handleSubmit(event)} className="session-form" >
          {form}
        </form>
    );
  }
}

export default SessionForm;