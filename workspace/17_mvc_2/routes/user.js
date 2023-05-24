const express = require("express");
const controller = require("../controller/user");
const router = express.Router();

//localhost:8000/user
router.get("/", controller.user);
//localhost:8000/user/age
// router.get("/age", 컨트롤러함수);

module.exports = router;
