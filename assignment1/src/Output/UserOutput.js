import React, { useState } from 'react';
import './UserOutput.css';
import UserInput from '../Input/UserInput'


const userOutput = (props) => {

    const [outputState, setOutputState] = useState({
        username:""
    })

    const userNameChangeHandler = (event) => {
        //console.log("was clicked!");


        //utilizzando gli hooks bisogna passare tutto il nuovo oggetto in quanto viene sovrascritto 
        //a differenza di useState che fa il merge tra il vecchio state ed il nuovo oggetto passato
        setOutputState({
            username: event.target.value
        });
    }

    return (
        <div className="Person">
        <p onClick={props.click}>old username:{props.username} userName: {outputState.username} </p>
        <p>{props.children}</p>
        <UserInput type="text" changed={userNameChangeHandler} username={outputState.username} value={outputState.username}></UserInput>
        </div>
    );
}

export default userOutput;