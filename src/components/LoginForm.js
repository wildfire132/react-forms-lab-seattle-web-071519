import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
  }

  handleUsername = (event) =>{
    let newUserName = event.target.value
    console.log(event.target.value)
    this.setState(prevState =>({
      ...prevState,
      username: newUserName
    }))
  }

  handlePassword = (event) => {
    let newPassword = event.target.value
    console.log(event.target.value)
    this.setState(prevState =>({
      ...prevState,
      password: newPassword
    }))
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    let username = this.state.username
    let password = this.state.password
    this.props.handleLogin({username,password})
  }
  
  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <div>
          <label>
            Username
            <input onChange={this.handleUsername} id="username" name="username" type="text" value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" onChange={this.handlePassword} value={this.state.password} name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
