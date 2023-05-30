const express = require("express");
const controller = require("../controller/user");
const router = express.Router();

//http://localhost:7070/user
router.get("/", controller.main);

//http://localhost:7070/user/singup 회원가입
router.get("/signup", controller.getsignup);

//http://localhost:7070/user/singup 회원가입 데이터 보내주기
router.post("/signup", controller.Cpostsignup);

//http://localhost:7070/user/singin  로그인
router.get("/signin", controller.getsignin);

//http://localhost:7070/user/singin  로그인하기.(회원가입한 데이터를 가지고 로그인)
router.post("/signin", controller.Cpostsignin);

////http://localhost:7070/user/profile 프로필
router.get("/profile", controller.postprofile);

////http://localhost:7070/user/profile 프로필 데이터처리
router.post("/profile", controller.Cpostprofile);

module.exports = router;
