const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();
const port = 8100;

//옵션 객체는 변수이기 때문에 미들웨어 가장 위에 작성해야함
const cookieOption = {
  maxAge: 3000, //maxAge는 시간을 나타냄
};

//쿠키
app.use(cookieParser());

//세션 옵션객체
// app.use(
//   session({
//     secret: "secret key",
//   })
// );

//템플릿
app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));

//post 사용하지 않기 때문에 body-parser 작성 x

//router
app.get("/", (req, res) => {
  //쿠키요청
  res.cookie("key1", "value1", cookieOption); //쿠키 값과 이름을 지어줌 {key:value}와 같음
  res.cookie("lg", "tv", cookieOption);
  // console.log(req.cookies.key1);
  res.render("index", { data: req.cookies.key1, data2: req.cookies.lg });
  //세션설정
  // req.session.user = {
  //   userid: "aser",
  //   name: "홍길동",
  // }; //서버 저장(로그인시 유저정보 저장한다고 가정)
  // res.render("index", { data: req.cookies.key, data2: req.cookies.samsung });
});

//세선확인용
// app.get("/get", (req, res) => {
//   console.log(req.session.user);
// });

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
