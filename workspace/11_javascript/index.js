//배열 구조 분해
//특징: 구조 분해 당시 순서가 중요!

// const lists=['apple','grape']
// console.log(lists[0])

// //구조분해
// [item1, item2, item3="peach"] =lists
// //const item1 ='apple'
// console.log(item1, item2,item3);


// function test(){
//     return['one','two' ,'three']
// }

// const[one,two,three,four='four']=['one', 'two','three']
// //let four;
// console.log(one, two, three,four);

// // swap
// let a=10;
// let b=20;
// console.log(a,b);
// [a,b] =[b,a];
// console.log(a,b)

const lists = ["apple", "grape"]
console.log(lists[0]);
[item1, item2, item3 = "peach"] = lists;
//const item1 = 'apple'
console.log(item1, item2, item3);
function test() {
    return ['one', 'two', 'three']
}
const [one, two, three, four = 'four'] = ['one', 'two', 'three']
//let four;
console.log(one, two, three, four);
//swap
let a = 10;
let b = 20;
console.log(a, b);
[a, b] = [b, a];
console.log(a, b)


//----------객체 구조 분해
//키값이 중요!!
console.log('객체구조분해')
const obj = {
    key1:'one',
    key2:'two'
}

//원래쓰는방식
console.log(obj.key1);
console.log(obj['key1']);

const {key1, key2,key3='three'}=obj; //순서로 가져오는것이 아닌 키값으로 가져온다. 키값이 중요
console.log(key2,key1,key3);



//오류남. key2는 사라지고 newkey2가 할당되어있기때문에(이름을 바꿈)
// const {key2:newkey2, key1,key3='three'}=obj; 
// console.log(key2,key1,key3);
function test2(){
    return{result:true, statusCode:200, a:10, b:20}
}
const{result,statusCode,a:a2,b:b2}=test2()
console.log(result,a2)

//---------spread 연산자
console.log('스프레드')
const i=[10,20,30]
const j=[40,50]
const x=[60,70,80,90]
const concat = i.concat(j)
console.log(concat);
const spread=[...i,...j]
console.log(spread)

const z = [..."hello"]
console.log(z)

//스프레드는 함수를 호출할때 사용
function spreadFunc(a,b,c){
    console.log(a+b+c)
}
spreadFunc(...i)
//기존 
//spreadFunc(i[0], i[1], i[2])
spreadFunc(...x)

//rest는 함수를 받을때 사용함.
console.log('rest')
function restFunc(a, ...rest){ //a는 10이고 나머지 rest가 들어간다. 나머지를 배열로반환
    console.log(rest)
}
restFunc(...i)