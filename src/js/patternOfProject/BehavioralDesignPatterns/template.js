class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  responsibilities() {}

  work() {
    return `${this.name} complete ${this.responsibilities()}`;
  }

  getPaid() {
    return `${this.name} has salary ${this.salary}`;
  }
}

class Developer extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }

  responsibilities() {
    return "procces creation of prorams";
  }
}

class Tester extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }

  responsibilities() {
    return "complete proccess testing";
  }
}

const dev = new Developer("Anton", 100000);
console.log(dev.getPaid());
console.log(dev.work());

const tester = new Tester("Victoria", 20000);
console.log(tester.getPaid());
console.log(tester.work());
