const express = require("express");
const controller = require("../controller/visitor"); //mvc 폴더 접근
const router = express.Router();

// router.get("/",컨트롤러에서 만든 모듈함수);
router.get("/", controller.main);
router.get("/visitor", controller.getVisitor);

module.exports = router; //router 내보내기
