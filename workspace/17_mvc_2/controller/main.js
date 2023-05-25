const comment = require("../model/comment"); //model의 comment가져오기

//라우터로 내보내기
exports.main = (req, res) => {
  res.render("index");
};

exports.comments = (req, res) => {
  res.render("comments", { commentInfos: comment.commentInfos() });
};

exports.comment = (req, res) => {
  console.log(req.params);
  const commentId = req.params.page;
  const comments = comment.commentInfos();

  console.log(comments[commentId - 1]);

  if (commentId < 1 || commentId > comments.length) {
    res.render("404");
  }

  if (isNaN(commentId)) {
    //숫자인지 아닌지 판별
    res.render("404");
  }

  res.render("comment", { commentInfo: comments[commentId - 1] });
};
