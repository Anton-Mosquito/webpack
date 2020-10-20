class FromPopUp {
  constructor() {
    this._container = document.querySelector("[data-form-container]");
    this._text = `Введите что-нибудь ...умное :)`;
    this._form = null;
    this._message = null;
    this._inputData = null;
    this._submit = null;
    this._cancel = null;
    this._containerFroButtons = null;
    this.init();
  }

  init() {
    this.createElements();
    this.eventListener();
  }

  createElements() {
    const form = document.createElement("form");
    form.method = "POST";
    form.style.background = `white url(https://en.js.cx/clipart/prompt.png) no-repeat center left`;
    form.style.width = `550px`;
    form.style.height = `200px`;
    form.style.position = `absolute`;
    form.style.top = 0;
    form.style.bottom = 0;
    form.style.left = 0;
    form.style.right = 0;
    form.style.margin = "auto";
    form.style.padding = `25px 25px 25px 100px`;
    form.dataset.formModal = "true";

    const label = document.createElement("label");
    label.setAttribute("for", "formModal");
    label.style.display = "block";
    label.classList.add("flow-text", "black-text");
    label.innerHTML = this._text;

    const input = document.createElement("input");
    input.type = "text";
    input.id = "formModal";
    input.dataset.formModal = "value";

    const submit = document.createElement("input");
    submit.type = "submit";
    submit.value = "OK";
    submit.classList.add("btn", "waves-effect", "lime", "darken-2");
    submit.dataset.formPopUpShow = "submit";
    submit.insertAdjacentHTML(
      `beforeend`,
      `<i class="material-icons right">send</i>`
    );

    const cancel = document.createElement("input");
    cancel.type = "button";
    cancel.value = "Cancel";
    cancel.classList.add("waves-effect", "red", "darken-1", "btn");
    cancel.dataset.formPopUpShow = "cancel";

    const containerForButtons = document.createElement("div");
    containerForButtons.style.width = `200px`;
    containerForButtons.style.margin = `0 auto`;
    containerForButtons.style.display = "flex";
    containerForButtons.style.justifyContent = `space-between`;

    this._form = form;
    this._message = label;
    this._inputData = input;
    this._submit = submit;
    this._cancel = cancel;
    this._containerFroButtons = containerForButtons;
  }

  get form() {
    return this._form.cloneNode(true);
  }

  get message() {
    return this._message.cloneNode(true);
  }

  get inputData() {
    return this._inputData.cloneNode(true);
  }

  get buttonSubmit() {
    return this._submit.cloneNode(true);
  }

  get buttonCancel() {
    return this._cancel.cloneNode(true);
  }

  get containerForButtons() {
    return this._containerFroButtons.cloneNode(true);
  }

  eventListener() {
    document.addEventListener("click", (e) => {
      const flag = e.target.dataset.formPopUpShow;

      if (flag === "action") this.showPrompt();
      if (flag === "cancel") this.check();
    });

    // document.addEventListener("keydown", (e) => {
    //   if (e.key === "Escape") this.check();

    //   const formElements = this._container.querySelector("form").elements;
    //   const firstElement = formElements[0];
    //   const lastElement = formElements[formElements - 1];

    //   if (e.key === "Tab" && e.shiftKey) lastElement.focus();
    //   if (e.key === "Tab" && !e.shiftKey) firstElement.focus();
    //   return false;
    // });

    document.addEventListener("submit", (e) => {
      e.preventDefault();
      const flag = e.target.dataset.formModal;

      if (flag === "true") this.check();
    });
  }

  showPrompt() {
    const form = this.form;
    const label = this.message;
    const textInput = this.inputData;
    const submit = this.buttonSubmit;
    const cancel = this.buttonCancel;
    const containerForButtons = this.containerForButtons;

    textInput.focus();
    containerForButtons.append(submit, cancel);
    form.append(label, textInput, containerForButtons);
    this._container.appendChild(form);
    this.showBlock();
  }

  check() {
    const value = this._container.querySelector(`[data-form-modal="value"]`)
      .value;

    if (value === "") {
      alert("Поле не может быть пустым");
      return;
    }

    alert("Вы ввели : " + value);

    this.hideBlock();
  }

  tabAction() {}

  showBlock() {
    document.body.style.overflow = "hidden";
    this._container.style.display = `block`;
  }

  hideBlock() {
    document.body.style.overflow = "";
    this._container.style.display = `none`;
  }
}

const form = new FromPopUp();
