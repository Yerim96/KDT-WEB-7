const user = require("../model/user");

//http://localhost:7070/user
exports.main = (req, res) => {
  res.render("index");
};
//http://localhost:7070/user/singup 회원가입
exports.getsignup = (req, res) => {
  res.render("signup");
};

//http://localhost:7070/user/singup 회원가입 데이터 보내주기
exports.Cpostsignup = (req, res) => {
  console.log(req.body);
  user.Mpostsignup(req.body, (value) => {
    res.send({
      result: true,
      id: value,
      userId: req.body.userId,
      name: req.body.name,
      password: req.body.password,
    });
  });

  //   res.render("signup");
};
//http://localhost:7070/user/singin  로그인
exports.getsignin = (req, res) => {
  res.render("signin");
};

//http://localhost:7070/user/singin  로그인하기.(회원가입한 데이터를 가지고 로그인)
exports.Cpostsignin = (req, res) => {
  console.log(req.body);
  user.Mmpostsignin(req.body, (value) => {
    let matchFound = false;

    for (let i = 0; i < value.length; i++) {
      if (
        req.body.userId === value[i].userid &&
        req.body.name === value[i].name &&
        req.body.password === value[i].pw
      ) {
        matchFound = true;
        break;
        // res.send({ result: true, userInfo: req.body, msg: "성공" });
        // res.send({ result: false, msg: "실패" });
      }
    }

    if (matchFound) {
      res.send({ result: true, userInfo: req.body, msg: "성공" });
      // res.render("profile", { userInfo: req.body });
    } else {
      res.send({ result: false, msg: "실패" });
    }
  });
  // res.render("signin");
};

//get user/profile 프로필
exports.postprofile = (req, res) => {
  res.render("profile");
};

//post user/profile 프로필
exports.Cpostprofile = (req, res) => {
  console.log(req.body);
  user.Mmpostsignin(req.body, (value) => {
    res.render("profile", {
      result: true,
      userInfo: req.body,
      msg: "포스트프로필",
    });
  });
};
