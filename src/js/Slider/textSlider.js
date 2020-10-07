let texts = ["text1", "text2", "text3"];

class TextSlider {
  constructor(texts) {
    this._container = document.querySelector("[data-slider]");
    this._base = texts;
    this.init();
  }

  init() {
    this.timer();
  }

  timer() {
    let i = 0;
    setInterval(() => {
      if (i == 3) {
        i = 0;
      }
      this._container.innerHTML = this._base[i];
      ++i;
    }, 1000);
  }
}

const ex = new TextSlider(texts);
