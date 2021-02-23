// 1
const num = 54;
// let result;

// if (num > 20) {
//   result = "More than 20";
// } else {
//   result = "Less than 20";
// }

const result = num > 20 ? "More than 20" : "Less than 20";
// console.log(result);

// 2
let variable = 1;
let valiable2;

// if (variable !== null && variable !== undefined && variable !== "") {
//   valiable2 = variable;
// } else {
//   valiable2 = "some value";
// }
valiable2 = variable || "some value";

// console.log(valiable2);

// 3
// let x;
// let y;
// let z = 42;
let x,
  y,
  z = 42;

// 4
// let isSame = true;
// if (isSame) {
// }
// if (!isSame) {}

// 5
const names = ["Igor", "Elena", "Lubov"];
// for (let index = 0; index < names.length; index++) {
//   const element = names[index];
//   console.log(element);
// }

// for (const iterator of names) {
//   console.log(iterator);
// }
// names.forEach((element, index, array) => {
//   console.log(`names ${index}  = ${element}`);
// });

// 6
// let port;
// if (process.env.port) {
//   port = procces.env.PORT;
// } else {
//   port = 4200;
// }

const port = process.env.PORT || 4200;

// 7
// for (let index = 0; index < 10e6; index++) {
//   console.log(index);
// }

// 8
// const a = 1,
//   b = 2;
// const myObj = {
//   a: a,
//   b: b,
// };

// 9

// setTimeout(() => {
//   console.log("After 2 seconds");
// }, 2000);

const tripple = (num) => num * 3;

// 10
function rgb(r, g, b) {
  if (r === undefined) {
    r = 0;
  }
  if (g === undefined) {
    g = 255;
  }
  return `rgb(${r},${g},${b})`;
}

const rgb1 = (r = 0, g = 255, b) => `rgb(${r},${g},${b})`;

// 11
function createUrl(base, domain) {
  return "http://" + base + "." + domain;
}

const createUrl1 = () => `http://${base}.${domain}`;

// 12
// const alert = window.alert;
// const confirm = window.confirm;
// const prompt = window.prompt;

// const { alert, confirm, prompt } = window;

// 13
const arr = [1, 2, 3];
// const nums = [4, 5, 6].concat(arr);
// const cloned = nums.concat();

// const nums = [4, 5, 6, ...arr];
// const nums = [...arr, 4, 5, 6];
// const cloned = [...nums];
// console.log(nums);

// 14
// console.log(Math.floor(9.7) === 9);
// console.log(~~9.7 === 9);

// 15
// console.log(Math.pow(2, 3));
// console.log(Math.pow(2, 4));
// console.log(Math.pow(4, 3));

// console.log(2 ** 3);
// console.log(2 ** 4);
// console.log(4 ** 3);

// 16
// const int = parseInt("42");
// const float = parseFloat("42.42");

// const int = +"42";
// const float = +"42.42";

// console.log(typeof int, typeof float);

// 17
// if ([1, 2, 3].indexOf(3) > -1) {
// }
// if (~[1, 2, 3].indexOf(3)) {
//   console.log(); //find
// }
// if (!~[1, 2, 3].indexOf(3)) {
//   console.log(); // don't find
// }

// if (!~[1, 2, 3].includes(3)) {
//   console.log(); // find
// }

// 18
const car = {
  model: "Ford",
  year: "2019",
  color: "red",
};

console.log(Object.entries(car));
console.log(Object.keys(car));
console.log(Object.values(car));
