const router = require('express').Router();
const itemController = require("../controllers/item.controller");

// router.get("/", itemController.selectAll)
router.get('/',itemController.GetItemsToBuy)
router.post('/')
module.exports = router;