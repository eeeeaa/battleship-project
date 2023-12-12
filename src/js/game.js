export default class Game {
  #hasGameEnd = false;
  #turnComponent;
  #players;
  constructor(players) {
    if (players.length > 2)
      throw new Error("more than two player not supported!");
    this.#players = players;
    this.#turnComponent = new TurnComponent();
  }

  #playerLose = () => {
    for (let player of this.#players) {
      if (player.board.hasAllShipSunk()) {
        return true;
      }
    }
    return false;
  };

  #advanceGame = () => {
    if (this.#playerLose()) {
      this.#hasGameEnd = true;
    } else {
      this.#turnComponent.advanceTurn();
    }
  };

  #getNextPlayer = () => this.#players[this.#turnComponent.peekNextTurn()];

  getCurrentPlayer = () => this.#players[this.#turnComponent.getCurrentTurn()];

  startGame = () => {
    this.#hasGameEnd = false;
  };

  playGame = (pos = null) => {
    if (this.getCurrentPlayer().computer != null) {
      this.getCurrentPlayer().computer.performAutomateAttack(
        this.#getNextPlayer()
      );
    } else {
      if (pos == null) throw new Error(`no move chosen for human player!`);
      this.#getNextPlayer().board.receiveAttack(pos);
    }
    this.#advanceGame();
  };

  gameString = () => {
    let boardString = "";

    boardString += `------------------------\n`;

    for (let player of this.#players) {
      boardString += player.name + "\n";
      boardString += player.board.getString();
    }

    boardString += `------------------------\n`;

    return boardString;
  };

  hasGameEnded = () => {
    if (this.#hasGameEnd) {
      return true;
    }
    return false;
  };
}

class TurnComponent {
  #currentTurn;
  constructor() {
    this.#currentTurn = 0;
  }

  #randomizeTurn = () => {
    this.#currentTurn = Math.random() < 0.5 ? 1 : 0;
  };

  getCurrentTurn = () => this.#currentTurn;

  peekNextTurn = () => {
    return (this.#currentTurn + 1) % 2;
  };

  advanceTurn = () => {
    this.#currentTurn = (this.#currentTurn + 1) % 2;
  };
}
