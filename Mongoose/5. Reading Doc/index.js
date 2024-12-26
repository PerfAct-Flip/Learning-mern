import express from "express";
import connectDB from "./db/connectDB.js";
// import { allDoc } from "./Models/Movie.js";
// import { singleDoc } from "./Models/Movie.js";
import { Docwithfield } from "./Models/Movie.js";
const app = express();
const port = process.env.PORT || 8000;
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/LearningDB';

connectDB(DATABASE_URL);
// allDoc();
// singleDoc();
Docwithfield();
app.listen(port, ()=> {
    console.log(`server listening at ${port}`);
});

