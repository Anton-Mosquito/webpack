class TicTacToe {
  constructor() {
    this._cells = document.querySelectorAll("[data-game-tic-tac-toe] td");
    this._iterator = 0;
    this.init();
  }

  init() {
    this.eventListener();
  }

  start(element) {
    element.innerHTML = [
      `<i class="material-icons">close</i>`,
      `<i class="material-icons">radio_button_unchecked</i>`,
    ][this._iterator % 2];

    if (this.checkVictory()) {
      alert("you are win!");
    } else if (this._iterator === 8) {
      alert("The game is a draw");
    }

    this._iterator++;
  }

  checkVictory() {
    const cellsWin = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const iterator of cellsWin) {
      if (
        this._cells[iterator[0]].innerHTML ===
          this._cells[iterator[1]].innerHTML &&
        this._cells[iterator[1]].innerHTML ===
          this._cells[iterator[2]].innerHTML &&
        this._cells[iterator[0]].innerHTML !== ""
      )
        return true;
    }

    return false;
  }

  eventListener() {
    document.addEventListener("click", (e) => {
      const target = e.target.dataset.ticTacToe;
      const element = e.target;
      if (element.innerHTML) return;
      if (target === "cell") this.start(element);
    });
  }
}

const expl = new TicTacToe();
