import React from 'react';
import {findByEmail} from '../../util/session_api_util';
import {withRouter} from 'react-router-dom';

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
    this.userExists;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoSignIn = this.handleDemoSignIn.bind(this);
    this.userExists = this.userExists.bind(this);
    this.returnToFirstForm = this.returnToFirstForm.bind(this);
    this.enterPressed = this.enterPressed.bind(this);
    this.processFirstContinue = this.processFirstContinue.bind(this);
  }

  handleSubmit(formType) {
    const { submitUser } = this.props;
    submitUser(this.state.userParams).then(() => {
      if(this.props.errors.length === 0) {
        this.setState({
          userParams: {
            email: "",
            password: "",
            account_name: ""
          },
          formToRender: formType,
          loading: false
        });
        setTimeout(this.props.closeModal, 1000);
      }
    });
  }

  handleDemoSignIn() {
    this.setState({
      userParams: {
        email: "demouser@gmail.com",
        password: "password123"
      },
      loading: true
    }, () => {
      this.handleSubmit("First form");
      this.setState({ loading: false });
      setTimeout(() => {
        this.props.closeModal();
        this.props.history.push('/discover');
      }, 1000);
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
        <li className={`${this.state.formToRender.toLowerCase().split(" ").join("-")}-error`} key={`err${i}`}>
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

  checkValidEmail(email) {
    if(email.split("@").length === 2) {
      if (email.split(".").length === 2) {
        if (email.split("").indexOf("@") < email.split("").indexOf(".")) {
          return true;
        }
      }
    } else {
      return false;
    }
  }

  userExists(email) {
    let exists;
    findByEmail(email).then(
      () => {
        exists = true;
      }
    ).fail(
      () => {
        exists = false;
      }
    )
    return exists;
  }

  processFirstContinue(email) {
    const formType = this.props.formType;
    this.userExists(email);
    if (!this.checkValidEmail(email)) {
      this.setState({formToRender: "First form"});
      this.props.setErrors(["Enter a valid email address."]);
    } else if((formType === "Log in") || (formType === "Create account" && this.userExists(email))) {
      this.setState({formToRender: "Log in"});
      this.props.setErrors([]);
    } else {
      this.setState({formToRender: "Create account"});
      this.props.setErrors([]);
    }
  }

  enterPressed(event) {
    let code = event.keyCode || event.which;
    if(code === 13) {
        switch (this.state.formToRender) {
          case "First form":
            this.processFirstContinue(this.state.userParams.email);
            break;
          case "Log in":
            this.handleSubmit("Log in");
            break;
          case "Create account":
            debugger
            this.processSignUpContinue();
            break;
          case "Account name":
            this.handleSubmit("Sign up");
            break;
          default:
            break;
        }
    }
  }

  processSignUpContinue() {
    if(this.state.userParams.password.length === 0) {
      this.props.setErrors(["Enter a password."]);
    } else if(this.state.userParams.password.length < 6) {
      this.props.setErrors(["Use at least 6 characters"]);
    } else {
      this.setState({formToRender: "Account name"});
      this.props.setErrors([]);
    }
  }

  returnToFirstForm() {
    this.setState({
      formToRender: 'First form'
    }, () => {
      this.props.setErrors([]);
    });
  }

  firstForm() {
    return (
      <div id="first-form">
        {this.state.loading &&
          <div className="loading-group">
            <p className="loading-text">Logging in...</p>
            <img className="loading-icon" src={window.loading_icon} />
          </div>
        }
        <div id="top-section">
          {this.props.formType === "Log in" &&
          <p
            id="demo-login-btn"
            onClick={this.handleDemoSignIn}
            className="session-button"
          >Demo User</p>}

          <a id="github-btn"
            target="_blank"
            href="https://github.com/Maurice-Goldberg/SoundShroud">
            Soundshroud GitHub
          </a>
        </div>

        <div id="or-row">
          <p id="line">___________________________</p>
          <p id="modal-or">or</p>
          <p id="line">___________________________</p>
        </div>

        <div id="bottom-section">
          {this.props.errors.length > 0 ?
            <input type="text"
              id="errored-email-input"
              placeholder="Your email address *"
              value={this.state.userParams.email}
              onChange={this.update('email')}
              onKeyPress={this.enterPressed}
            />
          : 
            <input type="text"
              id="email-input"
              placeholder="Your email address *"
              value={this.state.userParams.email}
              onChange={this.update('email')}
              onKeyPress={this.enterPressed}
            /> 
          }

          {this.showErrors()}
          <button
            id="continue-btn"
            className="session-button"
            onClick={() => this.processFirstContinue(this.state.userParams.email)}
          >Continue</button>
        </div>

      </div>
    );
  }

  pwLoginForm() {
    return (
      <div id="pw-login-form">
        <div id="dummy-input">
          <p
            id="second-email-input"
            onClick={this.returnToFirstForm}
          >{this.state.userParams.email}</p>
          <div className="left-arrow" onClick={this.returnToFirstForm}></div>
        </div>
        {this.props.errors.length > 0 ?
          <input
            id="errored-password-input"
            type="password"
            placeholder="Your password *"
            autoFocus
            value={this.state.userParams.password}
            onChange={this.update('password')}
            onKeyPress={this.enterPressed}
          />
          :
          <input
            id="password-input"
            type="password"
            placeholder="Your password *"
            autoFocus
            value={this.state.userParams.password}
            onChange={this.update('password')}
            onKeyPress={this.enterPressed}
          />
        }
        {this.showErrors()}
        
        <button
          id="signin-button"
          onClick={() => this.handleSubmit("Log in")} 
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
        <div id="dummy-input">
          <p
            id="second-email-input"
            onClick={this.returnToFirstForm}
          >{this.state.userParams.email}</p>
          <div className="left-arrow" onClick={this.returnToFirstForm}></div>
        </div>

        <p id="password-prompt">Choose a password *</p>

        {this.props.errors.length > 0 ?
          <input
            id="errored-password-input"
            type="password"
            autoFocus
            value={this.state.userParams.password}
            onChange={this.update('password')}
            onKeyPress={this.enterPressed}
          />
        :
        <input
          id="password-input"
          type="password"
          placeholder="Choose a password *"
          autoFocus
          value={this.state.userParams.password}
          onChange={this.update('password')}
          onKeyPress={this.enterPressed}
        />}

        {this.showErrors()}
        <p
          id="accept-continue-btn"
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
        {this.props.errors.length > 0 ? 
        <input
          id="errored-name-input"
          type="text" autoFocus
          value={this.state.userParams.account_name}
          onChange={this.update('account_name')}
          onKeyPress={this.enterPressed}
        />
        :
        <input
          id="name-input"
          type="text" autoFocus
          value={this.state.userParams.account_name}
          onChange={this.update('account_name')}
          onKeyPress={this.enterPressed}
        />}
        {this.showErrors()}

          <div id="name-explanation">
            <p id="line1">Your display name can be anything you like. Your name or artist</p>
            <p id="line2">name are good choices.</p>
          </div>

        <button
          id="get-started-btn"
          className="session-button"
          onClick={() => this.handleSubmit("Account name")} 
        >Get started</button>
      </div>
    )
  }

  render() {
    let form;
    switch (this.state.formToRender) {
      case "First form":
        form = this.firstForm();
        break;
      case "Create account":
        form = this.pwSignupForm();
        break;
      case "Log in":
        form = this.pwLoginForm();
        break;
      case "Account name":
        form = this.accountNameForm();
        break;
      default:
        form = this.firstForm();
        break;
    }

    return (
        <div className="session-form" >
          {form}
        </div>
    );
  }
}

export default withRouter(SessionForm);