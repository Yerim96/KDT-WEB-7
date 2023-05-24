const express = require("express");
const controller = require("../controller/visitor");
const router = express.Router();

router.get("/", controller.main); //controller.main에게 도메인 경로 전달
router.get("/visitor", controller.getVisitors);
module.exports = router;
