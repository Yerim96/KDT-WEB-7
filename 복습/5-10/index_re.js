        //비동기처리
        function first(){
            second();
            console.log('first')
        }
        function second(){
            third();
            console.log('seconde')
        }
        function third(){
            console.log('thrid')
        }
    first();

    //동기처리
    //런타임이 함수를 모두 확인하고 간 다음에 실행시킴.
    //setTimeout에 딜레이가 있다면 다음 함수를 먼저 실행시킴.
    //콜백함수를 이용해 상품명과 가격 출력하기

        // function goMart(){
        //     console.log('마트에 왔습니당')
        // }

        // function marvel(callback){
        //     setTimeout(function(){
        //         console.log('마블 스토어가 보이네요')
        //         product="캡틴마블"
        //         price=45000;
        //         callback();
        //     },3000)
        // }

        // function pay(){
        //     console.log(`하나밖에 안남은 ${product}을 ${price}에 얻었다!`);
        // }

        // let megumi;
        // let price;
        // goMart();
        // marvel(pay);
        
        // function promise1(flag){
        //     return new Promise(function(resolve,reject){
        //         if(flag){
        //             resolve(`promise의 상태는  fulfilled! then으로 연결. 이때의 flag가 ${flag}입니다.`);
        //         }else{
        //             reject(`promise의 상태는  rejected catch으로 연결. 이때의 flag가 ${flag}입니다.`);
        //         }
        //     })
        // }

        // promise1(false)
        // .then(function(result){
        //     console.log(result)
        // })
        // .catch(function(err){
        //     console.log(err)
        // })

        function goMart(){
            console.log('마트에서 어떤 음료를 살지 고민한다.')
        }
        function pinkDrink(){
            return new Promise(function(resolve, reject){
                setTimeout(function(){
                    console.log('다 골랐닥');
                    product="제로 콜라"
                    price=2000;
                    reject()
                },3000)
            })
        }
        function pay(){
            console.log(`상품명: ${product}, 가격:${price}`)
        }

        let product;
        let price;
        goMart();
        pinkDrink().then(pay).catch(function(){
            console.log('에러에러에러에러에러에러')
        })