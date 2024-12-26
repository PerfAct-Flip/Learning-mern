// const express = require("express");
// const web = require("./routes/route.js");
// const path = require("path");
import express from "express";
import web from "./routes/route.js";
import { join } from "path";

const app = express();
// app.set("views", "./views");

app.set("view engine", "ejs");


//accessing static files
app.use(express.static(join(process.cwd(), "public")));

app.use("/", web);
app.listen(8000, ()=> {
    console.log("Server Up");
})

//not here
//node terminal
// const path = require("path");
// path.join(process.cwd());
// path.join(process.cwd(), './public/index.html')


//ERROR WITH EJS 