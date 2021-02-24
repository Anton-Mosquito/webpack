console.log("I am module.js");

const privateKey = "private";

export const SECRET_KEY = 24;

export default class Person {
  constructor(name) {
    this.name = name;
  }
}
