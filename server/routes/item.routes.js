const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.get("/", itemController.selectAll);
router.get("/getOne/:id",itemController.getOne)
router.post("/addUser", itemController.addOne);
module.exports = router;
