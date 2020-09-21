const inp = document.querySelector("#predictionsData");
const btn = document.querySelector(".generateNumberOfPridict");
const btn1 = document.querySelector(".showPridictButton");

const predictions = [
  [
    "у вас сегодня будет замечательный день",
    "сегодня вас ждет удача и успех во всех начинаниях",
    "сегодня вас ждет успех при изучении JavaScript",
    "устройте сегодня себе выходной - пусть весь мир подождет",
  ],
  [
    "сегодня лучше не выходите из дома",
    "сегодня лучше полежите весь день на диване",
    "сегодня вы рискуете что-нибудь забыть при выходе из дома",
    "удача сегодня отдыхает , релакс мен!",
  ],
];

class Predictions {
  constructor(inp, btn, btn1, predictions) {
    (this.input = inp),
      (this.generateButton = btn),
      (this.showResult = btn1),
      (this.predictions = predictions);
  }

  generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getDigits() {
    let random;
    let randomMood;
    let timerID;
    this.input.value = "?";
    this.generateButton.addEventListener("click", () => {
      randomMood = this.generateRandom(1, this.predictions.length);
      timerID = setInterval(() => {
        this.input.value = random = this.generateRandom(1, 4);
      }, 100);
      this.generateButton.style.display = "none";
    });
    this.showResult.addEventListener("click", () => {
      clearInterval(timerID);
      if (randomMood == 1) {
        this.input.classList.add("green", "accent-3");
        this.input.setAttribute("disabled", "disabled");
      } else {
        this.input.classList.add("red", "accent-3");
        this.input.setAttribute("disabled", "disabled");
      }
      this.input.value = this.predictions[randomMood - 1][random - 1];
      this.showResult.style.display = "none";
    });
  }
}

let prediction = new Predictions(inp, btn, btn1, predictions);
prediction.getDigits();
