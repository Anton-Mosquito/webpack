class LoadImageScroll {
  constructor() {
    this._container = document.querySelector("[data-load-image-scroll]");
    this.init();
  }

  init() {
    this.eventListener();
  }

  eventListener() {
    this._container.addEventListener("scroll", (e) => {
      const target = e.target.dataset.loadImageScroll;

      if (target !== "scroll") return;
      this.action();
    });
  }

  action() {
    const isVisible = (elem) => {
      const ElemHeight = this._container.clientHeight;
      const topVisible =
        elem.getBoundingClientRect().top > 0 &&
        elem.getBoundingClientRect().top < ElemHeight;

      const bottomVisible =
        elem.getBoundingClientRect().bottom > 0 &&
        elem.getBoundingClientRect().bottom < ElemHeight;

      return topVisible || bottomVisible;
    };

    for (let img of this._container.querySelectorAll("img")) {
      const realSrc = img.dataset.src;
      if (!realSrc) continue;

      if (isVisible(img)) {
        img.src = realSrc;
        img.dataset.src = "";
      }
    }
  }
}

new LoadImageScroll();
