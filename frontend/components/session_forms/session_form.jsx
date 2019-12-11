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

  render() {
    const {formType} = this.props;
    return (
      <label>{this.props.formType}
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Your email address *"
            value={this.state.email}
            onChange={this.update('email')}
          />
          <input type="password" placeholder="Your password *"
            value={this.state.password}
            onChange={this.update('password')}
          />
          <button type="submit">Continue</button>
          {formType==="Create account" && <input type="text" placeholder="Your account name *"
            value={this.state.account_name}
            onChange={this.update('account_name')}
            />}
        </form>
            {formType === "Sign in" && <button onClick={this.handleDemoSignIn}>Demo User</button>}
        {this.showErrors()}
      </label>
    );
  }
}

export default SessionForm;