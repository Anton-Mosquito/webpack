const linecalendar = document.querySelector(".linecalendar");
const monthName = [
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
  constructor(container, monthName) {
    (this.container = container),
      (this.monthName = monthName),
      (this.now = new Date()),
      (this.year = this.now.getFullYear()),
      (this.month = this.now.getMonth()),
      (this.currentDay = this.now.getDate());
  }

  currentDayActions(currentDay, insertDays) {
    insertDays.forEach((element) => {
      if (element.dataset.num == currentDay) {
        element.classList.add("active");
        element.classList.add("purple");
        element.classList.add("darken-4");
      }
    });
  }
  headerList(year, monthWord) {
    this.container.insertAdjacentHTML(
      "afterbegin",
      `<li class="collection-header center-align purple lighten-4"><h4>${monthWord} - ${year}</h4></li><span class="collection-header__previous"><i class="medium material-icons">arrow_back</i></span><span class="collection-header__next"><i class="medium material-icons">arrow_forward</i></span>`
    );
  }
  create(year, month) {
    const total_days = 32 - new Date(year, month, 32).getDate();
    for (let index = 0; index < total_days; index++) {
      this.container.insertAdjacentHTML(
        "beforeend",
        `<li class="collection-item" data-num="${index + 1}">Day ${
          index + 1
        } </li>`
      );
    }
  }
  nextMonth(year, month) {
    let rightMonth = month < 12 ? month + 1 : 1;
    let rightYear = month < 12 ? year : year + 1;
    let next = document.querySelector(".collection-header__next");
    next.addEventListener("click", () =>
      this.drawCalendar(rightYear, rightMonth)
    );
  }
  previousMonth(year, month) {
    let rightMonth = month > 1 ? month - 1 : 12;
    let rightYear = month > 1 ? year : year - 1;
    let previous = document.querySelector(".collection-header__previous");
    previous.addEventListener("click", () =>
      this.drawCalendar(rightYear, rightMonth)
    );
  }
  clear() {
    let children = this.container.children;
    if (children) {
      for (const iterator of children) {
        this.container.removeChild(iterator);
      }
    }
  }
  drawCalendar(year = this.year, month = this.month) {
    this.clear();
    const monthWord = this.monthName[month];
    this.create(year, month);
    const insertDays = linecalendar.querySelectorAll("li");
    this.currentDayActions(this.currentDay, insertDays);
    this.headerList(year, monthWord);
    this.nextMonth(year, month);
    this.previousMonth(year, month);
  }
}

let currentCalend = new Calendar(linecalendar, monthName);
currentCalend.drawCalendar();
