const express = require("express");
const app = express();


//Array of callbacks
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


//passing array of callbacks -

app.get("/array-cb", [cb1,cb2,cb3]);
app.listen(3000, ()=> console.log("Port up at 3000 "));