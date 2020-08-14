import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import Logout from './components/Logout'

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

  componentDidMount() {
    const token = localStorage.getItem('token')
    if (token) {fetch('http://localhost:3001/current_user', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(resp => resp.json())
    .then(json => {
      if (json.errors) {
        alert(json.errors)
      }
      else {
        this.setState({
          currentUser: json
        })
      }
    })
     .catch(console.log)
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

  logout = event => {
    event.preventDefault()
    localStorage.removeItem('token')
    this.setState({
      currentUser: null
    })
  }

  handleLoginFormSubmit = event => {
      event.preventDefault()
      const {email, password} = this.state.loginForm

      fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      })
      .then(resp => resp.json())
      .then(json => {
        localStorage.setItem("token", json.jwt)
        const {id, email, name} = json.user
        this.setState({
          currentUser: {
            id,
            email,
            name
          },
          loginForm: {
            email: "",
            password: ""
          }
        })
      })
      .catch(console.log)
  }

  render() {

    return (
      <div className="App">
        Welcome {this.state.currentUser ? this.state.currentUser.name : "Unidentified User"}
        {this.state.currentUser ?
         <Logout logout={this.logout}/> :
        <Login handleLoginFormSubmit={this.handleLoginFormSubmit} handleLoginFormChange={this.handleLoginFormChange} email={this.state.loginForm.email} password={this.state.loginForm.password}/>
        }
      </div>
    );
  }
}

export default App;
