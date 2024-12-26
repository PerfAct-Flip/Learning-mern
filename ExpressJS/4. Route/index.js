const express = require("express");
const app = express();


//Normal ugly code
// app.get("/student", (req, res) => res.send("All Students"));

// app.post("/student", (req, res) => res.send("Add New Students"));

// app.put("/student", (req, res) => res.send("Update Students"));

// app.delete("/student", (req, res) => res.send("delete Students"));

//Refactor
app.route("/student")
.get((req, res) => res.send("All Students"))
.post((req, res) => res.send("Add Student"))
.put((req, res) => res.send("Add Student"))
.delete((req, res) => res.send("Delete Student"));



app.listen(8000, ()=> console.log("Server 8000"));