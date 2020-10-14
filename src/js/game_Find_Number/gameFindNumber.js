class GameFindNumber {
  constructor() {
    this._table = document.querySelector("[data-game-find-number]");
    this._counter = 1;
    this._size = 2;
    this.rows = null;
    this.cols = null;
    this.init();
  }

  init() {
    this.createElements();
    this.build(this.prepare(this._size));
    this.eventListener();
  }

  createElements() {
    const tableRow = document.createElement("tr");
    const tableCells = document.createElement("td");
    tableCells.dataset.findColor = "cell";
    this.rows = tableRow;
    this.cols = tableCells;
  }

  get tr() {
    return this.rows.cloneNode(true);
  }

  get td() {
    return this.cols.cloneNode(true);
  }

  randomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }

  range(counter) {
    const array = [];
    for (let index = 1; index <= counter; index++) {
      array.push(index);
    }
    return array;
  }

  shuffle(array) {
    let shuffleArray = [];

    while (array.length > 0) {
      const random = this.randomInteger(0, array.length - 1);
      const elem = array.splice(random, 1)[0];
      shuffleArray.push(elem);
    }

    return shuffleArray;
  }

  chunk(array, quantityElems) {
    let arr = [];
    const count = array.length / quantityElems;
    for (let index = 0; index < count; index++) {
      const elem = array.splice(0, quantityElems);
      arr.push(elem);
    }
    return arr;
  }

  prepare(size) {
    let arr = [];

    arr = this.range(size * size);
    arr = this.shuffle(arr);
    arr = this.chunk(arr, size);

    return arr;
  }

  build(arrayOfNumber) {
    this._table.innerHTML = "";
    for (let index = 0; index < arrayOfNumber.length; index++) {
      const tr = this.tr;
      for (let kindex = 0; kindex < arrayOfNumber[index].length; kindex++) {
        const td = this.td;
        td.innerHTML = arrayOfNumber[index][kindex];
        tr.appendChild(td);
      }
      this._table.appendChild(tr);
    }
  }

  eventListener() {
    document.addEventListener("click", (e) => {
      const target = e.target.dataset.findColor;
      const element = e.target;
      if (target !== "cell") return;
      this.action(element);
    });
  }

  action(element) {
    console.log(this._counter);
    if (this._counter === Number(element.innerHTML)) {
      element.classList.add("active");
      if (this._counter === this._size * this._size) {
        this._counter = 0;
        this.build(this.prepare(++this._size));
      }
      this._counter++;
    }
  }
}

const exempl = new GameFindNumber();
