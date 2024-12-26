import express from "express";
import web from "./routes/route.js";
import bodyParser from "body-parser";
const app = express();

app.set("view engine", "ejs");
app.use("/", web);

app.use(bodyParser.json());
app.post("/post", (req,res)=> {
    const { name, branch, rollNo } = req.body;
    res.send(`${name} ${branch} ${rollNo}`);
});

app.listen(8000, ()=> {
    console.log("server up");
});