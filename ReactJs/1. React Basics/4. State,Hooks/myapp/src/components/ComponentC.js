
// const ComponentC = ({name}) => {
//     return( 
//         <>
//         <p> This data is coming from ComponentA: {name}</p>
//         </>
//     )
// }
// import { Data } from "../App";
// const ComponentC = () => {
//     return(
//         <>
//         <Data.Consumer>
//             {(name) => {
//                 return <h2> Name: {name}</h2>
//             }}
//         </Data.Consumer>
//         </>
//     )
// }

import { useContext } from "react";
import { Data, Data1 } from "../App";
const ComponentC = () => {
    const userName = useContext(Data); 
    const age = useContext(Data1);
    return (
        <>
        <h3> My name: {userName} and age: {age}</h3>
        </>
    )
}
export default ComponentC;