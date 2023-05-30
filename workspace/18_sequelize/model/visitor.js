// const mysql = require("mysql");

// const conn = mysql.createConnection({
//   host: "localhost",
//   user: "kdtuser",
//   password: "1234",
//   database: "kdt7",
// });

// //방명록 전체 보이기
// //get /visitor/list
// //모듈 만들기. 인자로는 callback하나 만든다. 이는 컨트롤러에서 실행된다.
// exports.MgetVisitors = (callback) => {
//   conn.query(`SELECT * FROM visitor`, function (err, rows) {
//     //접속했던 정보로 쿼리를  가져옴.

//     if (err) {
//       console.log(err);
//     }

//     console.log("MgetVisitors: ", rows);
//     callback(rows);
//   });
// };

// //방명록 하나 조회
// //get /visitor/visitor/get?id=index
// //get /visitor/:id
// exports.MgetVisitor1 = (id, callback) => {
//   conn.query(`SELECT * FROM visitor WHERE id='${id}'`, (err, rows) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("MgetVisitor1: ", rows);
//     callback(rows);
//   });
// };

// //방명록 등록
// //post /visitor/visitor/write  //백엔드에게 경로 전송
// // exports.postVisitor = (data) => {
// //   conn.query(
// //     `INSERT INTO visitor(name, comment) VALUES ('${data.name}','${data.name}');`,
// //     function (err, rows) {
// //       if (err) {
// //         console.log(err);
// //       }
// //       console.log("visitor: ", rows);
// //     }
// //   );
// // };

// //등록
// exports.MpostVisitor = (data, callback) => {
//   //데이터인자를 컨트롤러에서 받음
//   conn.query(
//     `INSERT INTO visitor( name, comment)
//     VALUES ('${data.name}', '${data.comment}');`,
//     function (err, rows) {
//       if (err) {
//         console.log(err);
//       }
//       console.log("visitor: ", rows);
//       callback(rows.insertId);
//     }
//   );
// };

// //모델 수정. 일부 수정하기 때문에 전체를 수정하는 put 보다 patch로 수정한다.
// //수정도 post로 보내도 상관은 없지만 put과 patch로 보내는것이 http 프로토콜 약속이다.
// exports.MpatchVisitor = (data, callback) => {
//   //data에 수정할 값이 온다.

//   conn.query(
//     `update visitor set name='${data.name}', comment='${data.comment}' where id=${data.id}`,
//     function (err, rows) {
//       if (err) {
//         console.log(err);
//       }
//       console.log("patchvisitor: ", rows);
//       callback(rows);
//     }
//   );
// };

// //삭제
// exports.MdeleteVisitor = (id, callback) => {
//   conn.query(`DELETE FROM visitor WHERE id=${id}`, (err, rows) => {
//     if (err) {
//       console.log(err);
//     }

//     callback(true);
//   });
// };
// // // return [
// //   //db대체
// //   { id: 1, name: "홍길동", comment: "내가 왔다" },
// //   { id: 2, name: "이찬혁", comment: "으라차차" },
// // ];
