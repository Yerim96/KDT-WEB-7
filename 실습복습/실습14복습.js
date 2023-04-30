//합계 구하기 n이 있을때 2또는 3의 배수의 총합을 구하세요
//n은 100보다작을때

// let n=1;
// let sum=0;

// while(n<100){
//     if(n%2===0 || n%3===0){
//         console.log(sum);
//         sum=sum+n;
//     }
//     n++;
// }


      let n=1;
      let sum=0;
      while(n<100){
            n++;
            if(n%2===0 || n%3===0){
                sum=sum+n;
            }
        }
        console.log(sum);