let texts = ["text1", "text2", "text3", "text4", "text5", "text6"];

class TextSlider1 {
  constructor(texts) {
    this._container = document.querySelector("[data-slider-wrapper]");
    this._textContainer = document.querySelector("[data-slider-text]");
    this._base = texts;

    this.init();
  }

  init() {
    this.eventListener();
  }

  eventListener() {
    let iterator = 0;
    this._textContainer.innerHTML = this._base[iterator];
    document.addEventListener("click", (e) => {
      const target = e.target.dataset.slider;
      const leftElement = this.findElement("[data-slider='left']");
      const rightElement = this.findElement("[data-slider='right']");
      switch (target) {
        case "left":
          iterator--;
          if (iterator === -1) {
            leftElement.style.display = "none";
            rightElement.style.display = "block";
            iterator = 0;
          }
          rightElement.style.display = "block";
          this._textContainer.innerHTML = this._base[iterator];

          return;

        case "right":
          iterator++;
          if (iterator === this._base.length) {
            rightElement.style.display = "none";
            leftElement.style.display = "block";
            iterator = this._base.length - 1;
          }
          leftElement.style.display = "block";
          this._textContainer.innerHTML = this._base[iterator];

          return;
      }
    });
  }

  findElement(value) {
    return this._container.querySelector(value);
  }
}

const ex = new TextSlider1(texts);
