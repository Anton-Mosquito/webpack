class SimpleMembership {
  constructor(name) {
    this.name = name;
    this.cost = 0;
  }
}

class StandartMembership {
  constructor(name) {
    this.name = name;
    this.cost = 50;
  }
}

class PremiumMembership {
  constructor(name) {
    this.name = name;
    this.cost = 500;
  }
}

class MemberFactory {
  static list = {
    simple: SimpleMembership,
    standard: StandartMembership,
    premium: PremiumMembership,
  };

  create(name, type = "simple") {
    const Membership = MemberFactory.list[type] || MemberFactory.list.simple;
    const member = new Membership(name);
    member.type = type;
    member.define = function () {
      console.log(`${this.name} ${this.type} ${this.cost}`);
    };
    return member;
  }
}

const factory = new MemberFactory();

const members = [
  factory.create("Anton", "simple"),
  factory.create("Alex", "premium"),
  factory.create("Vasya", "standard"),
  factory.create("Ivan", "premium"),
  factory.create("Petr"),
];

members.forEach((memebr) => {
  memebr.define();
});
////////////
//////////
////////////
////////////////
class FullTime {
  constructor() {
    this.rate = `$12`;
  }
}

class TemporaryTime {
  constructor() {
    this.rate = `$2`;
  }
}
class PartTime {
  constructor() {
    this.rate = `$6`;
  }
}
class ContractTime {
  constructor() {
    this.rate = `$100`;
  }
}

class Employee {
  create(type) {
    let employee;
    if (type === "fulltime") {
      employee = new FullTime();
    } else if (type === "parttime") {
      employee = new PartTime();
    } else if (type === "temporary") {
      employee = new TemporaryTime();
    } else if (type === "contract") {
      employee = new ContractTime();
    }
    employee.type = type;
    employee.say = () => {
      console.log(`${this.type}: rate ${this.rate}/hour`);
    };
    return employee;
  }
}

const factory1 = new Employee();
const fulltime = factory1.create("fulltime");
const parttime = factory1.create("parttime");
const temporary = factory1.create("temporary");
const contract = factory1.create("contract");

fulltime.say();
parttime.say();
temporary.say();
contract.say();
