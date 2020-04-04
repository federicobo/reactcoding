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

//using class notation
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {


    state = {
        persons: [
            { name: "Max", age: 28 },
            { name: "Manu", age: 29 },
            { name: "Gloria", age: 26 }
        ],
        otherState:"some other value"

    }

    switchNameHandler = () => {
        console.log("was clicked!");
        //DON'T this.state.persons[0].name= "Maximilian";

        this.setState({
            persons: [
                { name: "Max", age: 28 },
                { name: "Manu", age: 29 },
                { name: "Gloria", age: 27 }
            ]
        });
    }

    render() {
        return (

            //JSX code
            <div className="App">
                <h1>Hi, I am a react app!</h1>
                <p>This is realy working!</p>
                <button onClick={this.switchNameHandler}>Switch name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />

            </div>
        );
        //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this work now?'));
    }
}

export default App;