//Import dependencies
const router = require("express").Router();

//Controller
const { usersController } = require("../controllers");

//Routes

router.post("/register", usersController.register);
//Module exports
module.exports = router;
