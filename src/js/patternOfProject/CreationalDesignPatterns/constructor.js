// function Server(name, ip) {
//   this.name = name;
//   this.ip = ip;
// }

// Server.prototype.getUrl = function () {
//   return `https://${this.ip}:80`;
// };

class Server {
  constructor(name, ip) {
    this.name = name;
    this.ip = ip;
  }

  getUrl() {
    return `https://${this.ip}:80`;
  }
}

// const aws = new Server("AWS GErmany", "82.21.21.32");
// console.log(aws.getUrl());

class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }
}

const pers = new Person("John", 20, "RU");
console.log(pers);

function Person1(name, age, country) {
  this.name = name;
  this.age = age;
  this.country = country;
}

const pers1 = new Person1("John", 20, "RU");
console.log(pers1);
