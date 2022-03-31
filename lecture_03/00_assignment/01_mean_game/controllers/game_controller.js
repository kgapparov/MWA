const allGames = require("../public/games.json");
module.exports.getAll = function (req, res) {
    res.status(200).json(allGames);
}