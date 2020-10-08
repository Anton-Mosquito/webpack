let images = [
  "img/21472-trava_makro.jpg",
  "img/21535-ozero_derevo_trava.jpg",
  "img/51959-volna_bryzgi_greben_bles_bliki.jpg",
  "img/50370-pestik_cvetok_makro_zheltyj.jpg",
  "img/52196-gora_ozero_otrazhenie_nebo.jpg",
];

class ImageSlider {
  constructor(images) {
    this._container = document.querySelector("[data-slider-wrapper1]");
    this._base = images;
    this._imageContainer = document.querySelector("[data-slider-image]");
    this._iterator = 0;
    this.init();
  }

  init() {
    this.timer();
    this.eventListener();
  }

  timer() {
    this._imageContainer.src = "img/21472-trava_makro.jpg";
    setInterval(() => {
      this._iterator++;
      if (this._iterator === this._base.length) {
        this._iterator = 0;
      }
      if (this._iterator === -1) {
        this._iterator = this._base.length - 1;
      }
      this._imageContainer.src = this._base[this._iterator];
    }, 5000);
  }

  eventListener() {
    this._imageContainer.src = "img/21472-trava_makro.jpg";
    document.addEventListener("click", (e) => {
      const target = e.target.dataset.slider1;
      const leftElement = this.findElement("[data-slider1='left']");
      const rightElement = this.findElement("[data-slider1='right']");
      if (target === "left") this.leftAction(leftElement, rightElement);
      if (target === "right") this.rightAction(leftElement, rightElement);
    });
  }

  leftAction(leftElement, rightElement) {
    this._iterator--;
    if (this._iterator === -1) {
      //leftElement.style.display = "none";
      rightElement.style.display = "block";
      this._iterator = this._base.length - 1;
    }
    rightElement.style.display = "block";
    this._imageContainer.src = this._base[this._iterator];
  }
  rightAction(leftElement, rightElement) {
    this._iterator++;
    if (this._iterator === this._base.length) {
      //leftElement.style.display = "none";
      rightElement.style.display = "block";
      this._iterator = 0;
    }
    leftElement.style.display = "block";
    this._imageContainer.src = this._base[this._iterator];
  }

  findElement(value) {
    return this._container.querySelector(value);
  }
}

const ex = new ImageSlider(images);
