const routes = require("express").Router();
const gameController = require("../controller/gameController");

routes.route("/games/:gameID")
    .get(gameController.getOne)
    .delete(gameController.deleteOne)

routes.route("/games")
    .get(gameController.getAll)
    .post(gameController.addGame)

module.exports = routes;