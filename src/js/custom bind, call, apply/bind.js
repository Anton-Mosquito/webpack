const person = {
  name: "Anton",
};

function info(phone, email) {
  console.log(`Name ${this.name}, Tel.:${phone}, Email: ${email}`);
}

// info.bind(person)("1233", "vip@ukr.net");
// info.bind(person, "1111111")("vip@ukr.net");
// info.bind(person, "1111111", "vip@ukr.net")();

// Simple
// function bind(fn, context, ...rest) {
//   return fn.bind(context, ...rest);
// }

// bind(info, person)("1233", "vip@ukr.net");
// bind(info, person, "1233")("vip@ukr.net");
// bind(info, person, "1111111", "vip@ukr.net")();

// Difficult
// function bind(fn, context, ...rest) {
//   return function (...args) {
//     const uniqId = Date.now().toString();
//     context[uniqId] = fn;
//     const result = context[uniqId](...rest.concat(args));

//     delete context[uniqId];
//     return result;
//   };
// }

// ES5
// function bind(fn, context) {
//   const rest = Array.prototype.slice.call(arguments, 2);
//   return function () {
//     const args = Array.prototype.slice.call(arguments);
//     return fn.apply(context, rest.concat(args));
//   };
// }

// ES6
// function bind(fn, context, ...rest) {
//   return function (...args) {
//     // return fn.apply(context, rest.concat(args));
//     return fn.call(context, ...rest.concat(args));
//   };
// }

// bind(info, person)("1233", "vip@ukr.net");
// bind(info, person, "1233")("vip@ukr.net");
// bind(info, person, "1111111", "vip@ukr.net")();

// Call
function call(fn, context, ...args) {
  const uniqId = Date.now().toString();
  context[uniqId] = fn;
  const result = context[uniqId](...args);

  delete context[uniqId];
  return result;
}

// call(info, person, "123123", "@bj.ru");

// Apply
function apply(fn, context, args) {
  const uniqId = Date.now().toString();
  context[uniqId] = fn;
  const result = context[uniqId](...args);

  delete context[uniqId];
  return result;
}

apply(info, person, ["123123", "@bj.ru"]);

// https://drive.google.com/drive/folders/1Y2SfQAfOWfSA18tPDqOHyoL9JSnDzkyc?usp=sharing;
