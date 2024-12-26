// Function Component 
// function App1 () { 

//   // for experssions :-
//   // const myName = "skai";
//   // const muptiply = (a,b) => a*b;
//   // const specialClass = "skai-Class";



//   //for Loops example :-
//   // const numbers = [1,2,3,4,5];
//   // const userInfo =[{
//   //   username: "Skai",
//   //   email: "skaiwalker@mymail.com",
//   //   location: "UK"
//   // },
//   // {
//   //   username: "Soham",
//   //   email: "soham@mymail.com",
//   //   location: "India"
//   // },
//   // {
//   //   username: "Plasma",
//   //   email: "plasma@mymail.com",
//   //   location: "aus"
//   // },
//   // {
//   //   username: "Flip",
//   //   email: "flip@mymail.com",
//   //   location: "alien"
//   // },]

//   return ( 
//     // fragments <></>
//   <> 
//     {/* <h1> Helloo, can you hear me.</h1>
//     <br/>
//     <h3> knocking on your .....</h3>
//     <form>
//       <label htmlFor="name">Name </label>
//       <input type ="text" id="name"/>
//     </form> */}

//     {/* EXPRESSIONS  */}
//     {/* expressions in reactjs  expressions are just js file wriiten in raect js, they are written inside `{}`  */}
//     {/* <h1>{myName}</h1>
    
//     <p> 3 * 2 = {muptiply(3,2)}</p>
//     <p>MyFriendsList: {["skai", "soham"]}</p>
//     <p className={specialClass}> This is under speacial class </p> */}

//     {/* Lists Example - */}
//     {/* {numbers.map((number) => (
//       <ul key= {Math.random() * 10}>
//         <li>{number}</li>
//       </ul>
//     ))} */}

//     {/* {userInfo.map( user => (
//       <ul key={Math.random()*20}>
//         <li>Name: {user.username}</li>
//         <li>Email: {user.email}</li>
//         <li>Location: {user.location}</li>
//       </ul>
//     ))} */}


//   </>

//   );

//   }

// Props/ Properties

// const User = (props)=> {
//   console.clear();
//   console.log(props);
//   return <>
//   <section>Name : {props.name}</section>
//   <section>Age : {props.age}</section>
//   <section>Hobbies : {props.hobbies.map((hobby)=> (
//      <ul key={Math.random()*10}>
//      <li> {hobby} </li>
//    </ul>
//   ))}
//   </section>
//   </>

// }
// function App() {
//   return <>
//   <User 
//   name="Skai"
//   age = {18}
//   hobbies = {["coding", "music", "sleeping"]}
//   />
//   </>
// }


//other method to use prop
// import User from "./components/User";
// function App() {
//   return <>
//   <User 
//   name="Skai"
//   age = {18}
//   hobbies = {["coding", "music", "sleeping"]}
//   />
//   </>
// }


// // export default App1;
// export default App;


//Props Children

// import User from "./components/User";

// function App() {
//   return <>
//   <User 
//   name = "Skai"
//   age = { 18}
//   hobbies = {["coding", "music", "sleeping"]}>

//   <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae inventore velit dolorum in impedit ullam quisquam placeat magnam? Ad optio sunt at delectus nostrum, necessitatibus ipsam quas ipsa doloremque est, eius odio maiores aliquid?</p>
//  </User>
//   </>
// }

// export default App;


// import Password from "./components/PasswordCheck";
// import Cart from "./components/Cart";
// import Password from "./components/TernaryPasswordCheck";

// function App(){
//   return (<>
//   <Password isValid={true}/>
//   <Cart/>
//   </>)
// }
// import "./index.css";
// import Button from 'react-bootstrap/Button';

// function App() {
//   // const diffStyles = {
//   //   color: "white",
//   //   // backgroundColor: "crimson"
//   //   backgroundColor: "teal",
//   //   padding: "5px"
//   // }
//   return (
//     <>
//     {/* <h1 style={{color: "black", backgroundColor: "#ccc"}}>Hello! Welcome to Skai World</h1> */}
//     {/* <h1 style={{color: diffStyles.color, backgroundColor: diffStyles.backgroundColor, padding: diffStyles.padding }}>Hello! Welcome to Skai World</h1> */}
//     {/* <h1>Hello! Welcome to Skai World</h1> */}
     
//     </>
//   )
// }


//EVENTS

// const Button = ()=> {
//   const handleClick = () => {
//     console.log("you clicked")
//   }
//   return <button onClick={handleClick}>Click</button>;
// }

// const ReadMore = () => {
//   const copyHandler = ()=> {
//     alert("stop it💀")
//   }
//   return <p onCopy={copyHandler}> lorem34</p>;
// }
// function App(){
//   return (
//     <>
//     <ReadMore/>
//     <Button/>
//     </>
//   );
// }

// useState()

// import { useState } from "react";
// const Counter = () => {
//   const [count, setCount] = useState(0);
//   const increment = () => {
//     setCount(count + 1);
//   }
//   const decrement = () => {
//     setCount(count - 1);
//   }
//   return (
//     <>
//     <h1>{count}</h1>
//     <button onClick={increment}>+</button>
//     <button onClick={decrement}>-</button>
//     </>
//   )
// }

// function App() {
//   const [friends, setFriends] = useState(["Alex","Flip"]);

//   const addOne = () => {
//     setFriends([...friends, "Skai"]);
//   }

//   const removeOne = () => {
//     setFriends(friends.filter((f)=> f !== "Alex"))
//   }
//   const updateOne = () => { 
//     setFriends(friends.map((f) => (f === "Alex" ? "Alex Smith" : f)))
//   }
//   return <>
//   {/* <Counter/> */}
//   {friends.map((f)=> (
//     <li key={Math.random(10)}> {f} </li>
//   ))}
// a
//   <button onClick={addOne}> Add One </button>
//   <button onClick={removeOne}> Remove One </button>
//   <button onClick={updateOne}> Update One </button>
//   </>;
// }



// using useState() for objects

import { useState } from "react";

const App = () => {
  const [movie, setMovie] = useState({
    title: "Avengers",
    ratings: 9,
  });


const handleClick = () => {
  setMovie({...movie, ratings: 5});
};

return (
  <>
  <div>
    <h1>{movie.title}</h1>
    <p>{movie.ratings}</p>
    <button onClick={handleClick}>rating  </button>
  </div>
  </>
)
}
export default App;
