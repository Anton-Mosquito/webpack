const tabsMenu = document.querySelectorAll(".tabs-container__menu-item");
const tabsInfo = document.querySelectorAll(".tabs-container__tabs-tab");

class Tabs {
  constructor() {
    this.renderLogicWithOutLoop();
  }
  renderLogicWithLoop() {
    for (let index = 0; index < tabsMenu.length; index++) {
      tabsMenu[index].addEventListener("click", (e) => {
        e.preventDefault();
        if (tabsMenu[index].classList.contains("active")) {
          tabsInfo[index].classList.add("active");
        } else {
          for (let index = 0; index < tabsMenu.length; index++) {
            if (tabsMenu[index].classList.contains("active")) {
              tabsMenu[index].classList.remove("active");
            }
            for (let kindex = 0; kindex < tabsInfo.length; kindex++) {
              if (tabsInfo[kindex].classList.contains("active")) {
                tabsInfo[kindex].classList.remove("active");
              }
            }
          }
          tabsMenu[index].classList.add("active");
          tabsInfo[index].classList.add("active");
        }
      });
    }
  }
  renderLogicWithOutLoop() {
    for (let index = 0; index < tabsMenu.length; index++) {
      tabsMenu[index].addEventListener("click", (e) => {
        e.preventDefault();
        let activeLink = document.querySelector(
          ".tabs-container__menu-item.active"
        );
        activeLink.classList.remove("active");
        let activeTab = document.querySelector(
          ".tabs-container__tabs-tab.active"
        );
        activeTab.classList.remove("active");
        tabsMenu[index].classList.add("active");
        tabsInfo[index].classList.add("active");
      });
    }
  }
}

const exm = new Tabs();
