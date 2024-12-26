
// Custom hook
// import { useState, useEffect } from "react";

//Normal Method 
// function App () {
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/todos")
//         .then((r)=> r.json())
//         .then((d) =>setData(d));
//     }, []);

//     return (<>
//     {data && data.map((item)=> {
//       return <p key={item.id}>{item.title}</p>
//     })}
//     </>)
// }

// import useFetch from "./useFetch";

// const Home = () => {
//   const [data] = useFetch("https://jsonplaceholder.todos");

//   return (
//     <>
//     {data && data.map((item)=> {
//       return <p key={item.id}>{item.title}</p>
//     })}
//     </>
//   )
// }

// const App = () => {
//   return <Home/>;
// };
// export default App;

//-------------------------------------------------
//Project 1

// import Counter from "./Counter";

// const App = ()=> {
//     return (
//         <>
//         <Counter/>
//         </>
//     )
// }

//Project 2
// import Todo from "./Todo";

// const App = ()=> {
//     return (
//         <>
//         <Todo/>
//         </>
//     )
// }


// Project 3
// import Main from "./Meal/Meal";


// const App = () => {
//     return (
//         <>
//         <Main/>
//         </>
//     )
// }


// Project 4 
// import ToggleBackgroundColor from "./Day-Night-Mode/Day-Night-Mode";


// const App = () => {
//     return (
//         <>
//         <ToggleBackgroundColor/>
//         </>
//     )
// }


//Project 5 
// import Testimonials from "./testimonials/Testimonials";


// const App = () => {
//     return (
//         <>
//         <Testimonials/>
//         </>
//     )
// }

//project 6
// import Accordion from "./Accordion/Accordion";
// import { accordionData } from "./Accordion/content";

// const App = () => {
//   return (
//     <div>
//       <div className="accordion">
//         {accordionData.map(({ title, content }) => (
//           <Accordion title={title} content={content} />
//         ))}
//       </div>
//     </div>
//   );
// };

import Main from "./form/form";
const App = () => {
return (
  <Main/>
)
}
export default App;