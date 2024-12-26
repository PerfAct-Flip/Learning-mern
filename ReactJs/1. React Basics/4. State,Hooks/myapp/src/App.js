// import { useEffect, useState } from "react";

//Controlled Form Component
// const Form = () => {
//   const [username, setUsername] = useState("");

//   const handleChange = (evt) => {
//     setUsername(evt.target.value);
//   };

//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     alert(`you typed: ${username}`);
//     setUsername("");
//   };

//   return (
//     <div>
//       <h1> Form</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={username} onChange={handleChange} />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// };

// useEffect()

// function App(){
// const [value, setValue]= useState(0);

// 1. render for the first time
// 2. Anytime we do (side effect) useEffect will be initiated
// 3. Dependency List- cant use useffect inside a conditional statement
// useEffect(()=>{
//   console.log("h");
//   document.title = `increment (${value})`
// }, [value])

// another example
// const [data,setData] = useState([]); //empty array

// useEffect(()=> {
//   async function getData() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//     const data = await response.json();
//     if(data && data.length) setData(data)
//   }
// getData()
// }, [])

// return (
// <>
// <h1> {value} </h1>
// <button onClick={()=> setValue(value +1)}> Click Here</button>
// </>
//     <>
//     <ul> {data.map((item) => (
//       <li key= {Math.random() *10}> {item.title} <p> {item.data}</p> </li>
//     ))}</ul>
//     </>
//   )
// }

// function App() {

//   return (
//   <section>
//     <Form/>
//   </section>);
// }
//Prop Drilling
// import ComponentA from "./components/ComponentA";
// function App() {
//   const name = "Flip"
//   return (
//     <>
//         <ComponentA name={name}/>
//     {/* <ComponentB/> */}
//     </>
//   )
// }

// Context API
//1. import (createContext)

// import ComponentC from "./components/ComponentC";
// import { createContext } from "react";
// import ComponentC from "./components/ComponentC";
// //2. Creating instance of (createContext)
// export const Data = createContext();
// function App() {
//   const name = "Flip"
//   return (
//     //3. Wrap our component into Provider Component
//     <>
//       <Data.Provider value={name}>
//         <ComponentC/>
//       </Data.Provider>

//     {/* <ComponentB/> */}
//     </>
//   )
// }

// import { createContext } from "react";
// import ComponentC from "./components/ComponentC";

// export const Data = createContext();
// export const Data1 = createContext();
// function App() {
//   const name = "Flip";
//   const age = 18;
//   return (

//     <>
//       <Data.Provider value={name}>
//         <Data1.Provider value={age}>
//         <ComponentC/>
//         </Data1.Provider>
//       </Data.Provider>

//     {/* <ComponentB/> */}
//     </>
//   )
// }

// import { useReducer } from "react";
// //state:
// //dispatch: [value,setValue]
// //reducer: custom state Logic
// // initialState: {}
// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return <>
//   <h1>{state.count}</h1>
//   <button onClick={()=> { dispatch({type: "increment"})}}>+</button>
//   <button onClick={()=> { dispatch({type: "decrement"})}}>-</button>
//   <button onClick={()=> { dispatch({type: "reset"})}}>Reset</button> 
//   </>;
// }

// const initialState = { count: 0 };
// const reducer = (state, action) => {
//   switch ((action.type)) {
//     case "increment":
//       return {
//         ...state,
//         count: state.count + 1,
//       };
//     case "decrement":
//       return {
//         ...state,
//         count: state.count - 1,
//       };
//     case "reset":
//       return {
//         ...state,
//         count: 0,
//       };
//     default:
//       return state;
//   }
// };

// Using useRef

// import { useRef } from "react";

// function App(){
//   const inputElement = useRef(null);

//   const focusInput = () => {
//     inputElement.current.focus();
//     inputElement.current.value = "Flip";
//   }

//   return (<>
//     <input type="text" ref={inputElement}/>
//     <button onClick={()=> focusInput()}>Focus and Write</button>
//     </>)
// }


// export default App;
