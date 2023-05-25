const express = require("express");
const controller = require("../controller/visitor");
const router = express.Router();

//localhost:8000/visitor
router.get("/", controller.main);

//localhost:8000/visitor/list
router.get("/list", controller.CgetVisitors);

//localhost:8000/visitor/get?id=N //id가 정수일때.(쿼리스트링)
router.get("/get", controller.CgetVisitor1);

//localhost:8000/visitor/write //방명록생성
router.post("/write", controller.CpostVisitor);

module.exports = router;
