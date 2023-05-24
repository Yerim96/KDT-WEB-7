const express = require("express");
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const indexRoute = require("./routes");
app.use("/", indexRoute);

app.get("*", function (req, res) {
  app.render("404");
});

app.listen(port, function () {
  console.log(`http://localhost:${port}`);
});
