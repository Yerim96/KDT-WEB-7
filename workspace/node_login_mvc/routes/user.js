const express = require("express");
const controller = require("../controller/user");
const router = express.Router();

//localhost :6060
router.get("/", controller.main);

router.get("/login", controller.login);

module.exports = router;
