import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'

class App extends Component {

  constructor(){
    super()
    this.state = {
      currentUser: null,
      loginForm: {
        email: "",
        password: ""
      }
    }
  }

  handleLoginFormChange = event => {
    const { name, value} = event.target
    this.setState({
      loginForm: {
        ...this.state.loginForm,
        [name]: value
      }
    })
  }

  handleLoginFormSubmit = event => {
      event.preventDefault()

  }

  render() {

    return (
      <div className="App">
        Welcome {this.state.currentUser}
        <Login handleLoginFormSubmit={this.handleLoginFormSubmit} handleLoginFormChange={this.handleLoginFormChange} email={this.state.loginForm.email} password={this.state.loginForm.password}/>
      </div>
    );
  }
}

export default App;
