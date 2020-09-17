const keyBoard = document.querySelector(".keyboard");
const items = keyBoard.querySelectorAll(".keyboard__item");
const inp = document.querySelector("#outputDataFromKeyBoard");
const specialButtons = document.querySelectorAll(
  ".keyboard__item-double-width"
);
const spaceBar = document.querySelector(".keyboard__item-space-bar");

const backSpace = () => (inp.value = inp.value.slice(0, -1));
const tab = () => (inp.value += "\t");
const space = () => (inp.value += " ");

function keyboard(items, inp, spaceBar) {
  items.forEach((element) => {
    element.addEventListener("click", function func() {
      inp.value += this.innerHTML;
    });
  });
  spaceBar.addEventListener("click", space);
  specialButtons.forEach((element) => {
    if (element.dataset.value == "BackSpace") {
      element.addEventListener("click", backSpace);
    }
    if (element.dataset.value == "Tab") {
      element.addEventListener("click", tab);
    }
    if (element.dataset.value == "Caps") {
      element.addEventListener("click", function caps() {
        this.classList.toggle("active");
        if (element.classList.contains("active")) {
          this.style.backgroundColor = "red";
          items.forEach((element) => {
            if (element.innerHTML.toUpperCase() == element.innerHTML) {
              element.innerHTML = element.innerHTML.toLowerCase();
            } else {
              element.innerHTML = element.innerHTML.toUpperCase();
            }
          });
        } else {
          this.style.backgroundColor = "#0c2835";
          items.forEach((element) => {
            element.innerHTML = element.innerHTML.toLowerCase();
          });
        }
      });
    }
  });
}
keyboard(items, inp, spaceBar);
