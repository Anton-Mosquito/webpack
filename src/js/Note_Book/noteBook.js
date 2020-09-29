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
    this.btnSave.addEventListener("click", (e) => {
      let mode = this.btnSave.dataset.mode;
      if (mode == "create") {
        let key = Object.keys(this._base).length;
        base[key + 1] = this.dataField.value;
        this.dataField.value = "";
        const li = this.createListItem();
        this.menu.appendChild(li);
        this.linksActions();
      }
      if (mode == "update") {
        const active = this.findItems("active").getAttribute("data-key");
        let key = active;
        base[key] = this.dataField.value;
        this.dataField.value = "";
        console.log(base);
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
    const iterator = this.findItems("arr").length + 1;
    const li = document.createElement("li");
    const span = createSpan();
    li.classList.add("note-book__menu-notes-item");
    li.innerHTML = `record ${iterator}`;
    li.dataset.key = iterator;
    li.appendChild(span);
    return li;
  }

  linksActions() {
    let arr = this.findItems("arr");
    let element = arr[arr.length - 1];
    element.addEventListener("click", (e) => {
      if (e.target.tagName.toLowerCase() == "li") {
        if (element.classList.contains("active")) {
          element.classList.remove("active");
          this.dataField.value = "";
        } else {
          arr.forEach((el) => {
            if (el.classList.contains("active")) el.classList.remove("active");
          });
          arr[arr.length - 1].classList.add("active");
          const numberOfRecord = element.dataset.key;
          this.dataField.value = this._base[numberOfRecord];
        }
      }
      if (e.target.tagName.toLowerCase() == "span") {
        this.menu.removeChild(element);
      }
    });

    //* Через цикл идет повторное навешивание события
    //* Решение пока не найденно, возможно через первый цикл удалять все обработчики
    //* а через второй добавлять??

    // arr.forEach((el) => {
    //   el.addEventListener("click", (e) => {
    //     if (e.target.tagName.toLowerCase() == "li") {
    //       if (el.classList.contains("active")) {
    //         el.classList.remove("active");
    //         this.dataField.value = "";
    //       } else {
    //         arr.forEach((el) => {
    //           if (el.classList.contains("active"))
    //             el.classList.remove("active");
    //         });
    //         el.classList.add("active");
    //         const numberOfRecord = el.dataset.key;
    //         this.dataField.value = this._base[numberOfRecord];
    //       }
    //     }
    //     if (e.target.tagName.toLowerCase() == "span") {
    //       this.menu.removeChild(el);
    //     }
    //   });
    // });
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
