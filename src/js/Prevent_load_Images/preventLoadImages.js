const { divide } = require("lodash");

class PreloadImages {
  constructor() {
    (this._parent = document.querySelector("[data-prevent-load-images]")),
      (this._source = [
        "https://en.js.cx/images-load/1.jpg",
        "https://en.js.cx/images-load/2.jpg",
        "https://en.js.cx/images-load/3.jpg",
      ]),
      (this._img = null),
      (this._container = null),
      (this._counter = 0),
      this.init();
  }

  static checkConditions(flag) {
    if (flag === "error") {
      for (let i = 0; i < this._sources.length; i++) {
        this._sources[i] += "?" + Math.random();
      }
    }
  }

  init() {
    this.createElements();
    this.logic();
  }

  createElements() {
    const img = document.createElement("img");
    this._img = img;

    const container = document.createElement("div");
    container.classList.add("col", "s-6", "offset-s3");

    this._container = container;
  }

  get img() {
    return this._img.cloneNode(true);
  }

  get container() {
    return this._container.cloneNode(true);
  }

  testLoaded() {
    let widthSum = 0;
    for (let i = 0; i < this._source.length; i++) {
      const img = this.img;
      img.src = this._source[i];
      widthSum += img.width;
    }
    console.log("Sum of width images = " + widthSum);
  }

  logic() {
    const container = this.container;
    for (let i = 0; i < this._source.length; i++) {
      const img = this.img;
      img.src = this._source[i];
      img.onload = img.onerror = () => {
        this._counter++;
        if (this._counter === this._source.length) this.testLoaded();
      };
      container.appendChild(img);
    }
    this._parent.appendChild(container);
  }
}

new PreloadImages();
