import React from 'react'
import '../User/User.css';
const User = (props) => {
        return (
            <div>
                <form onSubmit={props.getUser}>
                    <input className ="inputForm" type="text" name="username"></input>
                    <button type="submit">Search for Repos</button>
                </form>
            </div>
        )
    
}

export default User;
