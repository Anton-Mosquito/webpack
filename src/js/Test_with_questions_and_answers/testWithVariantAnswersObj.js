let questions = [
  {
    text: 'How many letters are there in the word "Hello?"',
    right: 1,
    variants: ["12", "5", "7"],
    nameInput: "question1",
  },
  {
    text: 'How many letters are there in the word "World?"',
    right: 2,
    variants: ["6", "9", "5"],
    nameInput: "question2",
  },
  {
    text: 'How many letters are there in the word "Yesterday?"',
    right: 0,
    variants: ["9", "8", "11"],
    nameInput: "question3",
  },
];

class TestWithQuestions {
  constructor(questions) {
    this._container = document.querySelector("[data-test6-wrapper]");
    this._baseQuestions = questions;
    this._containerForQuestion = null;
    this._paragraphForQuestion = null;
    this._containerForInput = null;
    this._input = null;
    this._label = null;
    this._span = null;
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
        this.createContainer(
          iterator.text,
          iterator.variants,
          iterator.nameInput,
          iterator.right
        ),
        elemForInsert
      );
    }
  }

  createContainer(dataQuestion, dataVariants, dataName, dataRight) {
    const createContainerWithAnswers = (dataVariants, dataRight) => {
      const inputContainer = this.div;

      for (let index = 0; index < dataVariants.length; index++) {
        const label = this.label;
        const input = this.input;
        const span = this.span;
        input.name = dataName;
        span.innerHTML = dataVariants[index];
        label.appendChild(input);
        label.appendChild(span);
        inputContainer.appendChild(label);
      }

      const arrInputs = inputContainer.querySelectorAll("input");
      for (let index = 0; index < arrInputs.length; index++) {
        if (index === dataRight) {
          arrInputs[index].setAttribute("data-right", "true");
        } else continue;
      }

      return inputContainer;
    };

    const container = this.divWrapper;
    const paragraph = this.p;
    paragraph.innerHTML = dataQuestion;
    container.append(
      paragraph,
      createContainerWithAnswers(dataVariants, dataRight)
    );

    return container;
  }

  createElements() {
    const divWrapper = document.createElement("div");
    const div = document.createElement("p");
    const p = document.createElement("p");
    const input = document.createElement("input");
    const label = document.createElement("label");
    const span = document.createElement("span");
    divWrapper.classList.add("row", "valign-wrapper");
    p.classList.add("col", "s6", "center-align", "flow-text");
    div.classList.add("col", "s6", "center-align");
    input.type = "radio";
    input.classList.add("validate");
    span.classList.add("black-text");
    this._containerForQuestion = divWrapper;
    this._paragraphForQuestion = p;
    this._containerForInput = div;
    this._input = input;
    this._label = label;
    this._span = span;
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

  get span() {
    return this._span.cloneNode(true);
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
    console.log(rightAnswer);
    this.conditionForCheck(element, rightAnswer);
  }

  checkForButton() {
    const elements = this.findElement("many", "[type='radio']");
    console.log(elements);
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

  findElement(flag, value) {
    if (flag === "one") {
      const element = this._container.querySelector(value);
      return element;
    } else if ("many") {
      const elements = this._container.querySelectorAll(value);
      return elements;
    }
  }
}

const ex = new TestWithQuestions(questions);
