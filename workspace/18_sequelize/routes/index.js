const express = require("express");
const controller = require("../controller/visitor");
const router = express.Router();

//localhost:ROPT
router.get("/", controller.index);

//localhost:8000/visitor/list
router.get("/list", controller.CgetVisitors);

//localhost:8000/visitor/get?id=N //id가 정수일때.(get뒤에 쿼리스트링)
router.get("/get", controller.CgetVisitor1);

//get localhost:8000 /visitor/:id  //params 변수 (그냥 하나 가져옴)
//바로 다이렉트로 :를 이용해 보내주는것보다 페이지를 통해 가져오는것이 좋긴하다. /pageLid
//params는 와일드카드 형식이기 때문에  라우터 순서가 중요함..
router.get("/:id", controller.CgetVisitor2);

//localhost:8000/visitor/write //방명록생성
router.post("/write", controller.CpostVisitor);

//localhost:8000/visitor/edit //수정
router.patch("/edit", controller.CpatchVisitor);

//delete localhost:8000/visitor/delete
router.delete("/delete", controller.CdeleteVisitor);
module.exports = router;
