import express from "express";
import { allStudents, newStudent, updateStudent, removeStudent } from "../controller/student.js";



const router = express.Router();

router.get("/all", allStudents);
router.post("/create", newStudent);
router.put("/update", updateStudent);
router.put("/delete", removeStudent);

//imstead of all this cluter 
// router.get('/all', (req,res)=>res.send("All students"));
// router.post('/create', (req,res)=>res.send("Create students"));
// router.put('/update', (req,res)=>res.send("Update students"));
// router.delete('/remove', (req,res)=>res.send("Remove students"));

export default router;