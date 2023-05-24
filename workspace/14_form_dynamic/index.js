const express = require("express");
const app = express();
const PORT = 8082;

//템풀릿
app.set("view engine", "ejs");

// 다른폴더에 있는 ejs를 사용하고 싶을떄는
app.set();
app.use(express.static(__dirname + "views"));

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//pages
app.get("/", function (req, res) {
  res.render("index");
});

app.get("/ajax", function (req, res) {
  //프론트로부터 데이터처리 요청을 받음
  console.log(req.query);
  //t서버로직 (알고리즘이) 보통들어감.
  //처리한것을 다시 res 응답해줌.
  res.send(req.query);
});

app.get("/axios", function (req, res) {
  res.send(req.query);
});

app.get("/fetch", function (req, res) {
  res.send(req.query);
});

app.post("/ajax", function (req, res) {
  res.send(req.body);
});

app.post("/axios", function (req, res) {
  res.send(req.body);
});

app.post("/fetch", function (req, res) {
  res.send(req.body);
});

//port 생성
app.listen(PORT, function () {
  console.log(`http://localhost${PORT}`);
});
