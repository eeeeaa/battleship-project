export default class Game {
  #turnQueue = [];
  constructor(players) {
    this.#turnQueue = [...players];
    this.gameOver = false;
  }

  #advanceTurn = () => {
    if (this.#turnQueue[0].board.hasAllShipSunk()) {
      this.gameOver = true;
      return;
    }
    const temp = this.#turnQueue[0];
    this.#turnQueue.shift();
    this.#turnQueue.push(temp);
  };

  #delay = (delay) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), delay);
    });
  };

  async startGame({
    preAction = null,
    playerAction,
    computerAction,
    postAction = null,
    delay = null,
  }) {
    if (preAction != null) preAction(this.#turnQueue);
    while (!this.gameOver) {
      if (this.#turnQueue[0].computer != null) {
        this.computerTurnAction(computerAction);
      } else {
        this.playerTurnAction(playerAction);
      }
      this.#advanceTurn();
      if (delay != null) {
        await this.#delay(delay);
      }
    }
    if (postAction != null) postAction(this.#turnQueue);
  }

  playerTurnAction = (callback) => {
    callback(this.#turnQueue[0], this.#turnQueue[1]);
  };

  computerTurnAction = (callback) => {
    callback(this.#turnQueue[0], this.#turnQueue[1]);
  };
}
