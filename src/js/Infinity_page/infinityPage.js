class InfinityPage {
  constructor() {
    this._container = document.querySelector("[data-inifituty-page]");
    this.timeBlock = null;
    this.init();
  }

  init() {
    this.createelemet();
    this.eventListener();
  }

  createelemet() {
    const div = document.createElement("div");
    div.classList.add("col", "s6", "offset-s3");

    this.timeBlock = div;
  }

  get div() {
    return this.timeBlock.cloneNode(true);
  }

  action() {
    const div = this.div;
    this._container.appendChild(div);
    setInterval(() => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      div.innerHTML = `${hours}:${minutes}:${seconds}`;
    }, 1000);
  }

  eventListener() {
    const element = document.documentElement;

    // window.addEventListener("scroll", (e) => {
    //   console.log(element.offsetHeight);
    //   console.log(element.clientHeight);
    //   console.log(element.getBoundingClientRect().bottom);
    //   if (window.innerHeight + window.pageYOffset === element.offsetHeight) {
    //     this.action();
    //   }
    // });

    window.addEventListener("scroll", (e) => {
      if (element.getBoundingClientRect().bottom < element.clientHeight + 100) {
        this.action();
      }
    });
  }
}

new InfinityPage();
