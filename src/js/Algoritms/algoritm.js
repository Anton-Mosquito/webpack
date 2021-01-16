const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function searchElements(arr, el) {
  // 0(n)
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === el) {
      return index;
    }
  }
  return -1;
}

function searchElementsAlgoritms(arr, el) {
  let left = -1;
  let right = arr.length;

  // 0(log N)
  while (right - left > 1) {
    const middle = Math.floor((left + right) / 2);

    if (arr[middle] === el) {
      return middle;
    }

    if (arr[middle] > el) {
      right = middle;
    } else {
      left = middle;
    }
  }
  return -1;
}

// console.log(searchElements(array, 9));
// console.log(searchElementsAlgoritms(array, 9));

const array1 = [1, 2, 3, 2, 4, 5, 2, 3, 8, 12, 10, 3];
array1.sort((a, b) => a - b);

function countFreq(arr, el) {
  const posEl = searchElementsAlgoritms(array1, el);

  if (posEl === -1) {
    return 0;
  }

  let i = posEl;
  while (arr[i] === el) {
    i--;
  }

  let j = posEl;
  while (arr[j] === el) {
    j++;
  }

  return j - i - 1;
}

// console.log(countFreq(array1, 3));

/**
 *
 *  рекурсия
 *
 *
 *
 */

function fact(n) {
  if (n === 0 && n === 1) {
    return 1;
  }
  // 0(n)
  // 0(n)
  return n * fact(n - 1);
}

function fact2(n) {
  const stack = [[n, 1]];

  while (stack.length > 0) {
    const [current, result] = stack.pop();
    if (current === 0 || current === 1) {
      return result;
    }
    stack.push([current - 1, result * current]);
  }
}

// console.log(fact2(4), fact2(5));

function fact3(n) {
  let result = 1;
  for (let index = 1; index <= n; index++) {
    result *= index;
  }
  return result;
}
console.log(fact3(4), fact3(5));

//Ребенок поднимается по лестнице из n ступеней.
// За один шаг он может переместиться на один, два или три ступеньки.
//Найдит количество возможных вариантов перемещения ребенка по лестнице.
// if(n <0) return 0;
// if(n === 0) return 1;
//c[n]= c[n-1] + c[]
let hit = 0;
let miss = 0;
function countWays(n, cashe = []) {
  if (n < 0) {
    miss++;
    return 0;
  }
  if (!cashe[n]) {
    miss++;
    if (n === 0) {
      cashe[n] = 1;
    } else {
      cashe[n] =
        countWays(n - 1, cashe) +
        countWays(n - 2, cashe) +
        countWays(n - 3, cashe);
    }
    return cashe[n];
  } else {
    hit++;
    return cashe[n];
  }
}
// 0(3^n)
// 0(n) memory
// console.log(countWays(3));
// console.log(countWays(2));
// console.log(countWays(1));
// console.log(countWays(12));
console.log(countWays(12), miss, hit);
/**
 *
 *  рекурсия
 *
 *
 *
 */
