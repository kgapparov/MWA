const userController = require("../controller/userController");
const router = require("express").Router()
//Uer api     
router.route("")
    .post(userController.addUserOne)
    .get(userController.blank);

router.route("/:userID")
    .get(userController.blank)
    .delete(userController.blank)
    .put(userController.blank)
    .patch(userController.blank)

module.exports = router;