const models = require("../models");
// const crypto = require("crypto");
const bcrypt = require("bcrypt");
const { Op } = require("sequelize");

exports.index = (req, res) => {
  res.render("index");
};

exports.signup = (req, res) => {
  //views/signup.ejs
  res.render("signup");
};

exports.signin = (req, res) => {
  res.render("signin");
};

exports.Cpost_signup = async (req, res) => {
  models.User.create({
    userid: req.body.userid,
    name: req.body.name,
    pw: await bcrypt.hash(req.body.pw, 11), //비밀번호, 솔트반복값
    // pw: createHashedPassword(req.body.pw), //crypto
  }).then(() => {
    res.send({ result: true });
  });
};

exports.Cpost_signin = async (req, res) => {
  //SELECT * FROM user
  models.User.findAll({});
  //SELECT * FROM user  LIMIT 1;
  models.User.findOne({});
  //SELECT name, userid FROM user;
  models.User.findOne({
    //원하는 컬럼 가져올때 attributes사용
    attributes: ["name", "userid"],
  });
  //연산자
  //Op.gt(초과), Op.gte(이상), Op.lt(미만), Op.lte(이하)
  //Op.ne(같지 않음), Op.or(또는), Op.in(배열 요소중 하나), Op.notIn(배열 요소와 모두 다름)
  //SELECT * FROM user WHERE id >= 2;
  models.User.findAll({
    where: {
      id: { [Op.gte]: 2 },
    },
  });
  //SELECT * FROM user WHERE id > 2 OR name = 'aaa';
  models.User.findAll({
    where: {
      [Op.or]: [{ name: "aaa" }, { id: { [Op.gt]: 2 } }],
    },
  });
  //SELECT name, userid FROM user ORDER BY id DESC;
  models.User.findAll({
    attributes: ["name", "userid"],
    order: [["id", "DESC"]],
  });
  //SELECT name, userid FROM user ORDER BY id DESC LIMIT 10;
  //SELECT name, userid FROM user ORDER BY id DESC LIMIT 10 OFFSET 5;
  models.User.findAll({
    attributes: ["name", "userid"],
    order: [["id", "DESC"]],
    limit: 10,
    offset: 5,
  });

  //sequlize 코드
  // models.User.findOne({
  //   where: {
  //     userid: req.body.userid,
  //     pw: req.body.pw,
  //   },
  // }).then((value) => {
  //   console.log("Cpost_signin", value);

  //   if (value) {
  //     res.send({ result: true, data: value.dataValues });
  //   } else {
  //     res.send({ result: false });
  //   }
  // });

  //sequlize 암호화 코드
  console.log(req.body.pw);
  const user = await models.User.findOne({
    where: {
      userid: req.body.userid,
    },
  });

  //암호화된 비밀번호끼리 비교
  const ok = await bcrypt.compare(req.body.pw, user.dataValues.pw);
  console.log(ok);
  if (ok) {
    res.send({ result: true, data: user.dataValues });
  } else {
    res.send({ result: false });
  }

  //crypto
  // if (createHashedPassword(req.body.pw) === user.dataValues.pw) {
  //   res.send({ result: true, data: user.dataValues });
  // } else {
  //   res.send({ result: false });
  // }
};

exports.Cpost_profile = (req, res) => {
  models.User.findAll({
    where: { userid: req.body.userid },
    limit: 1,
  }).then((value) => {
    console.log("Cpost_profile", value);
    if (value) {
      res.render("profile", { result: true, data: value[0].dataValues });
      // res.send({ result: true, ...value });
    } else {
      res.send({ result: false });
    }
  });
};

exports.Cedit_profile = (req, res) => {
  models.User.update(
    {
      userid: req.body.userid,
      name: req.body.name,
      pw: req.body.pw,
    },
    { where: { id: req.body.id } }
  ).then(() => {
    res.send({ result: true });
  });
};

exports.Cdel_profile = (req, res) => {
  models.User.destroy({
    where: { id: req.body.id },
  }).then(() => {
    res.send({ result: true });
  });
};

//crypto 단방향암호화 함수
// const createHashedPassword = (pw) => {
//   const salt = "kdt7";
//   return crypto.pbkdf2Sync(pw, salt, 10, 64, "sha512").toString("base64");
// };
