import express from "express";

const app = express();

// Route Parameters - 
// Getting Route params 

// app.get("/student/:id", (req,res)=> {
//     console.log(req.params);
//     const { id } = req.params;
//     res.send(`Student no is ${req.params.id}`);
// });

// app.get("/student", (req,res)=> {
//     res.send("Student list...");
// })
//Destructuring Route Params

// app.get("/student/:id", (req,res)=> {
//     const { id } = req.params;
//     res.send(`Student no : ${id}`);
// })

// Passing multiple parameters - 

// app.get("/student/:id/:branch", (req,res)=> {
//     const { id, branch } = req.params;
//     res.send(` Student id is ${id} and their branch is ${branch}`)
// });

//Complexity - 

// app.get("/student/dob/:day/:month/leapyear?/:year", (req,res) => {
//     const { day, month, year } = req.params;
//     res.send(`Student DOB: ${day}/${month}/${year}`);
// });


//using app.param function

app.param("id", (req,res,next,year) => {
    const { id} = req.params;
    console.log(`id: ${id}`);
    next();
});

app.get("/user/:id", (req,res)=> {
    console.log("This is User id path");
    res.send("Response : OK");
})



app.listen(8000, () => console.log("Server Up!"));
