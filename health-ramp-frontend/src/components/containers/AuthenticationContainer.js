import React, {Component} from 'react';
import LoginForm from '../presentational/LoginForm';
import SignupForm from '../presentational/SignupForm';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';

class AuthenticationContainer extends Component {



    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/signup">
                    <SignupForm/>
                        </Route>
                    <Route path="/login">
                    <LoginForm/>
                    </Route>
                </Switch>
                </Router>
        )
    }
}

export default AuthenticationContainer