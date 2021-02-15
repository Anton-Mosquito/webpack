class Car {
  constructor(model, prise) {
    this.model = model;
    this.prise = prise;
  }
}

class CarFactory {
  constructor() {
    this.cars = [];
  }

  create(model, prise) {
    const candidate = this.getCar(model);
    if (candidate) {
      return candidate;
    }

    const newCar = new Car(model, prise);
    this.cars.push(newCar);
    return newCar;
  }

  getCar(model) {
    return this.cars.find((car) => car.model === model);
  }
}

const factory = new CarFactory();

const bmwX6 = factory.create("bmw", 10000);
const audi = factory.create("audi", 120000);

const bmwX3 = factory.create("bmw", 5000);

console.log(bmwX6);
console.log(audi);
console.log(bmwX3);

console.log(bmwX3 === bmwX6);
