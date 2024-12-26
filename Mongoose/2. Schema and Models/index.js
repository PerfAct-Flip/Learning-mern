import express from "express";
import connectDB from "./db/connectDB.js";
import StudentModel from "./Models/Student.js";
const app = express();
const port = process.env.PORT || 8000;
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/LearningDB';

connectDB(DATABASE_URL);

app.listen(port, ()=> {
    console.log(`server listening at ${port}`);
});


