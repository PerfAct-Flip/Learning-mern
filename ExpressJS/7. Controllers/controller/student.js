import express from "express";

//this is a controller file
// all these below are called Controller 
const allStudents = (req,res) => {
    res.send("All Students");
};

const newStudent = (req,res) =>{
    res.send("Create a new user");
};

const updateStudent = (req,res) => {
    res.send("Update student");
};

const removeStudent = (req,res) => {
    res.send("Remove student");
};

export { allStudents, newStudent, updateStudent, removeStudent};