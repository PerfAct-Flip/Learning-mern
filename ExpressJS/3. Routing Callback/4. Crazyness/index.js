const express = require("express");
const app = express();


//Crazyness - 
const cb1 = (req,res,next) =>{
    console.log("First callback");
    next();
};
const cb2 = (req,res,next) =>{
    console.log("Second callback");
    next();
};
const cb3 = (req,res) =>{
    console.log("Third callback");
    res.send("array of callbacks back in terminal 👀");
}


app.get("/crazyness", [cb1,cb2], 
    (req,res,next) => {
        console.log("third callback");
        next();
}, (req,res) => {
    console.log("Fourth callback");
    res.send("Combination of indepedent function and array of functions")
});
app.listen(3000, ()=> console.log("Port up at 3000 "));