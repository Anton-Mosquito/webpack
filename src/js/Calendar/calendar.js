const baseOfMonth = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

class Calendar {
  constructor(baseOfMonth) {
    this._table = document.querySelector("[data-calendar]");
    this._body = document.querySelector("[data-insert-days]");
    this._info = document.querySelector("[data-info-block]");
    this._baseOfMonth = baseOfMonth;
    this._date = new Date();
    this._year = this._date.getFullYear();
    this._month = this._date.getMonth();
    this.rows = null;
    this.cols = null;
    this.init();
  }

  init() {
    this.createElements();
    this.draw();
    this.eventListener();
  }

  createElements() {
    const tableRow = document.createElement("tr");
    const tableCells = document.createElement("td");
    this.rows = tableRow;
    this.cols = tableCells;
  }

  get tr() {
    return this.rows.cloneNode(true);
  }

  get td() {
    return this.cols.cloneNode(true);
  }

  range(count) {
    let arrayOfNumbers = new Array();
    for (let index = 1; index <= count; index++) {
      arrayOfNumbers.push(index);
    }
    return arrayOfNumbers;
  }

  getLastDay() {
    const date = new Date(this._year, this._month + 1, 0);
    return date.getDate();
  }

  getFirstWeekDay() {
    const date = new Date(this._year, this._month, 1);
    const num = date.getDay();
    switch (num) {
      case 0:
        return 6;
      default:
        return num - 1;
    }
  }

  getLastWeekDay() {
    const date = new Date(this._year, this._month + 1, 0);
    const num = date.getDay();
    switch (num) {
      case 0:
        return 6;
      default:
        return num - 1;
    }
  }

  normilize(array, left, right) {
    for (let index = 0; index < left; index++) {
      array.unshift("");
    }
    for (let kindex = 0; kindex < right; kindex++) {
      array.push("");
    }
    return array;
  }

  chunk(array, quantityOfElements) {
    let newArray = new Array();
    const count = Math.ceil(array.length / quantityOfElements);
    for (let index = 0; index < count; index++) {
      const element = array.splice(0, quantityOfElements);
      newArray.push(element);
    }
    return newArray;
  }

  createTable(arrayOfDays) {
    for (const iterator of arrayOfDays) {
      const tr = this.tr;
      for (const key of iterator) {
        const td = this.td;
        td.innerHTML = key;
        tr.appendChild(td);
      }
      this._body.appendChild(tr);
    }
  }

  draw() {
    this._body.innerHTML = "";
    this._info.innerHTML = this.getInfoMontAndYear();
    const lastDay = this.getLastDay();
    const firstWeekDay = this.getFirstWeekDay();
    const lastWeekDay = 6 - this.getLastWeekDay();
    const quantityOfDays = this.range(lastDay);
    const normilizeArray = this.normilize(
      quantityOfDays,
      firstWeekDay,
      lastWeekDay
    );
    const arrayOfDays = this.chunk(normilizeArray, 7);
    this.createTable(arrayOfDays);
  }

  eventListener() {
    document.addEventListener("click", (e) => {
      const target = e.target.dataset.calendarNavigation;
      if (target === "prev") this.prevData();
      if (target === "next") this.nextData();
    });
  }
  prevData() {
    if (this._month === 0) {
      this._year--;
      this._month = 11;
      this._info.innerHTML = this.getInfoMontAndYear();
      this.draw();
    } else {
      this._month--;
      this._info.innerHTML = this.getInfoMontAndYear();
      this.draw();
    }
  }

  nextData() {
    if (this._month === 11) {
      this._year++;
      this._month = 0;
      this._info.innerHTML = this.getInfoMontAndYear();
      this.draw();
    } else {
      this._month++;
      this._info.innerHTML = this.getInfoMontAndYear();
      this.draw();
    }
  }

  getInfoMontAndYear() {
    return `${this._baseOfMonth[this._month]} ${this._year}`;
  }
}

const exmpl = new Calendar(baseOfMonth);
