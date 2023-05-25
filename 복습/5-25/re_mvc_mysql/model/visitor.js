const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "kdtuser",
  password: "1234",
  database: "kdt7",
});

//방명록 전체 보이기
//get /visitor/visitor
//모듈 만들기. 인자로는 callback하나 만든다. 이는 컨트롤러에서 실행된다.
exports.MgetVisitors = (callback) => {
  conn.query(`SELECT * FROM visitor`, function (err, rows) {
    //접속했던 정보로 쿼리를  가져옴.

    if (err) {
      console.log(err);
    }

    console.log("MgetVisitors: ", rows);
    callback(rows);
  });
};

//방명록 하나 조회
//get /visitor/visitor/get?id=index
exports.MgetVisitor1 = (id, callback) => {
  //쿼리문 다음 콜백함수작성
  conn.query(`SELECT * FROM visitor WHERE id=${id}`, (err, rows) => {
    if (err) {
      console.log(err);
    }
    console.log("MgetVisitor1:", rows);
    callback(rows);
  });
};
//방명록 등록
//post /visitor/visitor/write  //백엔드에게 경로 전송
// exports.postVisitor = (data) => {
//   conn.query(
//     `INSERT INTO visitor(name, comment) VALUES ('${data.name}','${data.name}');`,
//     function (err, rows) {
//       if (err) {
//         console.log(err);
//       }
//       console.log("visitor: ", rows);
//     }
//   );
// };

exports.MpostVisitor = (data, callback) => {
  //데이터인자를 컨트롤러에서 받음
  conn.query(
    `INSERT INTO visitor( name, comment) VALUES ('${data.name}', '${data.comment}');`,
    function (err, rows) {
      if (err) {
        console.log(err);
      }
      console.log("visitor: ", rows);
      callback(rows.insertId);
    }
  );
};

// // return [
//   //db대체
//   { id: 1, name: "홍길동", comment: "내가 왔다" },
//   { id: 2, name: "이찬혁", comment: "으라차차" },
// ];
