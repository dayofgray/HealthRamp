import React, { Component } from 'react';
import './App.css';
import Nav from './components/presentational/Nav.js'
import Logout from './components/presentational/Logout'
import AuthenticationContainer from './components/containers/AuthenticationContainer'
import { Button} from 'react-bulma-components'

class App extends Component {

  constructor(){
    super()
    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/current_user', {
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


  logout = event => {
    event.preventDefault()
    fetch("http://localhost:3001/api/v1/logout", {
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
    

  render() {

    return (
      <div className="App">
        <Nav/>
        Welcome {this.state.currentUser ? this.state.currentUser.name : "Unidentified User"}
        <div>
        {this.state.currentUser ?
         <Logout logout={this.logout}/> : null
        }
        </div>
        <AuthenticationContainer/>
      </div>
    );
  }
}

export default App;
