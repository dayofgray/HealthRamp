import React from 'react';
import { signup } from "../../actions/currentUser"
import { updateSignupForm } from "../../actions/signupForm"
import { connect } from 'react-redux'

const SignupForm = ({handleClose, show, signup}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    return (
        <div className={showHideClassName}>
            <form onSubmit={signup}>
                <input type="text" name="email" placeholder="email"/> <br/>
                <input type="text" name="name" placeholder="full name"/> <br/>
                <input type="password" name="password" placeholder="password"/> <br/>
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

export default SignupForm