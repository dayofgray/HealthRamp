import React from 'react';

const Signup = ({signup}) => {
    return (
        <div className="Signup">
            <form onSubmit={signup}>
                <input type="text" name="email" placeholder="email"/> <br/>
                <input type="password" name="password" placeholder="password"/> <br/>
                <input type="submit" value="Signup"/>

            </form>
        </div>
    )
}

export default Signup