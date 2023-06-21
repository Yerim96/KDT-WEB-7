class Cat {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  mew() {
    console.log("야옹");
  }

  eat() {
    console.log("먹이를 먹습니다.");
  }
  test() {
    this.mew();
  }
}

let cat1 = new Cat("나비", 1);
console.log(cat1.test());
cat1.mew();
cat1.eat();
cat1.test();

class Product {
  name = " ";
  price = 0;

  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  getPrice() {
    return this.price + "만원";
  }
  setPrice(price) {
    this.price = price;
  }
}

class TV extends Product {
  constructor(name, price, weight) {
    super(name, price);
    this.weight = weight;
  }
  getweight() {
    return this.weight;
  }
}

const tv1 = new TV("삼성티비", 200, "27d인치");
console.log(tv1);
console.log(tv1.getPrice());
tv1.setPrice(150);
console.log(tv1.getPrice());
