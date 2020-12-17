const { functions, get, head } = require("lodash");

function getSum() {
  let newArray = Array.prototype.slice.call(arguments, 0);
  return newArray.reduce((current, next) => {
    return current + next;
  });
}
//getSum(1, 2, 3, 4, 5);

function concatObject() {
  let data = {
    name: "Vasya",
    age: 99,
    eyeColor: "blue",
  };
  let options = {
    gender: "male",
    sex: "everyDay",
  };

  // let resultObjct = Object.assign({}, data, options);
  // console.log(data);
  // console.log(resultObjct);

  let resultObjct = {
    ...data,
    ...options,
  };
  console.log(resultObjct);
}
// concatObject();

function exampleWithSimbol() {
  let id = Symbol();
  let user = {
    [id]: "Unique ID",
    name: "Petya",
    age: "30",
  };
  console.log(user);
  console.log(user[id]);

  const first = Symbol("first");
  const second = Symbol("first");
  console.log(first === second);

  const first1 = Symbol.for("first value");
  const second1 = Symbol.for("first value");
  console.log(first1 === second1);

  console.log(Symbol.keyFor(first1));
}
//exampleWithSimbol();

const checkDate = (year, month, day) => {
  const date = new Date(year, month - 1, day);
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
};
//console.log(checkDate(2020, 1, 31));

const checkLastDayOfMonthAndLeapYear = (year, month = 2, day = 0) => {
  const date = new Date(year, month, day);
  return date.getDate() === 29
    ? console.log(`This year is a leap`)
    : console.log(`This year isn't a leap`);
};
// checkLastDayOfMonthAndLeapYear(2100);

const checkTypeOfInSteroid = () => {
  const arr = [];
  const obj = {};
  const number = 4;
  const str = "123123";
  const nul = null;
  const undef = undefined;
  const nan = NaN; /*!! невозможно проверить только через isNaN() */
  const bool = true;
  const char = Symbol();
  console.log({}.toString.call(arr));
  console.log({}.toString.call(obj));
  console.log({}.toString.call(number));
  console.log({}.toString.call(str));
  console.log({}.toString.call(nul));
  console.log({}.toString.call(undef));
  console.log({}.toString.call(nan));
  console.log({}.toString.call(bool));
  console.log({}.toString.call(char));
  console.log({}.toString.call(window));
  console.log({}.toString.call(new XMLHttpRequest()));
};
//checkTypeOfInSteroid();

const createConstructor = () => {
  if (!Function.prototype.construct) {
    Function.prototype.construct = function (argArray) {
      if (!Array.isArray(argArray)) {
        throw new TypeError("Argument must be an array");
      }
      var constr = this;
      var nullaryFunc = Function.prototype.bind.apply(
        constr,
        [null].concat(argArray)
      );
      return new nullaryFunc();
    };
  }
};

const copyObject = (orig) => {
  // 1. copy has same prototype as orig
  let copy = Object.create(Object.getPrototypeOf(orig));

  // 2. copy has all of orig’s properties
  copyOwnPropertiesFrom(copy, orig);

  return copy;
};

/* Example with memoize*/
const meomize = (func) => {
  let cashe = {};
  return function () {
    const key = arguments.length + Array.prototype.join.call(arguments, ",");
    if (key in cashe) return cashe[key];
    else return (cashe[key] = func.apply(this.arguments));
  };
};

/**
 *
 *Promise
 *
 *
 *
 */
/*  SetTimeout alternative*/
const sleep = (ms) => new Promise((resolve) => setTimeout(() => resolve(), ms));

// sleep(2000).then(() => console.log("After 2 sec"));
// sleep(3000).then(() => console.log("After 3 sec"));

Promise.all([sleep(2000), sleep(5000)]).then(() => {
  console.log("All promises");
});

Promise.race([sleep(2000), sleep(5000)]).then(() => {
  console.log("Race promises");
});
/**
 *
 *Promise
 *
 *
 *
 */

/**
 *
 *Proxy Object
 *
 *
 *
 */
//Proxy Object
const person = {
  name: "Anton",
  age: 40,
  job: "OfficeWorker",
};

const objectProxy = new Proxy(person, {
  get(target, prop) {
    // console.log("target ", target);
    // console.log("Prop ", prop);
    console.log(`Getting prop ${prop}`);
    if (!(prop in target)) {
      return prop
        .split("_")
        .map((p) => target[p])
        .join(" ");
    }
    return target[prop];
  },

  set(target, prop, value) {
    if (prop in target) {
      target[prop] = value;
    } else {
      throw new Error(`No ${prop} field in target`);
    }
  },

  has(target, prop) {
    return ["age", "name", "job"].includes(prop);
  },

  deleteProperty(target, prop) {
    console.log(`Deleting ${prop}`);
    delete target[prop];
    return true;
  },
});

