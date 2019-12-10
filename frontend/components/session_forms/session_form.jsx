import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "Your email address *",
      profileURL: "Your email address *",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.submitUser(this.state);
  }

  update(formField) {
    return e => {
      if(e.currentTarget.value === "" && formField === "email") {
        this.setState({
          "email": "Your email address *"
        });
      } else {
        this.setState({
          [formField]: e.currentTarget.value
        });
      }
    };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
          value={this.state.email}
          onChange={this.update('email')}
        />
        <input type="password"
          value={this.state.password}
          onChange={this.update('password')}
        />
        <button type="submit">Continue</button>
      </form>
    );
  }
}

export default SessionForm;