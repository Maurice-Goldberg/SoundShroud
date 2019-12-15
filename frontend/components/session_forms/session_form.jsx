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
    this.userExists = this.userExists.bind(this);
    this.returnToFirstForm = this.returnToFirstForm.bind(this);
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

  update(formField) {
    switch(formField) {
      case "password":
        return e => this.setState({
          userParams: {
            password: e.currentTarget.value,
            account_name: this.state.userParams.account_name,
            email: this.state.userParams.email
          }
        });
      case "email":
        return e => this.setState({
          userParams: {
            email: e.currentTarget.value,
            password: this.state.userParams.password,
            account_name: this.state.userParams.account_name,
          }
        });
      case "account_name":
        return e => this.setState({
          userParams: {
            account_name: e.currentTarget.value,
            email: this.state.userParams.email,
            password: this.state.userParams.password,
          }
        });
      default:
        break;
    }
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
    this.setState({userParams: {
      email: "demouser@gmail.com",
      password: "password123"
    }});
  }

  userExists(email) {
    debugger
    findByEmail(email).then(
      () => true
    ).fail(
      () => false
    )
  }

  processFirstContinue(email) {
    debugger
    const formType = this.props.formType;
    if(formType === "Sign in" || (formType === "Create account" && this.userExists(email))) {
      debugger
      this.setState({formToRender: "Log in"});
      debugger
    } else {
      debugger
      this.setState({formToRender: "Create account"});
      debugger
    }
  }

  processSignUpContinue() {
    this.setState({formToRender: "Account name"});
  }

  returnToFirstForm() {
    debugger
    this.setState({
      formToRender: 'First form'
    });
  }

  firstForm() {
    return (
      <div id="first-form">
        {this.props.formType === "Sign in" &&
        <button
          type="submit"
          id="demo-login-btn"
          onClick={this.handleDemoSignIn}
          className="session-button"
        >Demo User</button>}
        
        <a id="github-btn"
          href="https://github.com/Maurice-Goldberg/SoundShroud">
          Soundshroud GitHub
        </a>

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
          autoFocus
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
        <h2 id="signup-header">Create your SoundShroud</h2>
        <h2 id="signup-header">account</h2>
        
        <p
          id="second-email-input"
          onClick={this.returnToFirstForm}
        >{this.state.userParams.email}</p>
        <div className="left-arrow" onClick={this.returnToFirstForm}></div>

        <input
          id="password-input"
          type="password"
          autoFocus
          value={this.state.userParams.password}
          onChange={this.update('password')}
        />
        
        <p id="password-prompt">Choose a password *</p>
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
        <h2 id="acc-name-header">Tell us a bit</h2>
        <h2 id="acc-name-header">about yourself</h2>

        <p id="name-prompt">Choose your display name *</p>
        <input
          id="name-input"
          type="text" autoFocus
          value={this.state.userParams.account_name}
          onChange={this.update('account_name')}
        />
        <p id="name-explanation1">Your display name can be anything you like. Your name or artist</p>
        <p id="name-explanation2">name are good choices.</p>

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
        debugger
        form = this.firstForm();
        break;
      case "Create account":
        debugger
        form = this.pwSignupForm();
        break;
      case "Log in":
        debugger
        form = this.pwLoginForm();
        break;
      case "Account name":
        debugger
        form = this.accountNameForm();
        break;
      default:
        debugger
        form = this.firstForm();
        break;
    }

    return (
        <form onSubmit={event => this.handleSubmit(event)} className="session-form" >
          {form}
        </form>
    );
  }
}

export default SessionForm;