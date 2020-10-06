import React from "react"

// class Person extends Component{
//    render(){
//     return(
//         <>
//         <h1>hello yadav</h1>
//         <ul>
//             <li>banana</li>
//             <li>apple</li>
//             <li>hello gulshan yadav</li>
//             <li>hello sudarshan yadav</li>
//             <li>hello mumma</li>
//             <li>hello papa</li>
//         </ul>
//         </>
//     )

//    } 
// }

const Person  = (props) =>{
    return (
        <>
        <h1>`hello my name is {props.name} and i am year {props.age} old`</h1>
        <p>{props.children}</p>
        <h2>{props.hobbies}</h2>
        </>
    )
}

export default Person;