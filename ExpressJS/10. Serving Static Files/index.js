const express = require("express");
const path = require("path");

const app = express();

//accessing files in public directory
app.use(express.static("./public"));

app.get("/", (req,res)=> {
    res.sendFile(path.resolve(__dirname, "./public/index.html"))
});!

app.listen(8000, ()=> {
    console.log("Server Up");
})



//node terminal
// const path = require("path");
// path.join(process.cwd());
// path.join(process.cwd(), './public/index.html')

