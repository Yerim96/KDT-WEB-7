const express = require("express");
const session = require("express-session");
const app = express();
const port = 8100;
const dotenv = require("dotenv").config();

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: true,
    name: "my-session",
  })
);

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));

app.get("/", (req, res) => {
  req.session.name = "홍길동";
  res.send({ result: true });
});

app.get("/getSession", (req, res) => {
  res.send({ name: req.session.name });
});

app.get("/clearSession", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    }
    res.redirect("/getSession");
  });
});

app.listen(port, () => {
  console.log(`http://loaclhost:${port}`);
});
