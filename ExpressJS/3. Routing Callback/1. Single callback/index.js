const express = require("express");
const app = express();



app.get("/", (req, res) => res.send("Single Callback"));



app.listen(8000, ()=> console.log("Port up at 8000 "));