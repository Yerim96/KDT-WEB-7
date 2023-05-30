const visitor = require("../model/visitor");
exports.main = (req, res) => {
  res.render("index");
};

//전체 가져오기
exports.CgetVisitors = (req, res) => {
  //visitor.getVisitor()는 model에서 가져온 데이터.
  // res.render("visitor", { data: visitor.getVisitors() });
  visitor.MgetVisitors((result) => {
    //콜백함수에 담아서 렌더링
    console.log("data");
    console.log({ data: result });
    res.render("visitor", { data: result });
  });
};

//하나씩 querystring.
//get으로 접속했을때 쿼리스트링을 실행시키기 위함.

exports.CgetVisitor1 = (req, res) => {
  console.log("dk");
  visitor.MgetVisitor1(req.query.id, (value) => {
    //res.send(value);
    res.render("visitor", { data: value });
  });
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
  visitor.MgetVisitor1(req.params.id, (value) => {
    // res.send(value);
    res.send(value);
  });
};

//등록
exports.CpostVisitor = (req, res) => {
  //post는 req body로 받는다.
  console.log(req.body);
  visitor.MpostVisitor(req.body, (value) => {
    //vaule에 콜백 rows.inertId 실행
    res.send({
      result: true,
      id: value,
      name: req.body.name,
      comment: req.body.comment,
    }); //id:value는 3이다.콜백받아 프론트로보내줌.
    //send는 값만 보내주기 때문에 render는 필요없음
  }); //값 보내기
};

//수정
//수정될 데이터를 보내고, 다시 보내고, 완료된 데이터를 또 받아와야함.
//1.수정되야할 패치(모듈) 만들기
exports.CpatchVisitor = (req, res) => {
  console.log(req.body);
  //모델에서 만든 모듈 실행
  visitor.MpatchVisitor(req.body, (value) => {
    //value값 보내줄 필요는 없음.그냥 비워둬도됨
    res.send({ result: true });
  });
};

//삭제
exports.CdeleteVisitor = (req, res) => {
  //모델에서 만든 모듈
  visitor.MdeleteVisitor(req.body.id, (value) => {
    res.send({ result: value });
  });
};
