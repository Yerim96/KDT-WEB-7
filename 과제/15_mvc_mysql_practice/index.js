const express = require("express");
const app = express();
const PORT = 7070;

//템플릿 설정
app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//route
const userRouter = require("./routes/user");
app.use("/user", userRouter);

app.get("*", function (req, res) {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://loaclhost:${PORT}`);
});
