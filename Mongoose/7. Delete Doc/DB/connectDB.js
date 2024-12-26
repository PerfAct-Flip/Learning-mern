import mongoose, { connect } from "mongoose";
 const connectDB = async (DATABASE_URL) => {
    try { 
        await  mongoose.connect(DATABASE_URL);
        console.log("DB connected...");
    } catch (err) { 
        console.log("Connnected Successfully..");

    }

 }

 export default connectDB;