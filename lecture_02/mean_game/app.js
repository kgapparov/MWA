const app = require("express");
const path = require("path");

app.use("/public", express.static(path.join(__dirname, "public")));
