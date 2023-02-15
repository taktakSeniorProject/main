const router = require('express').Router();
const cartController = require("../controllers/cart.controller");


router.get("/", cartController.selectAll);
router.get("/relation/:id", cartController.selectAllWithRelation);
router.post("/", cartController.selectAll);


module.exports = router ;