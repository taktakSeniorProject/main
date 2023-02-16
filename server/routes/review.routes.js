const router = require('express').Router();
const reviewController = require("../controllers/reviews.controller");

router.post('/comment/:idUser',reviewController.PostComment)
router.post('/rating/:idUser',reviewController.PostRating)
router.get('./comment/:iduser',reviewController.getComments)
router.get('./rating/:iduser',reviewController.getReview)
module.exports = router;