//controller는 모델과 연결되어야함.
const visitor = require("../model/visitor");

exports.main = (req, res) => {
  res.render("index");
};

exports.getVisitors = (req, res) => {
  console.log(visitor.getVisitors());
  res.render("visitor", { data: visitor.getVisitors() });
};
