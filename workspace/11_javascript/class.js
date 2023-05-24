//클래스
class Cat{
    //생성자
    constructor(name, age){
        //클래스 안에서 자기자신의 name, age를 사용할때는 this를 붙여줌.
        this.name= name;
        this.age= age;
    }

    mew(){
        console.log('야옹')
    }
    
    eat(){
        console.log('먹이를 먹습니다.')

    }
    test(){
       this.mew()
    }
}

//생성자 생성
let cat1 = new Cat()
cat1.mew()
cat1.eat()
cat1.test()



//~~상속~~~
//부모 == 상위클래스 ==슈퍼클래스
//자식 = 하위클래스 =서브클래스

//부모클래스
class Product{

    //자바스크립트는 선언을 안해도 되긴함.
    name=' ';
    price =0; //생성자프라이스

    constructor(name, price){
        this.name=name;
        this.price=price;
    }
    getPrice(){ //get프라이스

       return this.price + '만원'
    }

    setPrice(price){  //클래스는 값을 직접바꾸는게아니라 가져와서세팅해주는것, 추상화,캡슐화라고부름
        this.price= price
    }
}

//자식 클래스
class TV extends Product{
    constructor(name,price,weight){
        super(name, price); //super키워드로 부모의 값 쓸 수 있음.
        this.weight=weight

    }
    getweight(){
        return this.weight
    }
}
const tv1 = new TV('SAMSUNG tv', 200 , '27inch');
console.log(tv1)
console.log(tv1.getPrice()) //상속받은 getPrice를 사용할 ㅅ 있음.
tv1.setPrice(150);//인스턴스의 값을 잠깐바꿔줌 클래스 안의 찐 값은 바뀌지 않음.
console.log(tv1.getPrice()) 
tv1.setPrice(100);
console.log(tv1.getPrice()) 
console.log(tv1.getweight()) 


//부모 인스턴스
//~~에러~~
//getweight는 상속받은것이 아니기 떄무넹에러남.
// const prod1 = new Product('LG TV', 300)
// console.log(prod1)
// console.log(prod1.getweight())
