class DepositCalculator {
  constructor() {
    this._moneyField = document.querySelector(`[data-deposit='money']`);
    this._termField = document.querySelector(`[data-deposit-select='true']`);
    this._percentageField = document.querySelector(
      `[data-deposit='percentage']`
    );
    //this._wasField = document.querySelector(`[data-deposit-output='was']`);
    //this._willField = document.querySelector(`[data-deposit-output='will']`);
    this._outPutContainer = document.querySelector(
      `[deposit-calculator-container]`
    );
    this._wasContainer = null;
    this._willContainer = null;
    this._descriptionBlockWas = null;
    this._descriptionBlockWill = null;
    this._outPutValueWas = null;
    this._outPutValueWill = null;
    this._wasColumn = null;
    this._willColumn = null;
    this.init();
  }

  init() {
    this.createElement();
    this.eventListener();
    this.mainCount();
  }

  createElement() {
    const createContainer = (item, props) => {
      let element = document.createElement(item);
      element.dataset.depositContainer = props;
      return element;
    };

    const createBlocks = (element) => {
      return document.createElement(element);
    };

    const createParagraph = (item, text) => {
      let element = document.createElement(item);
      element.innerHTML = text;
      return element;
    };

    const createOutPutParagraph = (item, props) => {
      let element = document.createElement(item);
      element.dataset.depositOutput = props;
      return element;
    };

    const containerWas = createContainer("div", "was");
    const containerWill = createContainer("div", "will");

    const InfoField1 = createParagraph("p", `Was :`);
    const InfoField2 = createParagraph("p", `Will :`);

    const outPut1 = createOutPutParagraph("p");
    const outPut2 = createOutPutParagraph("p");

    const blockWas = createBlocks("div");
    const blockWill = createBlocks("div");

    blockWas.style.backgroundColor = "red";
    blockWas.dataset.depositColumn = "was";
    blockWill.style.backgroundColor = "green";
    blockWill.dataset.depositColumn = "will";
    blockWas.style.width = blockWill.style.width = `100px`;

    this._wasContainer = containerWas;
    this._willContainer = containerWill;
    this._descriptionBlockWas = InfoField1;
    this._descriptionBlockWill = InfoField2;
    this._outPutValueWas = outPut1;
    this._outPutValueWill = outPut2;
    this._wasColumn = blockWas;
    this._willColumn = blockWill;
  }

  get containerWas() {
    return this._wasContainer.cloneNode(true);
  }

  get containerWill() {
    return this._willContainer.cloneNode(true);
  }

  get blockWas() {
    return this._wasColumn.cloneNode(true);
  }

  get blockWill() {
    return this._willColumn.cloneNode(true);
  }

  get InfoField1() {
    return this._descriptionBlockWas.cloneNode(true);
  }

  get InfoField2() {
    return this._descriptionBlockWill.cloneNode(true);
  }

  get outPut1() {
    return this._outPutValueWas.cloneNode(true);
  }

  get outPut2() {
    return this._outPutValueWill.cloneNode(true);
  }

  mainCount() {
    const initial = this._moneyField.value;
    const interest = this._percentageField.value / 100;
    const years = this.selectFindsValue();
    const result = Math.round(initial * (1 + interest * years));

    const containerWas = this.containerWas;
    const containerWill = this.containerWill;
    const InfoWas = this.InfoField1;
    const InfoWill = this.InfoField2;
    const outPutWas = this.outPut1;
    const outPutWill = this.outPut2;
    const blockWas = this.blockWas;
    const blockWill = this.blockWill;

    this._outPutContainer.innerHTML = " ";

    outPutWas.textContent = this._moneyField.value;
    outPutWill.textContent = result;

    blockWas.style.height = initial / 100 + "px";
    blockWill.style.height = (result / initial) * 100 + "px";

    containerWas.append(InfoWas, outPutWas, blockWas);
    containerWill.append(InfoWill, outPutWill, blockWill);

    this._outPutContainer.appendChild(containerWas);
    this._outPutContainer.appendChild(containerWill);
  }

  selectFindsValue() {
    const select = this._termField.selectedIndex;
    const options = this._termField.options;
    switch (options[select].value) {
      case "3":
        return 0.25;
      case "6":
        return 0.5;
      case "12":
        return 1;
      case "18":
        return 1.5;
      case "24":
        return 2;
      case "30":
        return 2.5;
      case "36":
        return 3;
      case "60":
        return 5;
    }
  }

  eventListener() {
    document.addEventListener("change", (e) => {
      const target = e.target.dataset.depositSelect;
      if (target !== "true") return;
      this.action();
    });
    document.addEventListener("input", (e) => {
      const target = e.target.dataset.deposit;
      if (target === "money") this.action();
      if (target === "percentage") this.action();
    });
  }

  action() {
    this.mainCount();
  }
}

const expl = new DepositCalculator();
