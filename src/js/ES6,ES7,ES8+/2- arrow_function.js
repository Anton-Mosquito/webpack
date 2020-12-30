// function sum(a, b) {
//   return a + b;
// }

// function cube(a) {
//   return a ** 3;
// }

const sum = (a, b) => {
  return a + b;
};

const cube = (a) => a ** 3;

// setTimeout(() => console.log("after 1 sec"), 1000);

/**
 *
 *  Context
 *
 *
 *
 */

function func() {
  console.log(this);
}

const arrow = () => console.log(this);

const person = {
  name: "elena",
  age: 20,
  log: func,
  arrowLog: arrow,
  delayLog: function () {
    const self = this;
    setTimeout(function () {
      console.log(self.name + " " + self.age);
    }, 500);
  },
};

// person.log();
// person.arrowLog();
// console.log(global);
person.delayLog();
