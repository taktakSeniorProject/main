const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.get("/", itemController.selectAll);
router.get("/getOne/:id",itemController.getOne)
router.get('/HomePage',itemController.GetItemsToBuy)
module.exports = router;
