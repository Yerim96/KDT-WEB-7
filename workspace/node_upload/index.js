const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 6060;

//multer setting
// const upload = multer({
//   dest:"uploads/"
// })
const uploadMulter = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(
        null,
        `${path.basename(file.originalname, ext)} ${Date.now()}-${
          req.body.id
        }${ext}`
      );
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

//템플릿
app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static(__dirname + "/uploads"));
app.get("/", function (req, res) {
  res.render("index");
});

app.post("/result", uploadMulter.single("fileName"), function (req, res) {
  console.log(req.file);
  res.render("result", {
    userInfo: req.body,
    image: req.file.path,
  });
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
