import React from 'react';

const AccountForm = ({accountForm, handleFormChange, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
            type="text"
            name="name" 
            placeholder="Full name" 
            value={accountForm.name}
            onChange={handleFormChange}
            />
            <br/>
            <label htmlFor="email">Email</label>
            <input
            type="text"
            name="email" 
            placeholder="Email address" 
            value={accountForm.email}
            onChange={handleFormChange}
            />
            <br/>
            <input type="submit" value="Update"/>
        </form>     
    )
}

export default AccountForm