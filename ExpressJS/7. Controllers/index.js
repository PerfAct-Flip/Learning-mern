import express from "express";
import students from './routes/student.js';
const app = express();


app.use('/students', students);
app.listen(8000, ()=> {
    console.log("Server up at port 8k");
})