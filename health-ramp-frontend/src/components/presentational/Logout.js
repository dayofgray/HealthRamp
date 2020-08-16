import React from 'react';

const Logout = ({logout}) => {
    return (
            <form onSubmit={logout}>
                <input type="submit" value="Logout"/>
            </form>
    )
}

export default Logout