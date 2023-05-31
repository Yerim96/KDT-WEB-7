const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8100;
require("dotenv").config();

app.use(
  session({
    secret: process.env.COOKIE_SECRET, //쿠키의 secret값과 동일하게 설정하는것이 좋음 .
    //secret설정하는것은 필수이고, 동일하게 설정하는것은 권장.
    resave: false,
    saveUninitialized: true,
    name: "my-session",

    // cookie:{ //cookieOption쿠키옵션을 session에서 설정 가능하다.
    //     maxAge:60 * 1000,
    // }
  })
);
/*
 * secret: 안전하게 쿠키를 전송하기 위해 쿠키 서명값(세션을 발급할떄 사용되는 키)
 * resave: 세션에 수정사항 생기지 않더라도 매 요청마다 세션을 다시 저장할것인지?(덮어쓰기 가능 여부)
 * saveUninitialized : 세션에 저장할 내역이 없더라도 처음부터 세션을 생성할지 설정
 * cookie : 세션 쿠키에 대한 설정
 * secure: 값을 true로 하면 https에서만 세션을 주고받을 수 있음
 */

//템플릿 연결
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

app.listen(PORT, () => {
  console.log(`http://loaclhost:${PORT}`);
});
