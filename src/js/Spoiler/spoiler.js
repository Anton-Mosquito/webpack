const container = document.querySelector(".spoiler__container");

class Spoiler {
  constructor() {}

  renderLogic() {
    const links = container.querySelectorAll(".expand--spoiler");
    links.forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        const neighbor = el.parentElement.nextElementSibling;
        neighbor.classList.toggle("active");
      });
    });
  }
}
let exmp = new Spoiler();
exmp.renderLogic();
