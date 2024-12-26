const express = require("express");
const app = express();



app.get("/", (req, res) => res.send("Single Callback"));


app.get("/double-cb", (req,res,next) => {
    console.log("first callback");
    next();
}, (req,res) => {
    res.send("second callback")
});



app.listen(8000, ()=> console.log("Port up at 8000 "));