class Iterator {
  constructor(data) {
    this.index = 0;
    this.data = data;
  }

  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.index < this.data.length) {
          return {
            value: this.data[this.index++],
            done: false,
          };
        } else {
          this.index = 0;
          return {
            done: true,
            value: void 0,
          };
        }
      },
    };
  }
}

function* generator(collection) {
  let index = 0;
  while (index < collection.length) {
    yield collection[index++];
  }
}

const itearator = new Iterator(["This", "is", "iterator"]);
const gen = generator(["This", "is", "iterator"]);

// for (const iterator of itearator) {
//   console.log("Value: ", iterator);
// }

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
