import React, { Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';
import AuthenticationContainer from './AuthenticationContainer'

class Home extends Component {

    render(){
        const {loggedIn, currentUser} = this.props
        if (!loggedIn) {
            return (
                <AuthenticationContainer/>
            )
        } else {
            return (
                <Router>
                    <Switch>
                    
                    </Switch>
                </Router>
            )
        }
    }
}

export default Home