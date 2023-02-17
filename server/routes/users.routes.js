const router = require('express').Router();
const userController = require("../controllers/users.controller");
const jwt=require("jsonwebtoken");
const dot=require('dotenv')
dot.config()
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    console.log("mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm",authHeader)
    const token = authHeader && authHeader.split(" ")[1]
    if (token == null) return res. sendStatus(401)
    jwt. verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res. sendStatus(403)
     req.user = user
      next()
    })
}
router.get("/getUser/",authenticateToken,userController.getOne);
router.post("/addUser", userController.addOne);
router.put("/updateUser/:id",userController.addImguser);
router.post("/getAll",userController.selectAll)
router.put('/mofifyUser/:id',userController.modifyUser)
router.get('/getUserId/:email',userController.getUserId)
module.exports = router;