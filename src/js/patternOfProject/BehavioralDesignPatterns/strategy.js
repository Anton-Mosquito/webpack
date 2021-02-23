class Vehicle {
  travelTime() {
    return this.timeTaken;
  }
}

class Bus extends Vehicle {
  constructor() {
    super();
    this.timeTaken = 10;
  }
}

class Taxi extends Vehicle {
  constructor() {
    super();
    this.timeTaken = 5;
  }
}

class Car extends Vehicle {
  constructor() {
    super();
    this.timeTaken = 3;
  }
}

class Commute {
  travel(transport) {
    return transport.travelTime();
  }
}

const commute = new Commute();

// console.log(commute.travel(new Taxi()));
// console.log(commute.travel(new Bus()));
// console.log(commute.travel(new Car()));

////////////////////////////////////////////////

const logger = (startegy, level, message, ...args) => {
  return startegy(level, message, ...args);
};

const logToConsoleStrategy = (level, message) => {
  console[level](message);
};

const logToDomStrategy = (level, message, node) => {
  node.innerHTML = `<div class="${level}">${message}</div>`;
};

logger(logToConsoleStrategy, "log", "log first message to console");

logger(logToDomStrategy, "warn", "log second message to DOM");
