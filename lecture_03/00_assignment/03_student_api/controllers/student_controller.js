const allStudents = require("../public/students.json");
module.exports.getAll = function (req, res) {
    res.status(200).json(allStudents);
}

module.exports.getOne = function (req, res) {
    res.status(200).json(allStudents[req.params.studentIndex]);
}