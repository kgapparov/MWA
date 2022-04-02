const router = require("express").Router();
const studentController = require("../controller/student.controller");
const courseController = require("../controller/courses.controller");

router.route("/students")
    .get(studentController.getAll);

router.route("/students/:studentID")
    .get(studentController.getOne);

router.route("/students/:studentID/courses")
    .get(courseController.getAll);

router.route("/students/:studentID/courses/:courseID")
    .get(courseController.getOne);

module.exports = router;