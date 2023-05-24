//router, model을 구분하지 않은 채 모두 index에 때려넣은 파일.
const express = require("express");
const app = express();
const PORT = 8000;

//view
app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router
//localhost:8000 경로를 사용한다.
const indexRouter = require("./routes/comment");
app.use("/", indexRouter); //"./routes/comment"를 localhost:8000로 지정

//localhost:8000 user를 메인으로 잡음
const userRouter = require("./routes/user");
app.use("/user", userRouter);

// //router 분리 . get방식 위쪽에 작성.(require로 가져올때는 최상단에 두는것이 좋다.)
// //미들웨어, 라우터는 하나의 독립된 기능을 가진 함수
// const indexRoute = require("./routes");
// app.use("/", indexRoute);

// //가상데이터
// const comments = [
//   {
//     id: 1,
//     userId: "helloworld",
//     date: "2023-05-24",
//     comment: "안녕하세요",
//   },
//   {
//     id: 2,
//     userId: "happy",
//     date: "2023-05-23",
//     comment: "반가워요",
//   },
//   {
//     id: 3,
//     userId: "lucky",
//     date: "2023-05-20",
//     comment: "좋은아침입니다.",
//   },
//   {
//     id: 4,
//     userId: "codingon",
//     date: "2023-05-15",
//     comment: "첫 댓글입니다.",
//   },
// ];

// //GET
// app.get("/", function (req, res) {
//   res.render("index");
// });

// app.get("/comments", function (req, res) {
//   console.log(comments);
//   res.render("comments", { commentInfos: comments }); // render함수는 view 엔진에 있는 파일을 뿌려준다.
// });

// app.get("/comment/:page", function (req, res) {
//   //변하는 값이 들어올때 :(콜론)을 작성하고 함수를 작성
//   console.log(req.params);
//   const commentId = req.params.page;

//   console.log(comments[commentId - 1]);

//   if (commentId < 1 || commentId > comments.length) {
//     res.render("404");
//   }

//   if (isNaN(commentId)) {
//     //숫자인지 아닌지 판별
//     res.render("404");
//   }

//   res.render("comment", { commentInfo: comments[commentId - 1] });
// });

//404에러 처리는 맨 밑에 있어야함.
app.get("*", function (req, res) {
  res.render("404");
});

//port
app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
