import mongoose from "mongoose";

mongoose.set("debug",true)
mongoose.Promise = Promise;
mongoose.connect("mongodb://devofficial:imdev1996@ds125453.mlab.com:25453/fccdata", { useNewUrlParser: true })

import {Users, Exercises} from "./excercise";

module.exports = {Users,Exercises}
