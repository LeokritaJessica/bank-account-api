//Import dependencies
const router = require("express").Router();

//Controller
const { accountController } = require("../controllers");

//Routes

router.post("/account", accountController.add);
//Module exports
module.exports = router;
