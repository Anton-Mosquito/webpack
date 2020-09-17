const data = {
  2018: [
    {
      date: "18.03.2018",
      name: "Event 2018",
      text:
        "Выборы президента России победу одержал действующий президент Владимир Путин",
    },
    {
      date: "13.07.2018",
      name: "Event 2018",
      text: "В Австралии и Антарктиде наблюдалось частное солнечное затмение",
    },
    {
      date: "17.10.2018",
      name: "Event 2018",
      text:
        "Массовое убийство в Керченском политехническом колледже; 21 человек (включая убийцу) убит, более 50 раненых.",
    },
  ],
  2019: [
    {
      date: "15.04.2019",
      name: "Event 2019",
      text:
        "Крупный пожар в соборе Парижской Богоматери. Власти отрицают, что причиной пожара мог стать поджог.",
    },
    {
      date: "20.05.2019",
      name: "Event 2019",
      text: "Владимир Зеленский вступил в должность президента Украины.",
    },
    {
      date: "08.12.2019",
      name: "Event 2019",
      text: "Началась пандемия коронавируса SARS-CoV-2, вызывающего COVID-19.",
    },
  ],
  2020: [
    {
      date: "09.02.2020",
      name: "Event 2018",
      text: "92-я церемония вручения премии 'Оскар'",
    },
    {
      date: "12.06.2020",
      name: "Event 2018",
      text:
        "Президент США Дональд Трамп принял саммит G7 в 2020 году в своей резиденции в Кэмп-Дэвид",
    },
    {
      date: "30.08.2020",
      name: "Event 2018",
      text: "Выбры в Беларусии",
    },
  ],
};

class HistoricalEvent {
  constructor(data) {
    (this.data = data), this.createInterface();
  }

  createInterface() {
    const input = document.querySelector("#historicalEvents");
    const eventsTable = document.querySelector(".events-table");
    input.addEventListener("keydown", (e) => {
      const x = e.target.value;
      if (e.key == "Enter") {
        if (this.data[x]) {
          eventsTable.innerHTML = "";
          for (const iterator of this.data[x]) {
            eventsTable.insertAdjacentHTML(
              "afterbegin",
              `<tr><td>${iterator.date}</td><td>${iterator.name}</td><td>${iterator.text}</td></tr>`
            );
          }
        }
      }
    });
    input.addEventListener("input", (e) => {
      const x = e.target.value;
      if (!x) {
        eventsTable.innerHTML = "";
        return;
      }
    });
  }

  parsingData(data) {}
}

const historicalEvent = new HistoricalEvent(data);
