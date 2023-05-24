const express = require("express");
const app = express();
const PORT = 7070;

app.set("view engine", "ejs");
//app.set("views", path.join(__dirname, "/views1"));
app.use(express.static(__dirname + "views"));
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//localhost:8080
app.get("/", function (req, res) {
  res.render("index");
});
//localhost:8080/practice29
app.get("/practice29", function (req, res) {
  res.send(req.query);
});
app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
