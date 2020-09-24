const field = document.querySelector("#townsData");
const message = document.querySelector("#townsResult");

class Towns {
  constructor() {
    this.renderLogic();
  }
  renderLogic() {
    const checkFirstAndLastLetter = (elementOfArray, enterDataUser) => {
      const lastLetter = elementOfArray.slice(-1);
      const firstLetter = enterDataUser.slice(0, 1);
      if (lastLetter == firstLetter) {
        return true;
      } else {
        return false;
      }
    };
    const checkCityIntoArray = (array, enterDataUser) => {
      let flag;
      for (const iterator of array) {
        if (iterator == enterDataUser) {
          flag = true;
          break;
        } else {
          flag = false;
        }
      }
      return flag;
    };

    const firstMessage = "The first player makes a move";
    const secondMessage = "The second player makes a move";
    const alertMessage =
      "This city does not fit the criterion, please try again";
    const alertMessage1 = "This city has already been";
    message.textContent = firstMessage;
    const cities = [];
    field.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && field.value.length > 3) {
        let data = field.value;
        data = data.toLowerCase();
        if (cities.length == 0) {
          cities.push(data);
          field.value = "";
        } else {
          for (const iterator of cities) {
            if (
              checkFirstAndLastLetter(iterator, data) &&
              !checkCityIntoArray(cities, data)
            ) {
              cities.push(data);
              field.value = "";
              message.textContent = secondMessage;
              console.log(cities);
              break;
            } else if (
              checkFirstAndLastLetter(iterator, data) &&
              checkCityIntoArray(cities, data)
            ) {
              field.value = "";
              message.textContent = alertMessage1;
              console.log(cities);
            } else {
              field.value = "";
              message.textContent = alertMessage;
            }
          }
        }
      }
    });
  }
}

const ex = new Towns();
