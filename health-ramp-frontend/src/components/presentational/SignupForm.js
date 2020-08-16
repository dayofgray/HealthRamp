import React from 'react';
import { signup } from "../../actions/currentUser"
import { updateSignupForm } from "../../actions/signupForm"
import { connect } from 'react-redux'

const SignupForm = ({signup}) => {
    return (
        <div className="Signup">
            <form onSubmit={signup}>
                <input type="text" name="email" placeholder="email"/> <br/>
                <input type="text" name="name" placeholder="full name"/> <br/>
                <input type="password" name="password" placeholder="password"/> <br/>
                <input type="submit" value="Signup"/>

            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      signupForm: state.signupForm
    }
  }

export default SignupForm