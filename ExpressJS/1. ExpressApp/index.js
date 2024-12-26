// import express from "express"; //for module

const express = require("express");
const app = express();

app.use((req,res) => {
    res.send("Hello World");
});

app.listen(5000, ()=> console.log("listening on port 5000"));

