function add(n1, n2, cb){
    setTimeout(function(){
        let result = n1 + n2;
        cb(result);
    },1000)
}
function mul(n, cb){
    setTimeout(function(){
        let result= n * 2;
        cb(result);
    },700)
}

function sub(n, cb){
    setTimeout(function(){
        let result = n -1;
        cb(result);
    },500)
}

add(4,3, function(x){
    console.log('1: ', x )
    mul(x, function(y){
        console.log('2: ', y )
        sub(y, function(z){
            console.log('3: ',z)
        })
    })
})



//체이닝방법으로 
function add(n1, n2){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            let result = n1 + n2;
            resolve(result);
        },1000)
    })
}
function mul(n){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            let result= n * 2;
            resolve(result);
        },700)
    })
}

function sub(n){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            let result = n -1;
            // resolve(result);
            reject('의도적에러')
        },500)
    })
    }

    add(4,3).then(function(result){
        console.log('1: ', result)
        return mul(result); //mul에 add에서 연산한 결과를 넣어줌.
    })
    .then(function(result){
        console.log('2: ', result)
        return sub(result); //sub에 mul에서 연산한 결과를 넣어줌.
    })

    .then(function(result){ //그동안 연산한 결과를 받아 sub연산
        console.log('3: ', result)
    })
    
    .catch(function(err){
        console.log(err);
    })