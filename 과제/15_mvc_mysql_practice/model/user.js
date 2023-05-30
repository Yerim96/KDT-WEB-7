const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "kdtuser",
  password: "1234",
  database: "kdt7",
});

// post user/signup 회원가입 버튼 클릭시 값을 저장해주는 쿼리;
exports.Mpostsignup = (data, callback) => {
  conn.query(
    `INSERT INTO user (userid, name, pw )
   values('${data.userId}','${data.name}','${data.password}');`,
    function (err, rows) {
      if (err) {
        console.log(err);
      }
      console.log("user에 들어간 값 : ", rows);
      callback(rows.insertId);
    }
  );
};

//post user/singin 로그인 버튼 클릭시 값을 가져오는 쿼리.
exports.Mmpostsignin = (data, callback) => {
  conn.query(`SELECT userid, name, pw FROM user;`, function (err, rows) {
    if (err) {
      console.log(err);
    }
    console.log("user 에서 값 가져오기: ", rows);
    callback(rows);
  });
};

//post user/profile 프로필에서 로그인값가져오기
// exports.Mmpostprofile = (data, callback) => {
//   conn.query(
//     `SELECT userid, name, pw FROM user where userid='${data.userId}' and name='${data.name}' and pw='${data.password}'
//   ;`,
//     function (err, rows) {
//       if (err) {
//         console.log(err);
//       }
//       console.log("Mpostprofile 에서 값 가져오기: ", rows);
//       callback(rows);
//     }
//   );
// };