// objectProxy.name;
// objectProxy.age = 26;
// console.log(objectProxy);
// objectProxy.sex = 'lesbian';
// console.log("name" in objectProxy);
// console.log("age2" in objectProxy);
// delete objectProxy.age;
// console.log(objectProxy);
// console.log(objectProxy.name_age_job);
// console.log(objectProxy.age_name);
// console.log(objectProxy.job_age);
// console.log(objectProxy.job_age_job_age_job_age);

// Proxy Function
const log = (text) => `Log ${text}`;

const functionProxy = new Proxy(log, {
  apply(target, thisArgs, argsArray) {
    console.log(target);
    console.log(thisArgs);
    console.log(argsArray);
    console.log("Calling function.....");
    return target.apply(thisArgs, argsArray).toUpperCase();
  },
});

// console.log(functionProxy("test"));

//Proxy classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const ClassesProxy = new Proxy(Person, {
  construct(target, args) {
    console.log("Construct....");
    return new Proxy(new target(...args), {
      get(t, prop) {
        console.log(`Getting prop ${prop}`);
        return t[prop];
      },
    });
  },
});

const p = new ClassesProxy("Anton", 40);
console.log(p);
console.log(p.name);

//Wrapper
const withDefaultValue = (target, defaultValue = "") => {
  return new Proxy(target, {
    get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue),
  });
};

const position = withDefaultValue(
  {
    x: 24,
    y: 42,
  },
  0
);

// console.log(position);
// console.log(position.x);
// console.log(position.y);
// console.log(position.z);
// console.log(position.asdasdasdasdd);

//Hidden properties

const withHiddenProps = (target, prefix = "_") => {
  return new Proxy(target, {
    has: (obj, prop) => prop in obj && !prop.startsWith(prefix),
    ownKeys: (obj) => Reflect.ownKeys(obj).filter((p) => !p.startsWith(prefix)),
    get: (obj, prop, receiver) => (prop in receiver ? obj[prop] : void 0),
  });
};

const data = withHiddenProps({
  name: "Anton",
  age: 25,
  _uid: "unique ID",
});

// console.log(data);
// console.log(data.age);
// console.log(data.name);
// console.log(data._uid);
// console.log("uid" in data);
// for (let key in data) console.log(key);
// console.log(Object.keys(data));

// Optimization
// const userData = [
//   { id: 11, name: "Vlad", job: "Fullstack", age: 25 },
//   { id: 22, name: "Elena", job: "Student", age: 22 },
//   { id: 33, name: "Victor", job: "Backend", age: 23 },
//   { id: 44, name: "Vasilisa", job: "Teacher", age: 24 },
// ];

// console.log(userData);
// console.log(userData.find((user) => user.id === 22));

// const index = {};
// userData.forEach((i) => (index[i.id] = i));
// console.log(index[22]);
// console.log(index[33]);

const IndexArray = new Proxy(Array, {
  construct(target, [args]) {
    const index = {};
    args.forEach((item) => (index[item.id] = item));
    return new Proxy(new target(...args), {
      get(array, prop) {
        switch (prop) {
          case "push":
            return (item) => {
              index[item.id] = item;
              array[prop].call(array, item);
            };
          case "findByID":
            return (id) => index[id];
          default:
            return array[prop];
        }
      },
    });
  },
});

const users = new IndexArray([
  { id: 11, name: "Vlad", job: "Fullstack", age: 25 },
  { id: 22, name: "Elena", job: "Student", age: 22 },
  { id: 33, name: "Victor", job: "Backend", age: 23 },
  { id: 44, name: "Vasilisa", job: "Teacher", age: 24 },
]);

// console.log(users);
// console.log(users[0]);
// console.log(users[2]);
// users.push({ id: 55, name: "Sergey" });
// console.log(users[4]);
// console.log(users.findByID(33));

/**
 *
 *Proxy Object
 *
 *
 *
 */

/**
 *
 *Generator. Symbol iterator, for of
 *
 *
 *
 */

function* strGenerator() {
  yield "H";
  yield "e";
  yield "l";
  yield "l";
  yield "o";
  yield "!";
}

const str = strGenerator();
// console.log(str);
// console.log(str.next());
// console.log(str.next());
// console.log(str.next().value);
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());

function* numberGen(x = 10) {
  for (let index = 0; index < x; index++) {
    yield index;
  }
}

const number = numberGen(7);

// console.log(number);
// console.log(number.next());
// console.log(number.next());
// console.log(number.next());
// console.log(number.next());
// console.log(number.next());
// console.log(number.next());
// console.log(number.next());
// console.log(number.next());

