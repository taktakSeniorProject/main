const router = require('express').Router();
const useritems = require("../controllers/accrelatedcontrollers");


router.get("/itemofuser/:user_id",useritems.itemofuser)
router.post("/edititems/:user_id",useritems.edititems)


module.exports = router;