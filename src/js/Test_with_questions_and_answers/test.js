class TestWithQuestions {
  constructor() {
    this._container = document.querySelector("[data-test-wrapper]");
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
    document.addEventListener("keydown", (e) => {
      const element = e.target;
      if (element.tagName.toLowerCase() !== "input") return;
      if (e.key !== "Enter") return;
      this.checkForInput(element);
    });
    document.addEventListener("click", (e) => {
      const element = e.target;
      if (element.tagName.toLowerCase() !== "a") return;
      this.checkForButton();
    });
  }

  checkForInput(element) {
    const elementData = Number(element.value);
    const rightAnswer = element.dataset.right;
    this.conditionForCheck(element, elementData, rightAnswer);
  }

  checkForButton() {
    const elements = this.findElement("input");
    elements.forEach((element) => {
      const value = Number(element.value);
      const rightAnswer = Number(element.dataset.right);
      this.conditionForCheck(element, value, rightAnswer);
    });
  }

  conditionForCheck(element, innerData, answerData) {
    if (innerData === Number(answerData)) {
      element.style.backgroundColor = `green`;
    } else if (!innerData) {
      element.style.backgroundColor = `none`;
    } else {
      element.style.backgroundColor = `red`;
    }
  }
}

const ex = new TestWithQuestions();
