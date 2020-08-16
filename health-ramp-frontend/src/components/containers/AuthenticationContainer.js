import React, {Component} from 'react';
import LoginForm from '../presentational/LoginForm';
import SignupForm from '../presentational/SignupForm';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';

class AuthenticationContainer extends Component {

    constructor(){
        super()
        this.state = {
          form: {
            email: "",
            password: "",
            name: ""
          }
        }
      }

    handleFormChange = event => {
        const { name, value} = event.target
        this.setState({
            form: {
            ...this.state.form,
            [name]: value
            }
        })
        }

        handleLoginFormSubmit = event => {
            event.preventDefault()
            const {email, password} = this.state.form
      
            fetch("http://localhost:3001/api/v1/login", {
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
            <Router>
                <Switch>
                    <Route path="/signup">
                    <SignupForm handleSignupFormSubmit={this.handleLoginFormSubmit} handleFormChange={this.handleFormChange} form={this.state.form}/>
                        </Route>
                    <Route path="/login">
                    <LoginForm handleLoginFormSubmit={this.handleLoginFormSubmit} handleFormChange={this.handleFormChange} form={this.state.form}/>
                    </Route>
                </Switch>
                </Router>
        )
    }
}

export default AuthenticationContainer