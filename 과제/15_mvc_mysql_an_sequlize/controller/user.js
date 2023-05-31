// const user = require("../model/user");
const models = require("../models");
const crypto = require("crypto");
// const bcrypt = require("bcrypt");
exports.index = (req, res) => {
  //views/index.ejs
  res.render("index");
};

exports.signup = (req, res) => {
  //views/signup.ejs
  res.render("signup");
};

exports.signin = (req, res) => {
  //views/signin.ejs
  res.render("signin");
};

//회원가입
exports.Cpost_signup = async (req, res) => {
  console.log(req.body);
  console.log(req.body.name);

  //sequelize 코드 - 암호화 x
  models.user
    .create({
      userid: req.body.userid,
      name: req.body.name,
      pw: req.body.pw,
    })
    .then((result) => {
      console.log(result);
      res.send({ result: true });
    });

  //sequelize 코드 - 암호화(bycrpy, crypto)
  // models.user
  //   .create({
  //     userid: req.body.userid,
  //     name: req.body.name,
  //     // pw: await bcrypt.hash(req.body.pw, 11), //비밀번호 , 솔트반복값 bcrypt
  //     pw: createHashedPassword(req.body.pw), //crypto
  //   })
  //   .then((result) => {
  //     console.log(result);
  //     res.send({ result: true });
  //   });
};

//로그인
exports.Cpost_signin = async (req, res) => {
  //암호화 처리 안한 sequlize
  models.user
    .findAll({
      where: { userid: req.body.userid, pw: req.body.pw },
    })
    .then((value) => {
      if (value.length > 0) {
        res.send({ result: true, data: value[0] });
      } else {
        res.send({ result: false });
      }
    });
  //------------------------------------------------
  //암호화 처리한 sqeulize (bcrypt, crypto)
  // const user = await models.user.findOne({
  //   where: {
  //     userid: req.body.userid,
  //   },
  // });
  // // 암호화된 비밀번호끼리 비교 bcrypt
  // const ok = await bcrypt.compare(req.body.pw, user.dataValues.pw);
  // console.log(ok);
  // if (ok) {
  //   res.send({ result: true, data: user.dataValues });
  // } else {
  //   res.send({ result: false });
  // }
  // // crypto
  // console.log(createHashedPassword(req.body.pw), user.dataValues.pw);
  // if (createHashedPassword(req.body.pw) === user.dataValues.pw) {
  //   res.send({ result: true, data: user.dataValues });
  // } else {
  //   res.send({ result: false });
  // }
};

//회원정보
exports.Cpost_profile = (req, res) => {
  // user.Mpost_profile(req.body, (value) => {
  //   console.log(value);
  //   if (value.length > 0) {
  //     res.render("profile", { result: true, data: value[0] });
  //     // res.send({ result: true, ...value });
  //   } else {
  //     res.send({ result: false });
  //   }
  // });
  models.user.findAll({ where: { userid: req.body.userid } }).then((value) => {
    console.log(value);
    if (value.length > 0) {
      res.render("profile", { result: true, data: value[0] });
      // res.send({ result: true, ...value });
    } else {
      res.send({ result: false });
    }
  });
};
//회원수정
exports.Cedit_profile = (req, res) => {
  models.user
    .update(
      {
        userid: req.body.userid,
        name: req.body.name,
        pw: req.body.pw,
      },
      {
        where: { id: req.body.id }, //수정할조건문
      }
    )
    .then(() => {
      res.send({ result: true });
    });
};
//회원삭제
exports.Cdel_profile = (req, res) => {
  models.user.destroy({ where: { id: req.body.id } }).then(() => {
    res.send({ result: true });
  });
};

//visitor
exports.visitor = (req, res) => {
  res.render("visitor");
};

//visitor/list
exports.getvisitor = (req, res) => {
  models.user.findAll().then((result) => {
    console.log(result);
    res.render("visitor", { data: result });
  });
};

// //visitor/edit

// exports.Cedit_visitor = (req, res) =>{
//   models.user.findAll
// }

exports.CgetVisitor1 = (req, res) => {
  console.log(req.query);
  // visitor.MgetVisitor1(req.query.id, (value) => {
  //   //res.send(value);
  //   res.render("visitor", { data: value });
  // });
  models.visitor.findOne({ where: { id: req.query.id } }).then((result) => {
    res.send(result);
    res.render("visitor", { data: [result] });
  }); //findone은 어떤데이터를 쓸지 정해주어야함
};
// exports.CgetVisitor1 = (req, res) => {
//   console.log(req.query);
//   //모델에 있는 함수 가져오기.
//   visitor.MgetVisitor1(req.query.id, (value) => {
//     // res.send(value);
//     res.render("visitor", { data: value });
//   }); //결과를 담은 value 콜백함수
// };

//하나씩 가는것 params
exports.CgetVisitor2 = (req, res) => {
  console.log(req.params);
  // visitor.MgetVisitor1(req.params.id, (value) => {
  //   // res.send(value);
  //   res.send(value);
  // });
  models.visitor.findOne({ where: { id: req.params.id } }).then((result) => {
    res.send([result]);
  });
};

//등록
exports.CpostVisitor = (req, res) => {
  //post는 req body로 받는다.
  console.log(req.body);
  // visitor.MpostVisitor(req.body, (value) => {
  //   //vaule에 콜백 rows.inertId 실행
  //   res.send({
  //     result: true,
  //     id: value,
  //     name: req.body.name,
  //     comment: req.body.comment,
  //   }); //id:value는 3이다.콜백받아 프론트로보내줌.
  //   //send는 값만 보내주기 때문에 render는 필요없음
  // }); //값 보내기
  models.visitor
    .create({
      //insert into와 같음
      name: req.body.name,
      comment: req.body.comment,
    })
    .then((result) => {
      console.log(result);
      res.send({
        result: true,
        id: result.dataValues.id,
        name: req.body.name,
        comment: req.body.comment,
      });
    });
};

//수정
//수정될 데이터를 보내고, 다시 보내고, 완료된 데이터를 또 받아와야함.
//1.수정되야할 패치(모듈) 만들기
exports.CpatchVisitor = (req, res) => {
  console.log(req.body);
  //모델에서 만든 모듈 실행
  // visitor.MpatchVisitor(req.body, (value) => {
  //   //value값 보내줄 필요는 없음.그냥 비워둬도됨
  //   res.send({ result: true });
  // });

  models.visitor
    .update(
      {
        name: req.body.name,
        comment: req.body.comment,
      },
      {
        where: { id: req.body.id }, //수정할조건문
      }
    )
    .then(() => {
      res.send({ result: true });
    });
};

//삭제
exports.CdeleteVisitor = (req, res) => {
  //모델에서 만든 모듈
  // visitor.MdeleteVisitor(req.body.id, (value) => {
  //   res.send({ result: value });
  // });
  models.visitor.destroy({ where: { id: req.body.id } }).then(() => {
    res.send({ result: true });
  });
};

//단방향암호화 crypto
// const createHashedPassword = (pw) => {
//   // const salt = crypto.randomBytes(64).toString("base64");
//   const salt = "kdt7";
//   return crypto.pbkdf2Sync(pw, salt, 10, 64, "sha512").toString("base64");
// };
