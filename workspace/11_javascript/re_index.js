function test() {
  return ["one", "two", "three"];
}

const [one, two, three, four = "four"] = ["one", "two", "three"];
console.log(one, two, three, four);

const lists = ["apple", "grape"];
console.log(lists[0]);
[item1, item2, item3 = "peach"] = lists;
console.log(item3);

const obj = {
  key1: "one",
  key2: "two",
};

console.log(obj.key1);
console.log(obj["key1"]);

// const { key1, key2, key3 = "three" } = obj;
// console.log(obj);

const { key2, key1, key3 = "three" } = obj;
console.log(key2, key1, key3);

function test2() {
  return { result: true, statusCode: 200, a: 10, b: 20 };
}
const { result, statusCode, a: a2, b: b2 } = test2();
console.log(result, a2, b2);

const i = [10, 20, 30];
const j = [40, 50];
const x = [60, 70, 80, 90];
const concat = i.concat(j);
// console.log(concat);

const spread = [...i, ...j];
console.log(spread);

const z = [..."hello"];
console.log(z);

function spreadFunc(a, b, c, d) {
  console.log(a - b - c + d);
}
spreadFunc(...x);

function restFunc(a, ...rest) {
  console.log(rest);
}
restFunc(...i);
