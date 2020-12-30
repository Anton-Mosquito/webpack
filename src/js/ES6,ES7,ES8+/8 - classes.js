class Person {
  type = "human";
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(this.name + " говорит Привет!");
  }
}

const max = new Person("max");
// console.log(max);
//max.greet();
// console.log(max.type);
// console.log(max.__proto__ === Person.prototype);

class Programmer extends Person {
  constructor(name, job) {
    super(name);
    this._job = job;
  }

  get job() {
    return this._job.toUpperCase();
  }

  set job(job) {
    if (job.length < 2) {
      throw new Error("unvalid value");
    }
    this._job = job;
  }

  greet() {
    super.greet();
    console.log("rewrite!");
  }
}

const igor = new Programmer("Igor", "FrondEnd");
// console.log(igor);
// igor.greet();
// console.log(igor.job);
// igor.job = "backEnd";
// console.log(igor.job);

// Static
class Util {
  static averega(...args) {
    return args.reduce((acc, i) => (acc += i), 0) / args.length;
  }
}

console.log(Util.averega(1, 1, 2, 3, 5, 8, 13));
