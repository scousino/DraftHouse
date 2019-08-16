import React from "react";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return (
      <div>
        <p>Login to join the 100 Beer Draft!</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              style={{marginLeft: 10, marginRight: 10}}
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

  handleChange(event) {
    this.setState({name: event.target.value});
    console.log(event.target.value);
  }

  handleSubmit() {
      // Navigate to the draft room
  }
}
