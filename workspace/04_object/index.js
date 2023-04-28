// var cat={
//     name:'나비',
//     age:1,
//     mew:function(){
//         return '냐옹'
//     }
// }

// //객체 추가 키,값
// cat['gender'] ="boy";

// // 객체를 만들고 쓰기위해 사용. 서버에 값 연결할때 연결
// console.log(cat.age);
// console.log(cat.mew());
// console.log(cat.gender);
// console.log(cat);


// let arr1 =[1,2,3, "안녕", "배열",{name:'나비',age:1}, {name:"고양", age:3}];
// console.log(arr1.length);
// console.log(arr1.push('추가')); //스택 뒷쪽에 추가
// console.log(arr1.pop());
// console.log(arr1);

// console.log(arr1.unshift("앞으로")); //스택 앞쪽에 추가.
// console.log(arr1);
// console.log(arr1.shift());
// console.log(arr1);
// console.log("3의 배열 찾기: ",arr1.indexOf(3));


// 원소기호는 타입에 상관업이 const라도 바꾸기 가능하다. 그러나 const는 배열을
// 자체를 직접 바꾸는것은 되지 않는다. 그러나 var는 바꾸는것 가능함.
// arr1[0]='추가가';
// arr1 =[100,200,300];

//오브젝트는 .으로 가져옴
// console.log(arr1[5].name); //나비출력
//console.log(arr1);

// let arr2=[{name:'나비',age:1}, {name:"고양", age:3},{name:'초코',age:5}]
// for(var i=0; i<arr2.length; i++){
//     console.log(arr2[i].name);
// }

// const dog={
    //     name:'토니',
    //     age:2,
    //     gender:'boy'
    // }
    // //오브젝트를 가져올때 for in을 사용한ㅇ다.
    // for(var i in dog){
        //     console.log(i);
        //     console.log(dog[i]);
        // }
        
    // let arr3 =[1,2,3, "안녕", "배열"];
    // for(var i of arr3){
    //     console.log(i);
    // }


    //Date 생성자와 메소드
    // const date = new Date();
    // console.log(date.getFullYear());
    // console.log(date.getMonth()+1); //이번달 것을 가져오려면 +1 (0부터 시작하기 때문에.)
    // console.log(date.getDate());
    // console.log(`${date.getFullYear()}년 ${date.getMonth()+1} `);
    // document.write(`${date.getFullYear()}년 ${date.getMonth()+1} `);
    // console.log(date.getDay());
    // console.log(date.getTime());
    // console.log(date.getHours());
    // console.log(date.getMinutes());
    // console.log(date.getSeconds());
    // console.log(date.toLocaleDateString());



    //Math 객체 
    //오직 숫자만 가능
    console.log(Math.min(10,20,30,40,50)) ;//최소값 표현
    console.log(Math.max(10,20,30,40,50)); //최소값 표현

    //floor 내림
    console.log(Math.floor(Math.random()*10)); //1미만 수가 생성됨(+1 해주면 10까지생성) 한자리는 *10 두자리 *100
    // console.log(Math.floor(Math.random()*10)+1); //1미만 수가 생성됨(+1 해주면 10까지생성) 한자리는 *10 두자리 *100
   
    //cell 올림
    console.log(Math.ceil(Math.random()*10));
    //round 반올림
    console.log(Math.round(Math.random()*10));



    