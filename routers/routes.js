import express from "express";
let router = express.Router();
let helpers  = require("../helpers/exercise");


router.route("/users")
.get(helpers.findUsers);

router.route("/new-user")
.post(helpers.createUser);

router.route("/add")
.post(helpers.addExercises);

router.route("/log/:userId")
.get(helpers.logsOfUser);

module.exports = router;