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
