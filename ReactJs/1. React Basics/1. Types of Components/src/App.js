// Function Component 
function App () { 
  return ( 
  <div> 
    <h1> Helloo, can you hear me.</h1>
    {/* <br/> */}
    <h3> knocking on your .....</h3>
    <form>
      <label htmlFor="name">Name </label>
      <input type ="text" id="name"/>
    </form>
  </div>
  );
}

// we dont use class component much in development as ik as a beginner
// ClassBased Component 
// import { Component } from "react";
// class App extends Component {
//   render() { 
//     return <h1> Yoooo</h1>
//   }
// };
//or 
// class App extends React.Component {};
export default App;