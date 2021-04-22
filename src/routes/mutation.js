//Import dependencies
const router = require("express").Router();

//Controller
const { mutationController } = require("../controllers");

//Routes

router.post("/mutation", mutationController.add);
router.get("/mutation", mutationController.browse);


//Module exports
module.exports = router;
