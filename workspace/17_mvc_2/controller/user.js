const user = require("../model/user"); //user 데이터를 가져온다.

exports.user = (req, res) => {
  res.render("user", { userInfo: user.userInfo() });
};
