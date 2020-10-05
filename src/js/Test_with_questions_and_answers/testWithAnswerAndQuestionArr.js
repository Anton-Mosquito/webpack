const answers = ["5", "5", "9"];
const questions = [
  'How many letters are there in the word "Hello?"',
  'How many letters are there in the word "World?"',
  'How many letters are there in the word "Yesterday?"',
];

class TestWithQuestions {
  constructor(answers, questions) {
    this._container = document.querySelector("[data-test1-wrapper]");
    this._baseAnswers = answers;
    this._baseQuestions = questions;
    this._containerForQuestion = null;
    this._paragraphForQuestion = null;
    this._containerForInput = null;
    this._input = null;
    this._label = null;
    this.init();
  }

  init() {
    this.createElements();
    this.createInterface();
    this.eventListener();
  }

  createInterface() {
    const elemForInsert = this.findElement("one", "[data-for-insert]");
    for (const iterator of this._baseQuestions) {
      this._container.insertBefore(
        this.createContainer(iterator),
        elemForInsert
      );
    }
  }

  createContainer(dataQuestion) {
    const container = this.divWrapper;
    const inputContainer = this.div;
    const paragraph = this.p;
    const input = this.input;
    const label = this.label;

    paragraph.innerHTML = dataQuestion;
    container.append(paragraph, inputContainer);
    inputContainer.append(input, label);

    return container;
  }

  createElements() {
    const divWrapper = document.createElement("div");
    const div = document.createElement("div");
    const p = document.createElement("p");
    const input = document.createElement("input");
    const label = document.createElement("label");
    divWrapper.classList.add("row", "valign-wrapper");
    p.classList.add("col", "s6", "center-align", "flow-text");
    div.classList.add("input-field", "col", "s4");
    input.type = "text";
    input.classList.add("validate");
    label.classList.add("black-text");
    this._containerForQuestion = divWrapper;
    this._paragraphForQuestion = p;
    this._containerForInput = div;
    this._input = input;
    this._label = label;
  }

  get divWrapper() {
    return this._containerForQuestion.cloneNode(true);
  }

  get p() {
    return this._paragraphForQuestion.cloneNode(true);
  }

  get div() {
    return this._containerForInput.cloneNode(true);
  }

  get input() {
    return this._input.cloneNode(true);
  }

  get label() {
    return this._label.cloneNode(true);
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
    const curentIndex = this.currentIndex(arr, element);
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

  findElement(flag, value) {
    if (flag === "one") {
      const element = this._container.querySelector(value);
      return element;
    } else if ("many") {
      const elements = this._container.querySelectorAll(value);
      return elements;
    }
  }

  currentIndex(arr, element) {
    let curentIndex;
    for (let index = 0; index < arr.length; index++) {
      if (arr[index] == element) return (curentIndex = index);
    }
  }
}

const ex = new TestWithQuestions(answers, questions);
