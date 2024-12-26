//Blocking Code
// console.log("Start");
// alert("block");
// console.log("End");

//Non Blocking Code

// console.log("Start");
// setTimeout(()=> {
//     alert('Non-Blocking')
// }, 1000)

// console.log("End");

//Without Callback 
import fs from "fs";

console.log("Start");

fs.readFile("test.txt", "utf-8", (err,res)=> {
    err ? console.log(err) : console.log(res);
});

console.log('End');