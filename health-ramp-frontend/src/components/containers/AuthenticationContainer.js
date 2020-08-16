import React, {Component} from 'react';
import LoginForm from '../presentational/LoginForm';
import SignupForm from '../presentational/SignupForm';
import { Button } from 'react-bulma-components'

class AuthenticationContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showSignup: false,
            showLogin: false
        }
    }

    showSignup = () => {
        this.setState({
            showSignup: true
        })
    }

    showLogin = () => {
        this.setState({
            showLogin: true
        })
    }

    hideSignup = () => {
        this.setState({
            showSignup: false
        })
    }

    hideLogin = () => {
        this.setState({
            showLogin: false
        })
    }

    render() {
        return (
        <>   
            <Button onClick={this.showSignup}>Signup</Button>
            <Button onClick={this.showLogin}>Login</Button>
        
        {this.state.showLogin ? <LoginForm show={this.state.showLogin} handleClose={this.hideLogin}/> : null}
        {this.state.showSignup ? <SignupForm show={this.state.showSignup} handleClose={this.hideSignup}/> : null}
        </>
        )
    }
}

export default AuthenticationContainer