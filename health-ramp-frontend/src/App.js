import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import Logout from './components/Logout'
import Signup from './components/Signup'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Button } from 'react-bulma-components'

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
    fetch('http://localhost:3001/current_user', {
      credentials: "include",
      headers: {
        'Content-Type': `application/json`
      }
    })
    .then(resp => resp.json())
    .then(json => {
      if (json.errors) {
        
      }
      else {
        this.setState({
          currentUser: json
        })
      }
    })
     .catch(console.log)
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
    fetch("http://localhost:3001/logout", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        credentials: "include"
    })
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
        credentials: "include",
        body: JSON.stringify({
          email,
          password
        })
      })
      .then(resp => resp.json())
      .then(json => {
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
        <div>
        {this.state.currentUser ?
         <Logout logout={this.logout}/> :
         <>
        <Button renderAs="a" href="/signup">Signup</Button>
        <Button renderAs="a" href="/login">Login</Button>
        </>
        }
        </div>
        <Router>
         <Switch>
          <Route path="/signup">
          <Signup/>
          </Route>
          <Route path="/login" component={Login}>
          <Login handleLoginFormSubmit={this.handleLoginFormSubmit} handleLoginFormChange={this.handleLoginFormChange} email={this.state.loginForm.email} password={this.state.loginForm.password}/>
          </Route>
        </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
