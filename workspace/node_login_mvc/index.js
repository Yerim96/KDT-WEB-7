const express = require("express");
const app = express();
const PORT = 6060;

//템플릿
app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 임시 database 변수
// const id = "banana";
// const pw = "4321";

const indexRouter = require("./routes/user");
app.use("/user", indexRouter);
// app.get("/", function (req, res) {
//   res.render("index");
// });

// app.post("/login", (req, res) => {
//   console.log(req.body);

//   //프론트로부터 받은 데이터를 데이터베이스와 비교. 비교후 실패or성공 전달.
//   if (req.body.id === id && req.body.pw === pw) {
//     res.send({ result: true, userInfo: req.body, msg: "성공" });
//   } else {
//     res.send({ result: false, msg: "실패" });
//   }
// });

//404에러 처리는 맨 밑에 있어야함.
app.get("*", function (req, res) {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
