/*import React from 'react';
import ReactDOM from 'react-dom';

//functional component vs class

//functional component
const app = ()=>{
return <div><h1>Hi, I'm a react App!</h1></div>

}

ReactDOM.render(<App/>, document.querySelector('#root'));
*/

//class notation
/*class App extends Component
class App extends Component {
rennder(){
    return(
         <div><h1>Hi, I'm a react App!</h1></div>
    )
}
}
*/
//class notation

//use useState to use react hooks
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = (props) => {

    const [personsState, setPersonsState] = useState({
        persons: [
            { name: "Max", age: 28 },
            { name: "Manu", age: 29 },
            { name: "Gloria", age: 26 }
        ]

    });

    const [otherState, setOtherState] = useState('some ohter value'); 

    console.log(personsState, otherState);

    const switchNameHandler = (newName) => {
        //console.log("was clicked!");


        //utilizzando gli hooks bisogna passare tutto il nuovo oggetto in quanto viene sovrascritto 
        //a differenza di useState che fa il merge tra il vecchio state ed il nuovo oggetto passato
        setPersonsState({
            persons: [
                { name: newName, age: 28 },
                { name: personsState.persons[1].name, age: 29 },
                { name: personsState.persons[2].name, age: 27 }
            ]
        });
    }

    const nameChangedHandler =(event) =>{
        setPersonsState({
            persons: [
                { name: personsState.persons[0].name, age: 28 },
                { name: event.target.value,  age: 29 },
                { name: personsState.persons[2].name, age: 27 }
            ]
        });

    }

    const style ={
        backgroundColor: 'white',
        font:'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
        
    }

    return (

        //JSX code
        <div className="App">
            <h1>Hi, I am a react app!</h1>
            <p>This is realy working!</p>
            <button onClick={switchNameHandler.bind(this, "Maximilian")}>Switch name</button>
            <button
            style={style}
             onClick={() => switchNameHandler("Max")}>Switch name bis</button>
            <Person name={personsState.persons[0].name}
             age={personsState.persons[0].age}              />
            <Person name={personsState.persons[1].name}
             age={personsState.persons[1].age}
            click={switchNameHandler.bind(this, "Max")}
            changed={nameChangedHandler}> My Hobbies: Racing</Person>
            <Person name={personsState.persons[2].name}
             age={personsState.persons[2].age} />

        </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this work now?'));
}

export default app;