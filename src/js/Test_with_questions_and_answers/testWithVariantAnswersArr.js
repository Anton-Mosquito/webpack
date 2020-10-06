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
    let arrInputs0 = arrRows[0].querySelectorAll("input");
    let arrInputs1 = arrRows[1].querySelectorAll("input");
    let arrInputs2 = arrRows[2].querySelectorAll("input");
    for (let index = 0; index < arrInputs0.length; index++) {
      for (let kindex = 0; kindex < this._answersBase.length; kindex++) {
        if (this._answersBase[kindex] == 2) {
          arrInputs0[1].setAttribute("data-right", "true");
        }
      }
    }
    for (let index = 0; index < arrInputs1.length; index++) {
      for (let kindex = 0; kindex < this._answersBase.length; kindex++) {
        if (this._answersBase[kindex] == 3) {
          arrInputs1[2].setAttribute("data-right", "true");
        }
      }
    }
    for (let index = 0; index < arrInputs2.length; index++) {
      for (let kindex = 0; kindex < this._answersBase.length; kindex++) {
        if (this._answersBase[kindex] == 1) {
          arrInputs2[0].setAttribute("data-right", "true");
        }
      }
    }
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
  }

  checkForButton() {
    const elements = this.findElement("[type='radio']");
    elements.forEach((element) => {
      const rightAnswer = element.getAttribute("data-right");
      this.conditionForCheck(element, rightAnswer);
    });
  }

  conditionForCheck(element, answerData) {
    if (answerData === "true") {
      element.parentElement.style.backgroundColor = `green`;
    } else {
      element.parentElement.style.backgroundColor = `red`;
    }
  }
}

const ex = new TestWithQuestionsRadio(answers);
