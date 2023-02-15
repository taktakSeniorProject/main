const router = require('express').Router();
const reviewController = require("../controllers/reviews.controller");

router.post('/',reviewController.PostReview)
module.exports = router;