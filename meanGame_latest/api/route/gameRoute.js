const router = require("express").Router();
const gameController = require("../controller/game.controllers");
const publisherController = require("../controller/publisher.controller");
const reviewController = require("../controller/reviewsController");

router.route("")
    .get(gameController.getAll)
    .post(gameController.insertOne);

router.route("/:gameID")
    .get(gameController.getOne)
    .put(gameController.fullUpdateOne)
    .patch(gameController.partialUpdateOne)
    .delete(gameController.deleteOne);

router.route("/:gameID/publisher")
    .get(publisherController.getOne)
    .post(publisherController.addOne)
    .put(publisherController.fullUpdateOne)
    .patch(publisherController.partialUpdateOne)
    .delete(publisherController.deleteOne);

router.route("/:gameID/reviews")
    .get(reviewController.getAll);

router.route("/:gameID/reviews/:reviewID")
    .get(reviewController.getOne);

module.exports = router;