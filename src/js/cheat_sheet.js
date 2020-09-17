function getSum() {
  let newArray = Array.prototype.slice.call(arguments, 0);
  return newArray.reduce((current, next) => {
    return current + next;
  });
}
getSum(1, 2, 3, 4, 5);

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
concatObject();

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
exampleWithSimbol();
