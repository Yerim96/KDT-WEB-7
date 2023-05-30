const model = require("../model/visitor");

exports.main = (req, res) => {
  res.render("index");
};

exports.CgetVisitors = (req, res) => {
  model.MgetVisitors((result) => {
    console.log("출력");
    res.render("visitor", { test: result });
  });
};
