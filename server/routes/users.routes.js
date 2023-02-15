const router = require('express').Router();
const userController = require("../controllers/users.controller");

router.get("/getUser/:email",userController.getOne);
router.post("/addUser", userController.addOne);
router.put("/updateUser/:id",userController.addImguser);
router.post("/getAll",userController.selectAll)
module.exports = router;
