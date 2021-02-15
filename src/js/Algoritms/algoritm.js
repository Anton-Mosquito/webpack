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

/**
 *
 * хеш-таблицы
 *
 *
 *
 */
class HashTable {
  constructor() {
    this.store = new Array(10);
  }

  hash(key) {
    let sum = 0;

    for (let index = 0; index < key.length; index++) {
      sum += key.charCodeAt(index);
    }
    return sum % this.store.length;
  }

  add(key, value) {
    this.store[this.hash(key)] = this.store[this.hash(key)] || [];
    this.store[this.hash(key)].push({ key, value });
  }

  get(key) {
    return this.store[this.hash(key)].find((item) => item.key === key).value;
  }
}

const dict = new HashTable();
dict.add("ab", "1");
dict.add("ba", "2");
console.log(dict.get("ab"), dict.get("ba"));
/**
 *
 *  хеш-таблицы
 *
 *
 *
 */

/**
 *
 *  обход дерева на практике
 *
 *
 *
 */
// document.body.addEventListener("click", (e) => {
//   const attr = e.target.dataset.tree;
//   if (attr === "check") {
//     const checked = e.target.checked;
//     walk(e.target, function (child) {
//       child.checked = checked;
//     });
//   }
// });

// function walk(root, callback) {
//   if (root.type === "checkbox") {
//     callback(root);
//     const next = root.parent.children[1];
//     if (next && next.classList.contains("tree")) {
//       walk(next, callback);
//     }
//   } else {
//     [...root.children].forEach((child) => {
//       walk(child, callback);
//     });
//   }
// }
/**
 *
 *  обход дерева на практике
 *
 *
 *
 */

/**
 *
 *   связные списки на примере LRU Cache
 *
 *
 *
 */
class ListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = this.tail = null;
  }
  push(node) {
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
  }
  shift() {
    const headr = this.head;
    this.splice(this.head);
    return head;
  }
  splice(node) {
    // всего одна нода в списке
    if (!node.prev && !node.next) {
      this.head = this.tail = null;
      // это хвост
    } else if (!node.next) {
      this.tail = node.prev;
      this.tail.next = null;
      // это голова
    } else if (!node.prev) {
      this.head = node.next;
      this.head.prev = null;
      // где-то в середине...
    } else {
      // prev <-> next
      const next = node.next;
      const prev = node.prev;
      prev.next = next;
      next.prev = prev;
      node.next = node.prev = null;
    }
    this.length--;
  }
}

class LRUCashe {
  constructor(capacity) {
    this.capacity = capacity;
    this.q = [];
    this.m = {};
  }

  get(key) {
    if (this.m[key]) {
      return -1;
    }
    const value = this.m[key].value;
    this.put(key.value);
    return value;
  }

  put(key, value) {
    if (this.m[key]) {
      this.q.splice(
        this.q.findIndex((node) => node === this.m[key]),
        1
      );
      this.m[key] = null;
    }
    this.q.push({ key, value });
    this.m[key] = this.q[this.q.length - 1];
    if (this.q.length > this.capacity) {
      this.m[this.q.shift().key] = null;
    }
  }
}

class LRUCache2 {
  constructor(capacity) {
    this.capacity = capacity;
    this.q = new LinkedList();
    this.m = {};
  }
  get(key) {
    if (!this.m[key]) {
      return -1;
    }
    const value = this.m[key].value;
    this.put(key, value);
    return value;
  }
  put(key, value) {
    if (this.m[key]) {
      // {key, value}
      // x <-> x <-> x
      this.q.splice(this.m[key]);
      this.m[key] = null;
    }
    const node = new ListNode(key, value);
    this.q.push(node);
    this.m[key] = node;
    if (this.q.length > this.capacity) {
      this.m[this.q.shift().key] = null;
    }
  }
}

const cache = new LRUCashe(3);
cache.put(1, 1);
cache.put(2, 1);
cache.get(2);
cache.put(3, 1);
cache.put(4, 1);
console.log(cache.q);

/**
 *
 *   связные списки на примере LRU Cache
 *
 *
 *
 */

/**
 *
 *   Графы и их обход
 *
 *
 *
 */

/**
 *
 *   Графы и их обход
 *
 *
 *
 */

/**
 *
 *  Рекурсия с мемоизацией для вычисления diff'а текста
 *
 *
 *
 */

/**
 *
 *   Рекурсия с мемоизацией для вычисления diff'а текста
 *
 *
 *
 */
