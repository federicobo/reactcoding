// Import the React and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
//const App = () => {
//    return <div>Hi there!</div>;
//};

function getButtonText(){
    return 'Click on me';
}

//<button style="background-color: blue; color:white;">Submit</button>
const App = () => {
    const buttonText = {text: 'Click me' };
    const style = {backgroundColor: 'blue', color:'white'};
    const labelText = 'Enter name:';


    return (
        <div>
            <label className="label" htmlFor="name">{labelText}</label>
            <input id="name" type="text"></input>          
            <button style={style}>
            {buttonText.text}
            </button>
        </div>
    )
}

// Take the react component and show it on the screen

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);