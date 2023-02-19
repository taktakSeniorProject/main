const router = require('express').Router();
const itemController = require("../controllers/item.controller");

// router.get("/", itemController.selectAll)
router.get('/',itemController.GetItemsToBuy)
router.post("/addItem/:id",itemController.addItem)
router.post("/whishlist/:userId/:itemId",itemController.addToWishList)
module.exports = router;