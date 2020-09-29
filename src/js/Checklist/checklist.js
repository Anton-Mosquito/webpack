const { functions } = require("lodash");

class Checklist {
  constructor() {
    this.inp = document.querySelector("#checklistData");
    this.list = document.querySelector(".checklist");
    this.renderLogic();
  }

  createList(data) {
    const createListItem = (tag, kls) => {
      const el = document.createElement(tag);
      el.classList.add(kls, "checklist__items");
      return el;
    };
    const createSpan = () => {
      const el = document.createElement("span");
      el.innerHTML = data;
      el.addEventListener("dblclick", function editText() {
        const inp = document.createElement("input");
        inp.type = "text";
        el.innerHTML = "";
        inp.value = el.innerHTML;
        el.appendChild(inp);
        el.removeEventListener("dblclick", editText);
        inp.addEventListener("keydown", (e) => {
          if (e.key == "Enter") {
            el.removeChild(inp);
            el.innerHTML = inp.value;
            el.addEventListener("dblclick", editText);
          }
        });
      });
      return el;
    };
    const createLink = (tag, kls, txt) => {
      const el = document.createElement(tag);
      el.href = "#";
      el.style.color = "blue";
      el.style.cursor = "pointer";
      el.classList.add(kls);
      el.innerHTML = txt;
      if (kls == "deleteLink") {
        el.addEventListener("click", (e) => {
          let child = el.parentElement;
          this.list.removeChild(child);
          e.preventDefault();
        });
      } else if (kls == "crossOutLink") {
        el.addEventListener("click", (e) => {
          let neighbor =
            el.parentElement.firstElementChild ||
            el.previousElementSibling.previousElementSibling;
          neighbor.classList.toggle("checklist__items--cross");
          e.preventDefault();
        });
      }
      return el;
    };
    const li = createListItem("li", "collection-item");
    const span = createSpan();
    const deleteLink = createLink("a", "deleteLink", "Delete");
    const crossedLink = createLink("a", "crossOutLink", "Done");
    li.appendChild(span);
    li.appendChild(deleteLink);
    li.appendChild(crossedLink);
    this.list.appendChild(li);
  }

  renderLogic() {
    this.inp.addEventListener("keydown", (e) => {
      if (e.key == "Enter") {
        const data = this.inp.value;
        this.createList(data);
        this.inp.value = "";
      }
    });
  }
}

let ex = new Checklist();
