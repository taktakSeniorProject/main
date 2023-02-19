const router = require('express').Router();
const useritems = require("../controllers/accrelatedcontrollers");


router.get("/itemofuser/:user_id",useritems.itemofuser)
router.post("/additem/:user_id",useritems.additem)
router.delete("/deleteitem/:id",useritems.deleteitem)
router.put("/edititems/:id",useritems.edititems)
router.get("/usersinfo/:user_id",useritems.usersinfo)
router.put("/useredit/:user_id",useritems.useredit)
module.exports = router;