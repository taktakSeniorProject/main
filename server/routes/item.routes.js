const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.get("/", itemController.selectAll);
router.get("/getOne/:id",itemController.getOne)
router.get("/getallpostsofoneUser/:id",itemController.getallpostsofoneUser)
router.get("/GetItemsToBuy",itemController.GetItemsToBuy)
router.delete("/deleteIteam",itemController.deleteIteam)
router.post("/addanitemtouser",itemController.addanitemtouser)
router.patch("/",itemController.k)
module.exports = router;
