function call(name){
    return new Promise(function(resolve, reject){

        setTimeout(function(){
            console.log(name);
            resolve(name);
        },1000)
    })
}

function back(){
    return new Promise(function(reseolve, reject){

        setTimeout(function(){
            console.log('back');
            reseolve('back');
        },1000)

    })
}


function hell(){
    return new Promise(function(resolve, reject){

        setTimeout(function(){
            resolve('callback hell');
        },1000)

    })
}


//promise 체인징은 함수로 직접 함수를 반복시켜주는것이 아니고, 함수가 성공이면 리턴해주는 함수
//순으로 간다.
// call('kim')
// .then(function(a){ //promsise가 성공시 resolve반환
//     console.log(a+'반가워');
//     return back();
// })
// .then(function(txt){
//     console.log(txt+"을 실행했구나");
//     return hell();
// })
// .then(function(messge){
//     console.log('여기는'+ messge);
// })


//async await 사용하기
async function exec(){
    let name = await call('kim')
    console.log( name+'반가워');
    let txt = await back();
    console.log( txt+'을 실행했구나');
    let message = await hell();
    console.log('여기는' +message)
}
exec();

// call('kim', function(name){
//     console.log(name +'반가워')
//     back(function(txt){
//         console.log(txt +'을 실행했구나.')
//     hell(function(messge){
//         console.log('여기는' + messge)
//     })
//     })
// })