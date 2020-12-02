const showCircle = (x, y, radius, callback) => {
  const parent = document.querySelector("[data-animated-container]");
  const div = document.createElement("div");
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = `${x}px`;
  div.style.top = `${y}px`;
  div.classList.add("circle");
  parent.insertAdjacentElement("afterbegin", div);

  setTimeout(() => {
    div.style.width = radius * 2 + "px";
    div.style.height = radius * 2 + "px";

    div.addEventListener("transitionend", function handler() {
      div.removeEventListener("transitionend", handler);
      callback(div);
    });
  }, 0);
};

const button = document.querySelector("[data-animated-circle]");

const func = () => {
  showCircle(150, 150, 100, (div) => {
    div.classList.add("message-ball");
    div.append("Hello, world!");
  });
};

button.addEventListener("click", () => {
  func();
});
