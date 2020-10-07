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
//concatObject();

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
