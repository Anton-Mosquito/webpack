const inp = document.querySelector("#predictionsData");
const btn = document.querySelector(".generateNumberOfPridict");
const btn1 = document.querySelector(".showPridictButton");

const predictions = [
  "у вас сегодня будет замечательный день",
  "сегодня лучше не выходите из дома",
  "сегодня вас ждет удача и успех во всех начинаниях",
  "сегодня вас ждет успех при изучении JavaScript",
  "сегодня лучше полежите весь день на диване",
  "сегодня вы рискуете что-нибудь забыть при выходе из дома",
  "устройте сегодня себе выходной - пусть весь мир подождет",
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
    let timerID;
    this.input.value = "?";
    this.generateButton.addEventListener("click", () => {
      timerID = setInterval(() => {
        this.input.value = random = this.generateRandom(
          1,
          this.predictions.length
        );
      }, 100);
      this.generateButton.style.display = "none";
    });
    this.showResult.addEventListener("click", () => {
      clearInterval(timerID);
      this.input.value = this.predictions[random - 1];
      this.showResult.style.display = "none";
    });
  }
}

let prediction = new Predictions(inp, btn, btn1, predictions);
prediction.getDigits();
