const express = require("express");
const controller = require("../controller/main");
const router = express.Router();

// "/", "/comments", "/comment/:page"

// app.get("/comments",<--여기까지 router ,   controller로 분리--> function (req, res) {
//   console.log(comments);
//   res.render("comments", { commentInfos: comments }); // render함수는 view 엔진에 있는 파일을 뿌려준다.
// });

//localhost :8000
router.get("/", controller.main);

//localhost:8000/comments
router.get("/comments", controller.comments);

//localhost:8000/comment/:page
router.get("/comment/:page", controller.comment);

module.exports = router;
