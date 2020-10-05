const answers = ["5", "5", "9"];

class TestWithQuestions {
  constructor(answers) {
    this._container = document.querySelector("[data-test-wrapper]");
    this._baseAnswers = answers;
    this.init();
  }

  init() {
    this.eventListener();
  }

  findElement(flag, value) {
    if (flag === "one") {
      const element = this._container.querySelector(value);
      return element;
    } else {
      const elements = this._container.querySelectorAll(value);
      return elements;
    }
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
      this.checkForButton(element);
    });
  }

  checkForInput(element) {
    const elementData = Number(element.value);
    const arr = this.findElement("many", "input");
    let curentIndex = this.currentIndex(arr, element);
    const rightAnswer = this._baseAnswers[curentIndex];
    this.conditionForCheck(element, elementData, rightAnswer);
  }

  checkForButton(element) {
    const arrElements = this.findElement("many", "input");
    arrElements.forEach((item) => {
      const curentIndex = this.currentIndex(arrElements, item);
      const elementData = Number(item.value);
      const rightAnswer = this._baseAnswers[curentIndex];
      this.conditionForCheck(item, elementData, rightAnswer);
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
  currentIndex(arr, element) {
    let curentIndex;
    for (let index = 0; index < arr.length; index++) {
      if (arr[index] == element) return (curentIndex = index);
    }
  }
}

const ex = new TestWithQuestions(answers);
