import mongoose from "mongoose";

//define schema

const StudentSchema = new mongoose.Schema({
    name : { type: String, required: true, trim: true}, //properties
    rollNo : { type : Number, required: true, min: 1, max:50},
    branch: { type: String, required: true, trim:true},
    CGP: { type : mongoose.Decimal128, required: true, validate: v => v> 50},
    review: [ 
        { value: { type: String}, reviewedOn: { type: Date, default: Date.now} },
    ],
})

// creating a model

const StudentModel = mongoose.model("Student", StudentSchema);

// creating a new instance of Student model with data you want to store in document 
const newStudent = new StudentModel({ name: "Soham"});

// saving user in DB

newStudent.save((err) => (err ? console.log(err) : console.log("Student Saved...")));


export default StudentModel;