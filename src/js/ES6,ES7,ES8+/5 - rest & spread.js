/**
 *
 * Rest
 *
 *
 *
 */
function average(...args) {
  //   const arr = Array.from(arguments);
  return (
    args.reduce((current, nextValue) => current + nextValue, 0) / args.length
  );
}

// console.log(average(10, 20, 30, 40, 50));
/**
 *
 * Rest
 *
 *
 *
 */

/**
 *
 * Spread
 *
 *
 *
 */
const array = [1, 2, 3, 5, 8, 13];
// console.log(...array);
// console.log(Math.max(...array));
// console.log(Math.min(...array));
// console.log(Math.max.apply(null, array));

const fib = [1, ...array];
// console.log(fib);
/**
 *
 * Spread
 *
 *
 *
 */

/**
 *
 * Destructuring
 *
 *
 *
 */
// const [a, b = 43, ...c] = array;
// console.log(a, b, c);

// const [a, , c] = array;
// console.log(a, c);

const obj = {
  country: "Ukraine",
  city: "Kiev",
  street: "Shevchenko",
  concat: function () {
    return `${this.country} ${this.city} ${this.street}`;
  },
};

// const { city, country, street = "Lemina", concat: objConcat } = obj;
// console.log(objConcat.call(obj));
// console.log(city, country, street);

// const { city, ...rest } = obj;
// console.log(city);
// console.log(rest);

const newObj = { ...obj, street: "Tverskaya", code: "123" };
console.log(newObj);

/**
 *
 * Destructuring
 *
 *
 *
 */
