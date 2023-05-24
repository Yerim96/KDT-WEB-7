const userModel = require("../model/user");

exports.main = (req, res) => {
  res.render("index");
};

exports.login = (req, res) => {
  //실습2
  // console.log(userModel);
  // console.log(userModel.users.split("\n"));
  // const userDatas = userModel.users.split("\n");
  // //사용자전체를 받는 배열
  // const users = [];
  // //아이디만 받는 배열
  // for (const user of userDatas) {
  // }
  // for (const user of userDatas) {
  //   users.push({
  //     id: user.split("//")[0],
  //     pw: user.split("//")[1],
  //     name: user.split("//")[2],
  //   });
  // }
  // console.log(users);
  // console.log(userIds);
  // //아이디 일치 확인
  // const idx = userIds.indexOf(req.body.id);
  // console.log(idx);
  // if (idx !== -1) {
  //   console.log("아이디있음");
  //   if (user[idx].pw === req.body.pw) {
  //     res.send({ result: true, userInfo: req.body, msg: "성공하였습니다." });
  //   } else {
  //     console.log("아이디없음");
  //     res.send({ result: false });
  //   }
  // }
  //실습1
  res.render("index");
  if (
    req.body.id === userModel.users()[0].id &&
    req.body.pw === userModel.users()[0].pw
  ) {
    res.send({ result: true, userInfo: req.body, msg: "성공" });
  } else {
    res.send({ result: false, msg: "실패" });
  }
};
