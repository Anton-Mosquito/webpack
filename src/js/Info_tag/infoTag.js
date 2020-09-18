const { functions } = require("lodash");

const container = document.querySelector(".infotags");
function createBase() {
  const base = new Map();
  base.set(
    "body",
    "Представляет тело документа (содержимое, не относящееся к метаданным документа)."
  );
  base.set(
    "article",
    "Раздел контента, который образует независимую часть документа или сайта, например, статья в журнале, запись в блоге, комментарий."
  );
  base.set(
    "aside",
    "Представляет контент страницы, который имеет косвенное отношение к основному контенту страницы/сайта."
  );
  base.set(
    "footer",
    "Определяет завершающую область (нижний колонтитул) документа или раздела."
  );
  base.set(
    "header",
    "Секция для вводной информации сайта или группы навигационных ссылок. Может содержать один или несколько заголовков, логотип, информацию об авторе."
  );
  base.set(
    "main",
    "Контейнер для основного уникального содержимого документа. На одной странице должно быть не более одного элемента <main>."
  );
  base.set(
    "nav",
    "Раздел документа, содержащий навигационные ссылки по сайту."
  );
  base.set(
    "section",
    "пределяет логическую область (раздел) страницы, обычно с заголовком."
  );
  base.set(
    "h1",
    "Создают заголовки шести уровней для связанных с ними разделов."
  );
  return base;
}

class InfoTag {
  constructor(base, container) {
    (this.base = base),
      (this.container = container),
      (this.fragment = document.createDocumentFragment()),
      (this.div = document.createElement("div")),
      (this.input = document.createElement("input")),
      (this.label = document.createElement("label")),
      (this.result = document.createElement("div")),
      this.createInterface();
  }

  createInterface() {
    this.div.classList.add("input-field");
    this.div.classList.add("col");
    this.div.classList.add("s10");
    this.div.classList.add("offset-s1");
    this.input.type = "text";
    this.input.id = "infoTags";
    this.input.classList.add("validate");
    this.label.innerHTML =
      "Here you should enter name of tag, which you want to get information";
    this.label.setAttribute("for", "infoTags");
    this.label.classList.add("black-text");
    this.result.classList.add("col");
    this.result.classList.add("s12");
    this.result.classList.add("amber");
    this.result.classList.add("lighten-3");
    this.div.appendChild(this.input);
    this.div.appendChild(this.label);
    this.div.appendChild(this.result);
    this.fragment.appendChild(this.div);
    this.container.appendChild(this.fragment);
  }

  findTheInfo() {
    const enterData = this.container.querySelector("#infoTags");
    enterData.addEventListener("input", (e) => {
      const data = e.target.value;
      if (!data) {
        this.result.innerHTML = "";
        return;
      } else {
        if (this.base.has(data)) {
          this.result.innerHTML = this.base.get(data);
        }
      }
    });
  }
}
let newInfo = new InfoTag(createBase(), container);
newInfo.findTheInfo();
