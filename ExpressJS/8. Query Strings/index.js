const { captureRejectionSymbol } = require("events");
const express = require("express");
const app = express();

//Query String
// app.get("/product", (req,res)=> {
//     res.send(`Response : OK , ${req.query.category}`);
// });


//Destructuring 

// app.get("/product", (req, res)=> {
//     const { category } = req.query;
//     res.send(`Product Category : ${category}`);
// });


//Multiple Query String 

app.get("/product", (req, res)=>{
    const { category, id } = req.query;
    res.send(`Product ID: ${id} & Product category : ${category}`);
});

app.listen(8000, ()=> {
    console.log("Server up");
});


