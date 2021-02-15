class PopUP {
  constructor() {
    this.popup = document.querySelector("[data-popup='popup']");
    this.body = document.querySelector("body");
    this.lockPadding = document.querySelectorAll(".lock-padding");
    this.container = document.querySelector(".container");
    this.unlock = true;
    this.timeout = 800;
    this.init();
  }

  init() {
    this.eventListenet();
  }

  eventListenet() {
    document.addEventListener("click", (e) => {
      const attributes = e.target.dataset.popup;
      if (attributes === "open") this.open();
      if (attributes === "close") this.close();
    });
  }

  open() {
    if (this.popup && this.unlock) {
      const popupActive = document.querySelector(".pop__up.open");
      if (popupActive) {
        this.close(popupActive, false);
      } else {
        this.bodyLock();
      }
      this.popup.classList.add("open");
    }
  }

  close(popupActive = this.popup, doUnLock = true) {
    if (this.unlock) {
      popupActive.classList.remove("open");
      if (doUnLock) {
        this.bodyUnLock();
      }
    }
  }

  bodyLock() {
    const lockPaddingValue =
      window.innerWidth - this.container.offsetWidth + "px";

    if (this.lockPadding.length > 0) {
      for (let index = 0; index < this.lockPadding.length; index++) {
        const element = this.lockPadding[index];
        element.style.paddingRight = lockPaddingValue;
      }
    }

    this.body.style.paddingRight = lockPaddingValue;
    this.body.classList.add("lock");

    this.unlock = false;

    setTimeout(() => (this.unlock = true), this.timeout);
  }

  bodyUnLock() {
    setTimeout(() => {
      if (this.lockPadding.length > 0) {
        for (let index = 0; index < this.lockPadding.length; index++) {
          const element = this.lockPadding[index];
          element.style.paddingRight = "0px";
        }
      }
      this.body.style.paddingRight = "0px";
      this.body.classList.remove("lock");
    }, this.timeout);
    this.unlock = false;

    setTimeout(() => (this.unlock = true), this.timeout);
  }
}

const Popup = new PopUP();
