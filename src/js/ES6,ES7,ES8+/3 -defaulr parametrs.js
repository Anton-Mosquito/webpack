/**
 *
 *  Default parametrs
 *
 *
 *
 */

const defaultB = 30;
const getDefault = (c) => c * 2;
function func(a = 10, b = getDefault(a)) {
  return a + b;
}

console.log(func());
/**
 *
 *  Default parametrs
 *
 *
 *
 */
