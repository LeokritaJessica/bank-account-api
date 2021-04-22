//Import dependencies
const router = require("express").Router();

//Controller
const { myBankController } = require("../controllers");

//Routes

router.post("/bank", myBankController.add);
router.get("/bank", myBankController.browse);

//Module exports
module.exports = router;
