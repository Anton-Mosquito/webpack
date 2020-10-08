class ImageSliderHTML {
  constructor() {
    this._container = document.querySelector(".image-slider");
    this.init();
  }

  init() {
    this.timer();
  }

  timer() {
    let iterator = 0;
    const arrImg = this.findElements("many", "img");
    setInterval(() => {
      iterator++;
      const activeElement = this.findElements("one", ".active");
      if (activeElement) activeElement.classList.remove("active");
      if (iterator === 0) {
        iterator = arrImg.length - 1;
        arrImg[iterator].classList.add("active");
      }
      if (iterator === arrImg.length) {
        iterator = 0;
        arrImg[iterator].classList.add("active");
      }
      arrImg[iterator].classList.add("active");
    }, 1000);
  }

  findElements(flag, value) {
    if (flag === "one") {
      return this._container.querySelector(value);
    }
    if (flag === "many") {
      return this._container.querySelectorAll(value);
    }
  }
}

const ex = new ImageSliderHTML();
