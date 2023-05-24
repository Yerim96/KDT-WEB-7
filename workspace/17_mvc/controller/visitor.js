//controller는 모델과 연결되어야함.
const visitor = require("../model/visitor");

//데이터 가공 로직

//가공 됐다고 치고 다시 모듈로 내보냄.
//컨트롤러에서 모듈함수 생성
exports.main = (req, res) => {
  //데이터가공은 여기서도 할 수 있음
  res.render("index"); //view에 있는 index에 가공된 데이터  내보내기
};

exports.getVisitor = (req, res) => {
  //데이터 요청
  console.log(visitor.getVisitors()); //getvisitors 콘솔에 출력
  res.render("visitor", { data: visitor.getVisitors() }); //가져온 데이터 뿌려줘.
};
