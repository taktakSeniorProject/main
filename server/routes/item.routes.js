const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.get("/", itemController.selectAll);
router.get("/getOne/:id",itemController.getOne)
module.exports = router;
