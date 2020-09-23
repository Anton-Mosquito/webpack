const links = document.querySelectorAll(".acordeon__tab-link a");

class Acordeon {
  constructor() {
    this.renderLogic1();
  }
  renderLogic() {
    for (let index = 0; index < links.length; index++) {
      links[index].addEventListener("click", (e) => {
        e.preventDefault();
        let activeTab = document.querySelector(".acordeon__tab.active");
        if (activeTab) {
          activeTab.classList.remove("active");
        } else {
          let parentLink = links[index].parentNode.parentNode;
          parentLink.classList.add("active");
        }
      });
    }
  }
  renderLogic1() {
    links.forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        let activeTab = document.querySelector(".acordeon__tab.active");
        if (activeTab) {
          activeTab.classList.remove("active");
        }
        let parentLink = el.closest(".acordeon__tab");
        if (parentLink !== activeTab) {
          parentLink.classList.add("active");
        }
      });
    });
  }
}

const exp = new Acordeon();
