let answers = [2, 3, 1];

class TestWithQuestionsRadio {
  constructor(answers) {
    this._container = document.querySelector("[data-test5-wrapper]");
    this._answersBase = answers;
    this.init();
  }

  init() {
    this.createAttributes();
    this.eventListener();
  }

  createAttributes() {
    const arrRows = this.findElement("[data-test-row]");
    arrRows.forEach((element) => {
      const items = element.querySelectorAll("input");
      for (let index = 0; index < items.length; index++) {
        if (items[index] === answers[index]) {
          items[index].setAttribute("data", "right");
        }
      }
    });
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

const ex = new TestWithQuestionsRadio(answers);
