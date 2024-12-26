const express = require("express");
const app = express();

app.get("/", (req,res) => {
    res.send("<h1>Home🏠</h1>");
});

app.get("/about", (req,res) =>{
    res.send("<h1>About 🗨️</h1>");
});


app.listen(8000, ()=> console.log("Port up at 8000 "));