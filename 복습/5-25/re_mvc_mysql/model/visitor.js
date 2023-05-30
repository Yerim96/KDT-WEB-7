const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "kdtuser",
  password: "1234",
  database: "kdt7",
});

//방명록 전체 보이기
//get /visitor list

exports.MgetVisitors = (callback) => {
  conn.query(`SELECT * FROM visitor2`, function (err, rows) {
    if (err) {
      console.log(err);
    }
    console.log("MgetVisitors ", rows);
    callback(rows);
  });
};
