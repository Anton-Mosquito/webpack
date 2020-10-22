class ArrowScroll {
  constructor() {
    this._container = document.querySelector("[data-inifituty-page]");
    this._triangle = null;
    this.init();
  }

  init() {
    this.createElement();
    this.eventListener();
  }

  createElement() {
    const div = document.createElement("div");
    div.style.width = 0;
    div.style.height = 0;
    div.style.borderStyle = "solid";
    div.style.borderWidth = `0 25px 50px 25px`;
    div.style.borderColor = `transparent transparent #ffd500 transparent`;
    div.style.cursor = `pointer`;
    div.style.position = `fixed`;
    div.style.top = `50px`;
    div.style.left = `80px`;
    div.style.visibility = "hidden";
    div.style.transition = `visibility .5s easy-out`;
    div.dataset.triangleScrollUp = "true";

    this._triangle = div;
  }

  get div() {
    return this._triangle.cloneNode(true);
  }

  eventListener() {
    const element = document.documentElement;
    const triangle = this.div;
    this._container.appendChild(triangle);
    window.addEventListener("scroll", (e) => {
      if (window.pageYOffset > element.clientHeight) {
        triangle.style.visibility = "visible";
      } else {
        triangle.style.visibility = "hidden";
      }
    });
    document.addEventListener("click", (e) => {
      const target = e.target.dataset.triangleScrollUp;
      if (target !== "true") return;
      this.action();
    });
  }

  action() {
    window.scrollTo(pageXOffset, 0);
  }
}

new ArrowScroll();
