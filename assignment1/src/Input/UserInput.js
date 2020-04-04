import React from 'react';
import './UserInput.css'


const userInput = (props) => {
    return (
        <div className="UserOutput">
        <input type="text" onChange={props.changed} value={props.username}></input>
        </div>
    );
}

export default userInput;