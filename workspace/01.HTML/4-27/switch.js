const value1 =30;
const value2 =50;
const code ='+';

function calc(a, b, code){
    let calc;
    switch(code){
        case '+': 
            calc= a + b;
            break;

        case '-':
            calc= a - b;
            break;

        case '/':
            calc=a/b;
            break;

        case '*':
            calc=a*b;
            break;

        default:
            alert("잘못된 코드입력입니다.");
            break;
            
    }
    return calc;
}
const result = calc(value1,value2,code);
console.log(result);