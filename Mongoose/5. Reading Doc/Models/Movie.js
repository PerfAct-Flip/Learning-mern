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


//retreiving Data 
// const allDoc = async () => {
//     try { 
//          const result = await MovieModel.find(); // for all Data 
//          //for iterating - 

//          result.forEach((movie) => {
//           console.log( movie.name, movie.genre);
//          });
//     } catch (error) {
//         console.log(error)
//     }
    
// }

 // single Data 
  
// const singleDoc = async () => {
  
//     try { 
//       const result = await MovieModel.findById('66d15bfe03198171211e6169', 'name') ;
//       console.log(result);
//     } catch (err) { 
//       console.log(err);
//     }
// }


// Docwithfield
const Docwithfield = async () => {
  
  try { 
    const result = await MovieModel.find({ratings: { $gt: 5}}) ; //can use find().skip(n) or find().limit(n) or find().sort({rating: -1}) or find({ money: { $gt : value }}) or find({ money: { $ne : value}}) -> not included or find({ $and: [{money: 220000}, { ratings: 4}],}) or use find( $or: .....)
    console.log(result);
  } catch (err) { 
    console.log(err);
  }
}
// export { allDoc };
// export { singleDoc };
export { Docwithfield };