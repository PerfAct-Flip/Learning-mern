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


//creating model data
const createDoc = async () => {
    try { 
        //new  doc
        const student1 = new StudentModel({
            name : "Skai",
            rollNo: 17,
            branch: "aiml",
            CGP: 70.1,
            review: [ { value: "he is a good student and passionate about learning new things but doesnt work"}]
        })

        const result = await student1.save()
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

export { createDoc };