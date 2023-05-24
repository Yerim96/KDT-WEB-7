const express = require("express");
const app = express();
const PORT = 8000;

// use같은 미들웨어를 위에씨고,
app.set("view engine", "ejs");
app.use(express.static(__dirname + "views"));

//body-parser
app.use(express.urlencoded({ extend: true }));
app.use(express.json()); //getpost가 body쿼리에 담겨나옴

//localhost:8000
app.get("/", function (req, res) {
  res.render("index");
});

//getFome을 만듦.
app.get("/getForm", function (req, res) {
  //   console.log(req);
  console.log(req.query);
  //   res.send("get 요청성공");

  res.render("result", {
    title: "Getㅠㅗㅁ 요청 결과 확인하기",
    userInfo: { id: req.query.id, password: req.query.password },
    //  userInfo:req.body
  });
});

app.post("/postForm", function (req, res) {
  console.log(req.body);
  //   console.log(req);
  //   res.send("post 요청 성공");
  res.render("result", {
    title: "post 요청 폼 결과 확인하기.",
    userInfo: {
      id: req.body.id,
      password: req.body.password,
    },
  });
});
//listen을 맨 마지막
app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
