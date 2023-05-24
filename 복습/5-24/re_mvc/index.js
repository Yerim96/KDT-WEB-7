const express = require("express");
const app = express();
const port = 8000;

//view
app.set("view engine", "ejs"); //템플릿 엔진
app.use("/views", express.static(__dirname + "/views")); //미들웨어.정적 파일 제공

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router 분리.
const indexRoute = require("./routes");
app.use("/", indexRoute);

//404에러

app.get("*", function (req, res) {
  res.render("404");
});

//port
app.listen(port, function () {
  console.log(`http:/localhost:${port}`);
});

// const express = require("express"); //express모듈 불러오기
// const app = express(); //app함수 호출, 애플리케이션의 객체를 생성한다.
// //app 객체는 서버의 역할을 하며 여러 기능을 설정하고 라우팅을 정의하는데 사용한다.
// const PORT = 8000;

// //템플릿 엔진을 설정합니다. 주로 HTML을 동적으로 생성하기 위해 사용
// app.set("view engine", "ejs");

// //app.use메소드로 미들웨어 설정. 정적파일 제공
// app.use("/views", express.static(__dirname + "/views"));

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// const indexRoute = require("./routes");
// app.use("/", indexRoute);

// //GET
// // app.get("/", function (req, res) {
// //   res.render("index");
// // });

// //404에러
// app.get("*", function (req, res) {
//   res.render("404");
// });

// //port
// app.listen(PORT, function () {
//   console.log(`http://localhost:${PORT}`);
// });
