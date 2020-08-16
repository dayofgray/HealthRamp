import React from 'react';
import { login } from "../../actions/currentUser"
import { updateLoginForm } from "../../actions/loginForm"
import { connect } from 'react-redux'

const LoginForm = ({loginForm, updateLoginForm, login}) => {

    const handleFormChange = event => {
        const {name, value} = event.target
        const updatedFormInfo = {
            ...loginForm,
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }
    const handleLoginSubmit = event => {
        event.preventDefault()
        login(loginForm)
    }
    const {email, password} = loginForm
    return (
        <div className="Login">
            <form onSubmit={handleLoginSubmit}>
                <input type="text" name="email" placeholder="email" onChange={handleFormChange} value={email}/> <br/>
                <input type="text" name="password" placeholder="password" onChange={handleFormChange} value={password}/> <br/>
                <input type="submit" value="Login"/>

            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      loginForm: state.loginForm
    }
  }

export default connect(mapStateToProps, {updateLoginForm, login})(LoginForm)