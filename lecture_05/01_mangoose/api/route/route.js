const router = require("express").Router();
const controller = require("../controller/game.controllers");
const publisherController = require("../controller/publisher.controller");
const reviewController = require("../controller/reviewsController");
router.route("/games")
    .get(controller.getAll);

router.route("/games/:gameID")
    .get(controller.getOne);

router.route("/games/:gameID/publisher")
    .get(publisherController.getOne);

router.route("/games/:gameID/reviews")
    .get(reviewController.getAll);

router.route("/games/:gameID/reviews/:reviewID")
    .get(reviewController.getOne);
module.exports = router;