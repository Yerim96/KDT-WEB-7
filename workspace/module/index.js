const test = require("./modules/test");
//reurie을 사용할거면 export defualt 방식으로 사용한다면 오류남. pakage.json의   "type": "module",때문에.
// import test from "./modules/test";

console.log(test()); //1번방법 전체를 하나로 내보내기
// console.log(test.add()); //2번방법 부분을 내보내기.
// console.log(test.add2()); //2번의 축약방법 부분을 내보내기.
