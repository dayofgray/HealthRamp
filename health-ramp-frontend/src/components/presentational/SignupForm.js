import React from 'react';
import { signup } from "../../actions/currentUser"
import { updateSignupForm } from "../../actions/signupForm"
import { connect } from 'react-redux'

const SignupForm = ({handleClose, show, signupForm, updateSignupForm, signup}) => {

    const handleFormChange = event => {
        const {name, value} = event.target
        const updatedFormInfo = {
            ...signupForm,
            [name]: value
        }
        updateSignupForm(updatedFormInfo)
    }
    const handleSignupSubmit = event => {
        event.preventDefault()
        signup(signupForm)
    }
    const {email, name, password} = signupForm
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    return (
        <div className={showHideClassName}>
            <form onSubmit={handleSignupSubmit}>
                <input type="text" name="email" onChange={handleFormChange} placeholder="email" value={email}/> <br/>
                <input type="text" name="name" onChange={handleFormChange} placeholder="full name" value={name}/> <br/>
                <input type="password" name="password" onChange={handleFormChange} placeholder="password" value={password}/> <br/>
                <input type="submit" value="Signup"/>

            </form>
            <button onClick={handleClose}>Close</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      signupForm: state.signupForm
    }
  }

export default connect(mapStateToProps, {updateSignupForm, signup})(SignupForm)