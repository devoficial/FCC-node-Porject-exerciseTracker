import mongoose from "mongoose";
import shortId from "shortid";
// Schema for users and excercise;
const exerciseSchema = new mongoose.Schema({
    _id:{
        type:String,
        default:shortId.generate
    },
    username:{
        type:String,
        required:"The name cannot be blank"
    },
    count:Number,
    logs:[]
})

const Exercise = mongoose.model("Exercise", exerciseSchema);
module.exports = Exercise;