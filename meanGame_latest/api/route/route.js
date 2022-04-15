const gameRouter = require("./gameRoute");
const userRouter = require("./userRoute");
const router = require("express").Router();


router.use("/users",  userRouter);
router.use("/games", gameRouter);

module.exports = router;