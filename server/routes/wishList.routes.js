const router = require('express').Router();
const wishListcontroller = require("../controllers/wishList.controller");

router.get("/:id", wishListcontroller.getWishList);
router.post("/:userId/:itemId", wishListcontroller.addToWishList);
router.delete("/:userId/:itemId", wishListcontroller.deleteItemFWL);
router.delete("/:id", wishListcontroller.deletAllItemFWL);
module.exports = router;