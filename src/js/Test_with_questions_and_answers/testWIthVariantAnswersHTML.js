class TestWithQuestionsRadio {
  constructor() {
    this._container = document.querySelector("[data-test4-wrapper]");
    this.init();
  }

  init() {
    this.eventListener();
  }

  findElement(value) {
    const element = this._container.querySelectorAll(value);
    return element;
  }

  eventListener() {
    document.addEventListener("change", (e) => {
      const element = e.target;
      if (element.tagName.toLowerCase() !== "input") return;
      this.checkForInput(element);
    });
    document.addEventListener("click", (e) => {
      const element = e.target;
      if (element.tagName.toLowerCase() !== "a") return;
      this.checkForButton();
    });
  }

  checkForInput(element) {
    const rightAnswer = element.getAttribute("data-right");
    this.conditionForCheck(element, rightAnswer);
    console.log(rightAnswer);
  }

  checkForButton() {
    const elements = this.findElement("[type='radio']");
    elements.forEach((element) => {
      const rightAnswer = element.getAttribute("data-right");
      this.conditionForCheck(element, rightAnswer);
    });
  }

  conditionForCheck(element, answerData) {
    if (answerData === "") {
      element.parentElement.style.backgroundColor = `green`;
    } else {
      element.parentElement.style.backgroundColor = `red`;
    }
  }
}

const ex = new TestWithQuestionsRadio();
