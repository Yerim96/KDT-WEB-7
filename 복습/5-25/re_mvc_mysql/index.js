const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/view", express.static(__dirname + "/views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const visitorRouter = require("./routes/visitor");
app.use("/visitor", visitorRouter);

app.get("*", function (req, res) {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