const objIterator = {
  [Symbol.iterator](x = 10) {
    let i = 0;

    return {
      next() {
        if (i < x) {
          return {
            value: ++i,
            done: false,
          };
        } else {
          return {
            value: undefined,
            done: true,
          };
        }
      },
    };
  },
};

// const itr = iterator.gen();
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());

function* iter(x = 10) {
  for (let index = 0; index < x; index++) {
    yield index;
  }
}

// for (const iterator of objIterator) {
//   console.log(iterator);
// }

// for (const iterator of iter(6)) {
//   console.log(iterator);
// }
/**
 *
 * Generator
 *
 *
 *
 */

/**
 *
 * Array methods
 *
 *
 *
 */
const people = [
  { name: "Anton", age: 25, budget: 48000 },
  { name: "Victor", age: 36, budget: 3000 },
  { name: "Alena", age: 17, budget: 1000 },
  { name: "Nastya", age: 52, budget: 5748 },
  { name: "Vova", age: 11, budget: 90000 },
  { name: "Denis", age: 31, budget: 6633 },
];

//ForEach
// people.forEach(function (elementOfArray, indexOfArray, arrayPeople) {
//   console.log("Elem", elementOfArray);
//   console.log("Index", indexOfArray);
//   console.log("MAssice", arrayPeople);
// });

//Map - create a new Array
// const newPeople = people.map((elementOfArray) => {
//   return `${elementOfArray.name} (${elementOfArray.age})`;
// });
// console.log(newPeople);

//Filter - create new Array
// const newPeople = people.filter((elementOfArray) => elementOfArray.age >= 18);
// console.log(newPeople);

//Reduce - create new Array
// const amount = people.reduce((total, elementOfArray) => {
//   return total + elementOfArray.budget;
// }, 0);
// console.log(amount);

//Find
// const fgdffgdf = people.find((elementOfArray) => {
//   return elementOfArray.name === "Anton";
// });
// console.log(fgdffgdf);

//FindIndex
// const fgdffgdfIndex = people.findIndex((elementOfArray) => {
//   return elementOfArray.name === "Anton";
// });
// console.log(fgdffgdfIndex);

const amount = people
  .filter((elem) => elem.budget > 3000)
  .map((elem) => {
    return {
      info: `${elem.name} (${elem.age})`,
      budget: Math.sqrt(elem.budget),
    };
  })
  .reduce((total, elem) => total + elem.budget, 0);
console.log(amount);
/**
 *
 *  Array methods
 *
 *
 *
 */

/**
 *
 *  Map , Set , WeekMap , WeekSet
 *
 *
 *
 */
const obj = {
  name: "Anton",
  age: 42,
  job: "Junior",
};

const entries = [
  ["name", "Anton"],
  ["age", 26],
  ["job", "Junior"],
];

// console.log(Object.entries(obj));
// console.log(Object.fromEntries(entries));

const map = new Map(entries);

map.set("newField", 42).set(obj, "Value of Object").set(NaN, "NaN");

// map.delete("job");
// console.log(map.has("job"));
// console.log(map.size);
// map.clear();
// console.log(map.size);
//===========================================
// for (const [key, value] of map.entries()) {
//   console.log(key, value);
// }

// for (const val of map.values()) {
//   console.log(val);
// }

// for (const key of map.keys()) {
//   console.log(key);
// }

// map.forEach((val, key, m) => {
//   console.log(val, key, m);
// });
//===============================

// const array = [...map] || Array.from(map);
// console.log(array);

// const mapObj = Object.fromEntries(map.entries());
// console.log(mapObj);
//================================
// const usersMap = [{ name: "alex" }, { name: "lena" }, { name: "igor" }];
// const visits = new Map();
// visits
//   .set(usersMap[0], new Date())
//   .set(usersMap[1], new Date(new Date().getTime() + 1000 * 60))
//   .set(usersMap[2], new Date(new Date().getTime() + 5000 * 60));

// function lastVisit(user) {
//   return visits.get(user);
// }

// console.log(lastVisit(usersMap[1]));

const set = new Set([1, 2, 3, 3, 3, 4, 5, 5, 6]);
set.add(10).add(20).add(30).add(20);
// console.log(set);
// console.log(set.has(42));
// console.log(set.size);
// console.log(set.delete(1));
// set.clear();
// console.log(set.size);
// console.log(set.values());
// console.log(set.keys());
// console.log(set.entries());

