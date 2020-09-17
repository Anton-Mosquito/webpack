const parent = document.querySelector(".table");
const table = document.createElement("table");
const p = document.createElement("p");

let counter = 0;
let timer = 30;

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const randomChoise = (arr) => {
  for (let index = 0; index < 10; index++) {
    let elem = arr[getRandom(1, 100)];
    if (elem.hasAttribute("data-num")) {
      elem.nextElementSibling.dataset.num = "choosen";
    } else {
      elem.dataset.num = "choosen";
    }
  }
};
const timer1 = setInterval(() => {
  if (p.innerHTML == 0) {
    clearInterval(timer1);
    return console.log("You loose!");
  }
  p.innerHTML = p.innerHTML - 1;
}, 1000);

const createTable = () => {
  for (let index = 0; index < 10; index++) {
    const tr = document.createElement("tr");
    table.appendChild(tr);
    for (let kindex = 0; kindex < 10; kindex++) {
      const td = document.createElement("td");
      td.style.width = 50 + "px";
      td.style.height = 50 + "px";
      td.style.border = "1px solid black";
      td.style.cursor = "pointer";
      tr.appendChild(td);
    }
  }
  document.body.appendChild(table);
  parent.appendChild(table);
  parent.appendChild(p);
  p.innerHTML = timer;
  const allTd = table.querySelectorAll("td");
  randomChoise(allTd);
  for (const iterator of allTd) {
    iterator.addEventListener("click", function func() {
      if (counter == 9) {
        this.style.backgroundColor = "red";
        this.removeEventListener("click", func);
        clearInterval(timer1);
        return alert("You choose all cells!");
      } else {
        if (this.dataset.num === "choosen") {
          counter++;
          this.style.backgroundColor = "red";
          this.removeAttribute("data-num");
        }
      }
    });
  }
};

createTable();
