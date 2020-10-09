const rows = 3;
const cols = 3;
const colors = ["red", "green", "blue"];

class GameChangeColor {
  constructor(rows, cols, colors) {
    this._table = document.querySelector("[data-game-change-color]");
    this._inputContainer = document.querySelector(
      "[data-game-change-color-counter]"
    );
    this._colors = colors;
    this._rows = rows;
    this._cols = cols;
    this._clickCounter = 0;
    this.rows = null;
    this.cols = null;
    this.init();
  }

  init() {
    this.createElements();
    this.createTable();
    this.eventListener();
  }

  createElements() {
    const row = document.createElement("tr");
    const col = document.createElement("td");
    col.dataset.changeColor = "cell";
    this.rows = row;
    this.cols = col;
  }

  get tr() {
    return this.rows.cloneNode(true);
  }

  get td() {
    return this.cols.cloneNode(true);
  }

  createTable() {
    for (let index = 0; index < this._rows; index++) {
      const tableRow = this.tr;
      for (let kindex = 0; kindex < this._cols; kindex++) {
        const tableCell = this.td;
        tableCell.classList.add(this.randomColor());
        tableRow.appendChild(tableCell);
      }
      this._table.appendChild(tableRow);
    }
  }

  randomColor() {
    const random = (min, max) => {
      return Math.floor(min + Math.random() * (max + 1 - min));
    };
    return this._colors[random(0, 2)];
  }

  eventListener() {
    document.addEventListener("click", (e) => {
      const target = e.target.dataset.changeColor;
      const elementClas = this.findClass(e.target.classList);
      const element = e.target;
      if (target !== "cell") return;
      if (this.isWin(elementClas)) {
        this._clickCounter = 0;
        alert("You are win!");
      }
      this.changeColor(element, elementClas);
      this._inputContainer.value = ++this._clickCounter;
    });
  }

  findClass(pseudoArr) {
    const arr = Array.from(pseudoArr).filter(
      (item) => item === "red" || item === "green" || item === "blue"
    );
    return arr[0];
  }

  changeColor(element, elementClas) {
    const index = this._colors.indexOf(elementClas);
    switch (index) {
      case this._colors.length - 1:
        element.setAttribute("class", this._colors[0]);
        break;
      default:
        element.setAttribute("class", this._colors[index + 1]);
        break;
    }
  }

  isWin(clas) {
    const booleanResult = Array.from(this.findElements("td")).every((item) =>
      item.classList.contains(clas)
    );
    return booleanResult;
  }

  findElements(value) {
    return this._table.querySelectorAll(value);
  }
}

const ex = new GameChangeColor(rows, cols, colors);
