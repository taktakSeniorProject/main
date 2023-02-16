const router = require('express').Router();
const reviewController = require("../controllers/reviews.controller");

router.post('/review/:idUser',reviewController.POstReview)
router.get('/comment/:iduser',reviewController.getComments)
router.get('/rating/:iduser',reviewController.getReview)
module.exports = router;