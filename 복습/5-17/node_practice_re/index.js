const express = require("express");
const app = express();
const PORT = 8081;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  res.render("indexx");
});

app.get("/practice27", function (req, res) {
  res.render("27");
});

app.post("/result27", function (req, res) {
  res.render("result", {
    title: "실습27 해설입니다.",
    info: req.body,
  });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
