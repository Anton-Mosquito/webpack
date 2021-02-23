class Programmer {
  constructor(name) {
    this.name = name;
  }

  code() {
    console.log(`${this.name}`);
  }
}

class FrontEnd extends Programmer {
  constructor(name) {
    super(name);
  }

  angulra() {
    console.log(`${this.name} is creating Angulra app...`);
  }
}

class BackEnd extends Programmer {
  constructor(name) {
    super(name);
  }

  nodeJS() {
    console.log(`${this.name} is creating NodeJS app...`);
  }
}

class FullStack extends FrontEnd {
  constructor(name) {
    super(name);
  }

  nodeJS() {
    console.log(`${this.name} is creating NodeJS app...`);
  }
}

const programmer = new Programmer("Programmer");
programmer.code();

const fron = new FrontEnd("Willy");
fron.code();
fron.angulra();

const back = new BackEnd("Joy");
back.code();
back.nodeJS();
