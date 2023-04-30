let str= new String('JS');

console.log(str);
console.log(typeof(str));


typeof(str)==='string';


let dog={ //속성은 키와 값으로 이루어져 있다.
    name:'백구',
    age:1,
    woof:function(){
        return '멍멍';
    }
}

console.log(dog);

//객체 추가
dog['gender'] ="girl";

console.log(dog);
console.log(dog.name);
console.log(dog.woof);

//배열에 프로퍼티값을 넣을 수 있음.
let arr1=[1,2,3, "안녕", "배열",
{name:'백구', age:1},
{name:'멍구', age:3},
]
console.log(arr1.length);
console.log(arr1.push('황구'));
console.log(arr1);
console.log(arr1.pop());
console.log(arr1);

console.log(arr1.unshift("첫쨰강쥐")); //스택 앞쪽에 추가.
console.log(arr1);
//shift는 배열의 맨앞 값을 제거한다.
console.log(arr1.shift());
console.log(arr1);

console.log("3의 배열값 찾기", arr1.indexOf(3));
console.log("안녕의 배열값 찾기", arr1.indexOf("안녕"));

//궁금한것. 메모리주소값이 바뀌어 저장소가 따로 생기는건지
//주소값은 같은데 저장소 자체가 바뀌는건지?... 자바랑 헷갈림.
// arr1[0]='추가';
// arr1=[100,200,300];
// console.log(arr1);

// console.log(arr1[5].name);


// let arr2=[
//     {name:"나비",age:1},{name:"고양",age:3},{name:'초코', age:5}
// ]

// //arr2 객체의 길이만큼 해당 name키 값을 출력하기
// for(let i=0; i<arr2.length; i++){
//     console.log(arr2[i].name + arr2[i].age);
// }

// for(let i=0; i<arr2.length; i++){
//     console.log(arr2[i].age);
// }

const date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth()+1);
console.log(date.getDate());
console.log("오늘은"+ date.getFullYear()+ (date.getMonth()+1)+date.getDate());
console.log(date.getDay());
console.log(date.getTime())
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.toLocaleDateString());
console.log('지금시각은'+date.getHours()+'시'+date.getMinutes()+"분"+date.getSeconds()+"초 입니다.");

//Math는 생성자를 만들지 않고 쓸 수 있음.
console.log(Math.min(10,20,30,40,50));
console.log(Math.max(40,50,60,70));

//floor 내림
console.log(Math.floor(3.5563234));
let a=(Math.random()*10);
console.log(a);

//cell 올림
console.log(Math.ceil(a));

//floor 내림
console.log(Math.floor(a));

//round 반올림
console.log(Math.round(a));
