import express from "express";
let router = express.Router();
let helpers  = require("../helpers/exercise");

// Get all the users from the database
router.route("/users")
.get(helpers.findUsers);

// Register a user
router.route("/new-user")
.post(helpers.createUser);

// add excercise for a specific user
router.route("/add")
.post(helpers.addExercises);

// Get logs of a single user
router.route("/log?")
.get(helpers.logsOfUser);

// Get details of a user acording to the query
// The query may include userId, from and to date and limit
router.route("/log?")
.get(helpers.userDetails);



module.exports = router;