const a = 10;
const b = 20;

// //1번 (전체함수를 내보냄)
// function connect() {
//   return a + b;
// }

// module.exports = connect; //함수를 내보낼때는 이름만 내보내면됨.

// //2번 (부분을 내보냄)
// module.exports.add = () => {
//   return a + b + a;
// };

// //2번의 축약
// exports.add2 = () => {
//   return a + b + b;
// };
// module.exports={
//     a,
//     b,
// };

//es6방식 export default
// function testFunc() {
//   return a + b;
// }
// export default testFunc;
