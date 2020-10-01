class ProductCalculator {
  constructor() {
    this.nameOfProductField = document.querySelector("[data-dataNames]");
    this.priceOfProductField = document.querySelector("[data-dataPrice]");
    this.amountOfProductField = document.querySelector("[data-dataAmount]");
    this.buttonAdd = document.querySelector("[data-product-action='add']");
    this.table = document.querySelector("[data-product-calculator-table]");
    this.result = document.querySelector("[data-product-calculator-result]");
    this._tr = null;
    this._td = null;
    this._input = null;
    this.init();
  }

  init() {
    this.crteateElement();
    this.eventListener();
  }

  eventListener() {
    document.addEventListener("click", (e) => {
      const target = e.target.dataset.productAction;
      const element = e.target;
      if (target === "add") this.add();
      if (target === "delete") this.delete(element);
      if (target === "edit") this.edit(element);
    });
    document.addEventListener("keydown", (e) => {
      const target = e.target.dataset.productEditField;
      const element = e.target;
      const option = e.target.parentElement.dataset.productDataCount;
      if (target === "yes" && e.key === "Enter")
        this.allowEdit(element, option);
    });
  }

  add() {
    const tr = this.tr;
    const cost =
      this.priceOfProductField.value * this.amountOfProductField.value;

    this.table.append(
      this.createCell(tr, this.nameOfProductField.value, "edit")
    );
    this.table.append(
      this.createCell(tr, this.priceOfProductField.value, "edit", "price")
    );
    this.table.append(
      this.createCell(tr, this.amountOfProductField.value, "edit", "amount")
    );
    this.table.append(this.createCell(tr, cost, "cost"));
    this.table.append(this.createCell(tr, "delete", "delete"));

    this.nameOfProductField.value = "";
    this.priceOfProductField.value = "";
    this.amountOfProductField.value = "";

    this.recountTotal();
  }

  delete(el) {
    const child = el.closest("tr");
    this.table.removeChild(child);
    this.recountTotal();
  }

  edit(element) {
    const text = element.innerHTML;
    element.innerHTML = "";
    const input = this.input;
    input.value = text;
    input.focus();
    element.append(input);
  }

  allowEdit(element, option) {
    const parent = element.parentElement;
    parent.removeChild(element);
    parent.innerHTML = element.value;
    const costField = parent.parentElement.querySelector(
      "[data-product-data-cell-cost]"
    );
    switch (option) {
      case "price":
        const neighborNext = parent.nextElementSibling;
        costField.innerHTML =
          Number(parent.innerHTML) * Number(neighborNext.innerHTML);
        break;
      case "amount":
        const neighborPrevious = parent.previousElementSibling;
        costField.innerHTML =
          Number(parent.innerHTML) * Number(neighborPrevious.innerHTML);
        break;
    }
    this.recountTotal();
  }

  createCell(tr, value, name, countAttribut) {
    const td = this.td;

    if (name === "delete") {
      td.innerHTML = `<a class="btn-floating waves-effect waves-light teal accent-3" ><i class="material-icons" data-product-action='delete'>delete</i></a>`;
      td.classList.add("center-align");
      tr.appendChild(td);
    } else if (name === "cost") {
      td.textContent = value;
      td.classList.add("center-align");
      td.dataset.productDataCellCost = name;
      tr.appendChild(td);
    } else if (countAttribut === "price" || countAttribut === "amount") {
      td.textContent = value;
      td.classList.add("center-align");
      td.dataset.productAction = name;
      td.dataset.productDataCount = countAttribut;
      tr.appendChild(td);
    } else {
      td.textContent = value;
      td.classList.add("center-align");
      td.dataset.productAction = name;
      tr.appendChild(td);
    }

    return tr;
  }

  crteateElement() {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    const input = document.createElement("input");
    input.type = "text";
    input.dataset.productEditField = "yes";
    this._tr = tr;
    this._td = td;
    this._input = input;
  }

  get tr() {
    return this._tr.cloneNode(true);
  }
  get td() {
    return this._td.cloneNode(true);
  }
  get input() {
    return this._input.cloneNode(true);
  }

  recountTotal() {
    const costs = this.findCell("[data-product-data-cell-cost]");
    if (!costs) return;
    let totalResult = 0;
    costs.forEach((el) => (totalResult += Number(el.innerHTML)));
    this.result.textContent = totalResult;
  }

  findCell(attribut) {
    const element = this.table.querySelectorAll(attribut);
    return element;
  }
}

let exmpl = new ProductCalculator();
