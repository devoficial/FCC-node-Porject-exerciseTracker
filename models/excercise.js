import mongoose from "mongoose";
import shortId from "shortid";
// Schema for users and excercise;
const userSchema = new mongoose.Schema({
    _id:{
        type:String,
        default:shortId.generate
    },
    username:{
        type:String,
        required:"The name cannot be blank"
    }
})

const Users = mongoose.model("Users", userSchema);

const exerciseSchema = new mongoose.Schema({
    description:{
        type:String,
        maxlength:[25,"Description is too long"]
    },
    duration:{
        type:Number,
        min:[1,"Duration cannot be less than 1"]
    },
    date:{
        type:Date,
        default:Date.now()
    },
    username:String,
    userId:{
        type:String,
        index:true
    },
    registerDate:String
})

const Exercises = mongoose.model("Exercises",exerciseSchema);

module.exports = { Users,Exercises }