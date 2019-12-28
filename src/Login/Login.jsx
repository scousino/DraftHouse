import React from 'react';
import { Link } from 'react-router-dom'
import './Login.css';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleNavigation = this.handleNavigation.bind(this);
  }
  render() {
    return (
      <div className="login-container">
        <p>Login to join the 100 Beer Draft!</p>
        <label>
          Name:
          <input
            style={{marginLeft: 10, marginRight: 10}}
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <Link style={{marginTop: 10}} className="btn center" to={this.handleNavigation}>Enter</Link>
      </div>
    );
  }

  handleChange(event) {
    this.setState({name: event.target.value});
    console.log(event.target.value);
  }

  handleNavigation(currentLocation) {
      // Return URL for draft room
      return 'room/1/' + this.state.name;
  }
}
