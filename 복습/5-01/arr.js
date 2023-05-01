const arr=[1,2,3];
//이차원배열
const arr2=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(arr2[1][0]);



//ogj 객체 생성
//키, 값
const obj={
    name:"김김김",
    age:50,
    "hello-1":"안녕하신가"
}

//객체 속성 출력하기
console.log(obj.name);
console.log(obj.age);
//키값이 특수문자일 때 접근
console.log(obj['name']);
console.log(obj["hello-1"]);
//일반 속성처럼 출력한다면?



let obj2={
    name:"임예림",
    '^77s':8
}
console.log(obj2.name);
console.log(obj2['^77s']);