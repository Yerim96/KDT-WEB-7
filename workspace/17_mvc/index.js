const express = require("express");
const app = express();
const PORT = 8000;

//view
app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router 분리 . get방식 위쪽에 작성.(require로 가져올때는 최상단에 두는것이 좋다.)
//미들웨어, 라우터는 하나의 독립된 기능을 가진 함수
const indexRoute = require("./routes");
app.use("/", indexRoute);

//GET
app.get("/", function (req, res) {
  res.render("index");
});

//404에러 처리는 맨 밑에 있어야함.
app.get("*", function (req, res) {
  res.render("404");
});

//port
app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