// for (const key of set) {
//   console.log(key);
// }
//===============================
// function uniqueValues(array) {
//   return [...new Set(array)] || Array.from(new Set(array));
// }
// console.log(uniqueValues([1, 2, 3, 3, 4, 5, 6, 6, 6, 7, 8, 9, 0, 0, 0, 0, 0]));
//=============================================================
// let objWeekMap = { name: "weekMap" };
// const arrWeekMap = [objWeekMap];
// objWeekMap = null;
// console.log(objWeekMap);
// console.log(arrWeekMap[0]);
// const weekMap = new WeakMap([[objWeekMap, "obj data"]]);
// objWeekMap = null;
// console.log(weekMap.has(objWeekMap));
// console.log(weekMap.get(objWeekMap));
// console.log(weekMap);
//=========================================================
// const cache = new WeakMap();
// function cacheUser(user) {
//   if (!cache.has(user)) {
//     cache.set(user, Date.now());
//   }
//   return cache.get(user);
// }

// let lena = { name: "Lena" };
// let alex = { name: "Alex" };
// cacheUser(lena);
// cacheUser(alex);

// lena = null;

// console.log(cache.has(lena));
// console.log(cache.has(alex));
//=================================================
const usersWeakSet = [{ name: "alex" }, { name: "lena" }, { name: "igor" }];
const visitsSet = new WeakSet();
visitsSet.add(usersWeakSet[0]).add(usersWeakSet[1]);

usersWeakSet.splice(1, 1);

console.log(visitsSet.has(usersWeakSet[0]));
console.log(visitsSet.has(usersWeakSet[1]));
/**
 *
 *  Map , Set , WeekMap , WeekSet
 *
 *
 *
 */

/**
 *
 *  Запросы на сервер. Fetch, XMLHttpRequest (XHR), Ajax
 *
 *
 *
 */
const requestURL = "https://jsonplaceholder.typicode.com/users";

// Promise
function sendRequest(method, url, body = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.setRequestHeader("content-type", "application/json");
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };
    xhr.onerror = () => {
      reject(xhr.response);
    };
    xhr.send(JSON.stringify(body));
  });
}

// sendRequest("GET", requestURL)
//   .then((data) => console.log(data))
//   .catch((error) => {
//     console.log(error);
//   });

const dataForRequest = {
  name: "Anton",
  age: 26,
};

// sendRequest("POST", requestURL, dataForRequest)
//   .then((data) => console.log(data))
//   .catch((error) => {
//     console.log(error);
//   });

// fetch
function sendRequestFetch(method, url, body = null) {
  const headers = {
    "content-type": "application/json",
  };
  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: headers,
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return response.json().then((error) => {
      const e = new Error("Что-то пошло не так");
      e.data = error;
      throw e;
    });
  });
}

// sendRequestFetch("GET", requestURL)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

sendRequestFetch("POST", requestURL, dataForRequest)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

/**
 *
 *  Запросы на сервер. Fetch, XMLHttpRequest (XHR), Ajax
 *
 *
 *
 */

/**
 *
 *  Rest и Spread
 *
 *
 *
 */

const citiesUkraine = ["Kiev", "Cherkassy", "Odessa", "Lvov"];
const citiesEurope = ["Berlin", "Praga", "Paris"];

const citiesUkraineWithPopulation = {
  Kiev: 4,
  Cherkassy: 0.3,
  Odessa: 1,
  Lvov: 2,
};
const citiesEuropeWithPopulation = {
  Moscow: 26,
  Berlin: 10,
  Praga: 3,
  Paris: 16,
};

// Spread
//Array
// console.log(...citiesUkraine);
// console.log(...citiesEurope);
// const allCities = citiesEurope.concat(citiesUkraine);
// const allCities = [...citiesUkraine, "Los-Angelos", ...citiesEurope];
// console.log(allCities);

//Object
// console.log({ ...citiesUkraineWithPopulation });
// console.log({ ...citiesUkraineWithPopulation, ...citiesEuropeWithPopulation });

//Practise
// const numbers = [1, 432, 2, 6, 85];
// console.log(Math.max.apply(null, numbers));
// console.log(Math.max(...number));

// const divs = document.querySelectorAll("div");
// const nodes = [...divs];
// console.log(divs, Array.isArray(divs));
// console.log(nodes, Array.isArray(nodes));

//Rest
// const sum = (a, b, ...rest) => {
//   console.log(rest);
//   return a + b + rest.reduce((acc, next) => acc + next, 0);
// };
// const numbers = [1, 432, 2, 6, 85];
// console.log(sum(...numbers));

// const aasda = numbers[0];
// const basdasd = numbers[1];

// const [aasda, basdasd, ...other] = numbers;
// console.log(aasda, basdasd, other);

const personMax = {
  name: "Lox",
  age: 788,
  city: "Uj",
  country: "Bolivia",
};

const { name, age, ...adress } = personMax;

console.log(name, age, adress);
/**
 *
 *  Rest и Spread
 *
 *
 *
 */
