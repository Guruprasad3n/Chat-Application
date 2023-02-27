const express = require("express");
const { registerUser } = require("../Controllers/userController");

const router = express.Router();
// this is on way of writing code in this method we can chain our code Like GET and POST requests
router.route("/").post(registerUser)
// this is the another way of writing code in this way we can not chain the code. we can only write either GET or either POST
// router.post("/login",authUser)


module.exports = router