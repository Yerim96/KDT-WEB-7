const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "views"));

//post는 request body로 가져와야한다.
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//get방식으로 들어왔을때 res할건데, 응답으로 index파일 랜더링할것이다.
app.get("/", function (req, res) {
  res.render("index"); //응답으로 index파일로 랜더링
});

app.get("/practice26", function (req, res) {
  //   res.send("실습 26번");
  res.render("26");
});

app.get("/practice27", function (req, res) {
  //   res.send("실습 27번");
  res.render("27");
});

app.get("/result26", function (req, res) {
  res.render("result", {
    title: "실습26번 해설입니다.",
    info: req.query,
  });
});
app.get("/login", function (req, res) {
  //   res.send("실습 26번");
  res.render("login");
});

app.get("/axios", function (req, res) {
  res.send(req.query);
});

app.post("/axios", function (req, res) {
  res.send(req.body);
});

app.post("/result27", function (req, res) {
  //27ejs 의 <form action="/result"과 맞춰준것이지, 렌더링 파일과는 관계없음.
  res.render("result", {
    //랜더링파일의 지정은 render에서 중요함.
    title: "실습27 해설입니다.",
    info: req.body,
  });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
