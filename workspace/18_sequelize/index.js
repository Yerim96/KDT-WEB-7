const express = require("express");
const app = express();
const PORT = 8000;

//템플릿 연결
app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
const visitorRouter = require("./routes/index");
app.use("/visitor", visitorRouter);

app.get("*", function (req, res) {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://loaclhost:${PORT}`);
});
