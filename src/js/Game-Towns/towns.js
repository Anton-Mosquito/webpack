const { indexOf } = require("lodash");

const field = document.querySelector("#townsData");
const message = document.querySelector("#townsResult");
const btn = document.querySelector("#chooseGame");
const RadioChoise = document.querySelectorAll(".form--towns input");

class Towns {
  constructor() {}

  static checkRadio(arr) {
    for (const iterator of arr) {
      if (iterator.checked) {
        return iterator.getAttribute("data-value");
      }
    }
  }

  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  checkFirstAndLastLetterForPlayer(elementOfArray, enterDataUser) {
    const lastLetter = elementOfArray.slice(-1);
    const firstLetter = enterDataUser.slice(0, 1);
    if (lastLetter == firstLetter) {
      return true;
    } else {
      return false;
    }
  }

  checkFirstAndLastLetterForBot(array, enterDataUser) {
    let x = array[array.length - 1];
    const lastLetter = x.slice(-1);
    const firstLetter = enterDataUser.slice(0, 1);
    if (lastLetter == firstLetter) {
      return true;
    } else {
      return false;
    }
  }

  checkCityIntoArray(array, enterDataUser) {
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
  }

  renderLogicWithPlayer() {
    field.removeAttribute("disabled");
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
              this.checkFirstAndLastLetter(iterator, data) &&
              !this.checkCityIntoArray(cities, data)
            ) {
              cities.push(data);
              field.value = "";
              message.textContent = secondMessage;
              console.log(cities);
              break;
            } else if (
              this.checkFirstAndLastLetter(iterator, data) &&
              this.checkCityIntoArray(cities, data)
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
  renderLogicWithBot() {
    const findElement = (el, arr) => {
      return arr.indexOf(el);
    };

    const filterResults = (arr, info) => {
      return arr.filter((el) => el != info && el.startsWith(info.slice(-1)));
    };

    const deleteElement = (el, arr) => {
      let findIndex = findElement(el, arr);
      arr.splice(findIndex, 1);
    };

    field.removeAttribute("disabled");
    const allCities = [
      "абингдон",
      "амстердам",
      "антверпен",
      "архангельск",
      "атланта",
      "баден",
      "базель",
      "бангалор",
      "барселона",
      "берлин",
      "берн",
      "биробиджан",
      "бонн",
      "бостон",
      "брайзах-на-Рейне",
      "бремен",
      "будённовск",
      "буффало",
      "буэнос-Айрес",
      "варшава",
      "вашингтон",
      "веймар",
      "вельс",
      "вельск",
      "вена",
      "венеция",
      "винница",
      "владивосток",
      "волгоград",
      "вологда",
      "вормс",
      "воронеж",
      "гамбург",
      "ганновер",
      "гданьск",
      "генуя",
      "глупов",
      "делфт",
      "денвер",
      "детройт",
      "донецк",
      "дорчестер",
      "дрезден",
      "дублин",
      "дувр",
      "дуйсбург",
      "женева",
      "иваново",
      "иерусалим",
      "измаил",
      "ингельхайм-ам-Райн",
      "иркутск",
      "казань",
      "калгари",
      "кале",
      "калининград",
      "калуга",
      "караганда",
      "каргополь",
      "карлсруэ",
      "кашин",
      "кёльн",
      "киев",
      "киншаса",
      "кишинёв",
      "клайпеда",
      "кола",
      "копенгаген",
      "коряжма",
      "котлас",
      "котор",
      "краков",
      "красноярск",
      "кызыл",
      "лан",
      "лейпциг",
      "лион",
      "лозанна",
      "лондон",
      "лос-Анджелес",
      "луга",
      "львов",
      "льеж",
      "мадрид",
      "майнц",
      "мальборк",
      "мамоново",
      "мангейм",
      "матера",
      "мезень",
      "мейсен",
      "миасс",
      "милан",
      "минусинск",
      "мирный",
      "монреаль",
      "мурманск",
      "мухосранск",
      "мюнхен",
      "назарет",
      "нарьян-Мар",
      "нижний Новгород",
      "нижний Тагил",
      "николаевск-на-Амуре",
      "ницца",
      "новоржев",
      "новосибирск",
      "новый Орлеан",
      "нью-Йорк",
      "нюрнберг",
      "омск",
      "оренбург",
      "оттава",
      "павия",
      "париж",
      "пиза",
      "полтава",
      "порт-Артур",
      "пошехонье",
      "прага",
      "псков",
      "пушкино",
      "рединг",
      "реймс",
      "ржев",
      "рига",
      "рим",
      "рио-де-Жанейро",
      "ростов-на-Дону",
      "руан",
      "рязань",
      "салоники",
      "самара",
      "сан-Франциско",
      "сараево",
      "сарапул",
      "северодвинск",
      "сиэтл",
      "советск",
      "сорренто",
      "сочи",
      "стамбул",
      "страсбург",
      "таганрог",
      "тверь",
      "тегеран",
      "тель-Авив",
      "тмутаракань",
      "тобольск",
      "томск",
      "торонто",
      "трир",
      "тулча",
      "турин",
      "тюмень",
      "урюпинск",
      "фонтенбло",
      "хабаровск",
      "ханты-Мансийск",
      "харьков",
      "хельсинки",
      "химки",
      "холмогоры",
      "хьюстон",
      "цюрих",
      "чернигов",
      "чикаго",
      "шаффхаузен",
      "эрфурт",
      "ялуторовск",
      "ялта",
    ];
    const cities = [];
    const MessagePlayer = "Player win!";
    const MessageBot = "Bot win!";
    const MassageAlert = "This town has already been";
    const alertMessage =
      "This city does not fit the criterion, please try again";

    field.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        let data = field.value;
        data = data.toLowerCase();
        let filterResult = filterResults(allCities, data);
        if (cities.length === 0) {
          let findIndex = findElement(data, allCities);
          allCities.splice(findIndex, 1);
          cities.push(
            data,
            filterResult[this.getRandom(0, filterResult.length - 1)]
          );
          deleteElement(cities[cities.length - 1], allCities);
          field.value = "";
          message.textContent = cities.join("/");
        } else {
          for (let index = 0; index < cities.length; index++) {
            if (
              this.checkCityIntoArray(allCities, data) &&
              !this.checkCityIntoArray(cities, data) &&
              this.checkFirstAndLastLetterForBot(cities, data)
            ) {
              deleteElement(data, allCities);
              cities.push(
                data,
                filterResult[this.getRandom(0, filterResult.length - 1)]
              );
              deleteElement(cities[cities.length - 1], allCities);
              field.value = "";
              message.textContent = cities.join("/");
              break;
            } else if (
              !this.checkCityIntoArray(allCities, data) &&
              !this.checkCityIntoArray(cities, data) &&
              this.checkFirstAndLastLetterForBot(cities, data)
            ) {
              cities.push(
                data,
                filterResult[this.getRandom(0, filterResult.length - 1)]
              );
              field.value = "";
              message.textContent = cities.join("/");
              break;
            } else if (this.checkCityIntoArray(cities, data)) {
              alert(MassageAlert);
              break;
            } else if (!this.checkFirstAndLastLetterForBot(cities, data)) {
              alert(alertMessage);
              break;
            } else if (allCities.length === 0) {
              message.textContent = MessagePlayer;
            } else {
              message.textContent = MessageBot;
            }
          }
        }
      }
    });
  }
}

const ex = new Towns();
const choiseMethod = (aribut, exemplar) => {
  aribut == "bot"
    ? exemplar.renderLogicWithBot()
    : exemplar.renderLogicWithPlayer();
};

btn.addEventListener("click", () => {
  choiseMethod(Towns.checkRadio(RadioChoise), ex);
});
