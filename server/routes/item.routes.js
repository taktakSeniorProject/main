const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.post("/addItem/:user_user_id/:bacet_bacet_id/:wishlists_wishlist_id", itemController.addItems);
router.get("/getOne/:id",itemController.getOne)
router.get('/HomePage',itemController.GetItemsToBuy)
module.exports = router;
