import mongoose from "mongoose";

//define schema

const MovieSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    ratings: { type: Number, required: true, min: 1, max: 5 },
    money: {
      type: mongoose.Decimal128,
      required: true,
      validate: (v) => v >= 10,
    },
    genre: { type: Array },
    isActive: { type: Boolean },
    comments: [
      { value: { type: String }, publish: { type: Date, default: Date.now } },
    ],
  });

// creating a model

const MovieModel = mongoose.model("Movie", MovieSchema);


// updating Data
const deleteById = async () => {
  
  try { 
    // const result = await MovieModel.findByIdAndDelete('66d15bfe03198171211e6167');
    //or 
    const result = await MovieModel.deleteOne({ name:
      `Transformers: Rise of the Beasts` });
    
    console.clear();
    console.log(result);
  } catch (err) { 
    console.log(err);
  }
}
export { deleteById };