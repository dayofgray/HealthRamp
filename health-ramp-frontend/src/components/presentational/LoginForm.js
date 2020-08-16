import React from 'react';

const LoginForm = ({handleLoginFormSubmit, handleFormChange, form}) => {
    return (
        <div className="Login">
            <form onSubmit={handleLoginFormSubmit}>
                <input type="text" name="email" placeholder="email" onChange={handleFormChange} value={form.email}/> <br/>
                <input type="text" name="password" placeholder="password" onChange={handleFormChange} value={form.password}/> <br/>
                <input type="submit" value="Login"/>

            </form>
        </div>
    )
}

export default LoginForm