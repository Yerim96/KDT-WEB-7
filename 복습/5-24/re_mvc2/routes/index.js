const express = require("express");
const controller = require("../controller/visitor");
const router = express.Router(); //라우터메소드 호출

router.get("/", controller);

module.exports = router;
