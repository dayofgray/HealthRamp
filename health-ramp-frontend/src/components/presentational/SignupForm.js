import React from 'react';

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

export default SignupForm