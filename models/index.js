import mongoose from "mongoose";
import mongodb from "mongodb";
mongoose.set("debug",true)
mongoose.Promise = Promise;
mongoose.connect("mongodb://devofficial:imdev1996@ds125453.mlab.com:25453/fccdata")



module.exports.Exercise = require("./excercise");