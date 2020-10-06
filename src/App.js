import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from "./Person/Person"

// function App() {

//   // const set
//   return (
//     <div className="App">
//      <h1>Hi,i'am react App</h1>
//      <p>this is awesome</p>
//      <button>Switch Name</button>
//      <Person name ="gulshan" age ="20"/>
//      <Person name ="sudarshan" age ="18" />
//      <Person name ="priyanka" age="17" hobbies ="racing"></Person>
//     </div>
//   ); 
// }

class App extends Component{
  state = {
    persons:[
      {name: "gulshan", age: 20},
      {name: "sudarshan", age: 19},
      {name: "priyanka", age: 17}
    ]

  }
  swichNameHandler = () =>{
    console.log("was clicked");
    this.setState({
      persons:[
        { name: "yadav",age: 19},
        {name: "sudarshan", age: 19},
        {name: "priyanka", age: 17}
      ]
    })
  }
  render(){
    return(
      <div className="App">
      <>
      <h1>this is awesome</h1>
      <button onClick={this.swichNameHandler}>Switch Name</button>
      <Person name= {this.state.persons[0].name} age= {this.state.persons[0].age} />
      <Person name= {this.state.persons[1].name} age= {this.state.persons[1].age} />
      <Person name= {this.state.persons[2].name} age= {this.state.persons[2].age}/>
      </>
      </div>
    )
  }
}
export default App;