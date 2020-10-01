const { forEach } = require("lodash");

let base = {};

class NoteBook {
  constructor(base) {
    this._base = base;
    this.btnSave = document.querySelector("#noteBookSaveBtn");
    this.btnAdd = document.querySelector("#noteBookRecordBtn");
    this.dataField = document.querySelector("#noteBookData");
    this.menu = document.querySelector(".note-book__menu-notes");
    this.menuItems = document.querySelectorAll(".note-book__menu-notes-item");
    this.btnMode = document.querySelector(".notebook__text-mode");
    this.init();
  }

  init() {
    this.btnSave.addEventListener("click", () => {
      let mode = this.btnSave.dataset.mode;
      if (mode == "create") {
        const key = Object.keys(this._base).length;
        base[key + 1] = this.dataField.value;
        this.dataField.value = "";
        const li = this.createListItem();
        this.menu.appendChild(li);
      }
      if (mode == "update") {
        const active = this.findItems("active").getAttribute("data-key");
        this._base[active] = this.dataField.value;
        this.dataField.value = "";
      }
    });

    this.btnAdd.addEventListener("click", () => {
      if (this.btnAdd.classList.contains("note-book__create-edit")) {
        this.btnSave.dataset.mode = "update";
        this.btnAdd.innerHTML = `<i class="material-icons right">add_circle_outline</i>Create`;
        this.btnAdd.dataset.mode = "create";
        this.btnMode.innerHTML = "Edit mode";
        this.btnAdd.classList.remove("note-book__create-edit");
      } else {
        this.btnSave.dataset.mode = "create";
        this.btnAdd.innerHTML = `<i class="material-icons right">edit</i>Edit`;
        this.btnMode.innerHTML = "Create mode";
        this.btnAdd.classList.add("note-book__create-edit");
      }
    });
  }

  createListItem() {
    const createSpan = () => {
      const span = document.createElement("span");
      span.innerHTML = "X";
      return span;
    };
    const getRecordNumber = (element) => {
      return element.dataset.key;
    };
    const iterator = this.findItems("arr").length + 1;
    const li = document.createElement("li");
    const span = createSpan();
    li.classList.add("note-book__menu-notes-item");
    li.innerHTML = `record ${iterator}`;
    li.dataset.key = iterator;
    li.addEventListener("click", (e) => {
      if (e.target.tagName.toLowerCase() == "li") {
        if (li.classList.contains("active")) {
          li.classList.remove("active");
          this.dataField.value = "";
        } else {
          this.findItems("arr").forEach((el) => {
            if (el.classList.contains("active")) el.classList.remove("active");
          });
          li.classList.add("active");
          const numberOfRecord = getRecordNumber(li);
          this.dataField.value = this._base[numberOfRecord];
        }
      }
      if (e.target.tagName.toLowerCase() == "span") {
        this.menu.removeChild(li);
        const numberOfRecord = getRecordNumber(li);
        delete this._base[numberOfRecord];
        console.log(this._base);
      }
    });
    li.appendChild(span);
    return li;
  }

  findItems(flag) {
    if (flag == "arr") {
      const arr = document.querySelectorAll(".note-book__menu-notes-item");
      return arr;
    }
    if (flag == "active") {
      const active = document.querySelector(
        ".note-book__menu-notes-item.active"
      );
      return active;
    }
  }
}

let ex = new NoteBook(base);
