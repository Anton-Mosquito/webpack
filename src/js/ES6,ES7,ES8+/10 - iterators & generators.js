/**
 *
 * iterator & generators
 *
 *
 *
 */
const array = [1, 2, 3, 4];
const str = "Hello";
// console.log(array[Symbol.iterator]);
// console.log(str[Symbol.iterator]);

// const iterator = array[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// for (const iterator of array) {
//   console.log(iterator);
// }

// const obj = {
//   values: ["ru", "ua", "kz"],
//   [Symbol.iterator]() {
//     let i = 0;
//     return {
//       next: () => {
//         const value = this.values[i];
//         i++;
//         return {
//           done: i > this.values.length,
//           value,
//         };
//       },
//     };
//   },
// };

// for (const iterator of obj) {
//   console.log(iterator);
// }
/**
 *
 *
 * iterator & generators
 *
 *
 *
 */

/**
 *
 *
 * generators
 *
 *
 *
 */
function* gen(num = 4) {
  for (let index = 0; index < num; index++) {
    try {
      yield index;
    } catch (e) {
      console.log("Error", e);
    }
  }
}
const iterator = gen(3);
console.log(iterator.next());
console.log(iterator.throw("My error"));
console.log(iterator.next());
console.log(iterator.next());

for (const iterator of gen(4)) {
  console.log(iterator);
}

/**
 *
 *
 * generators
 *
 *
 *
 */
