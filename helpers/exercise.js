const db = require("../models");
// Creating a user based on form data



exports.createUser = (req,res) => { 
    db.Exercise.create({username:req.body.username})
    .then(newUser => res.json({
        username:newUser.username,
        _id:newUser._id
    }))
    .catch(err => {
        console.log(err)
        res.send(err);
    })
}
// Getting all users
exports.findUsers = (req,res) => {
    db.Exercise.find({})
    .then(datas => {
        const users = datas.map(el => {
            return {
                username:el.username,
                _id:el._id
            }
        })
        res.json(users)
    })
    .catch(err => res.send(err));
}

// Adding exercises to a specific user
exports.addExercises = (req,res) => {
    let  date;
    let obj;
    if(req.body.date){
        const dateconv = new Date(req.body.date).toUTCString();
        if(dateconv === "Invalid Date"){
            res.json({err:"wrong date format"})
        }else{
            date = dateconv;
            obj = {
                duration:Number(req.body.duration),
                description:req.body.description,
                date:date
            }
            exercises(obj)
        }
    }else{
        date = new Date().toUTCString();
        const obj = {
            duration:Number(req.body.duration),
            description:req.body.description,
            date:date
        }
        exercises(obj)
    }
    
    
    function exercises(obj){
       return db.Exercise.findByIdAndUpdate({_id:req.body.userId},
            {$push: {logs: obj}}, {new:true})
        .then(data => {  
            res.json(data);
          })
        .catch(err => console.log(err))
    }
    
}

// Getting the logs of an particular userSelect
exports.logsOfUser = (req,res) => {
    const id = req.params.userId;
    db.Exercise.findOne({_id:id})
    .then(data => {
        res.json({
            exercises:data.logs,
            count:data.logs.length
        })
    })
    .catch(err => {
        res.send(err);
    })
}

// Getting the values by parsing the queries

module.exports = exports;