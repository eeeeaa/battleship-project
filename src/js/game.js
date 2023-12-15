import { delayWrapper } from "./util/util";
export default class Game {
  #turnQueue = [];
  #winner = null;
  constructor(players) {
    this.#turnQueue = [...players];
    this.gameOver = false;
    this.comboFlag = false;
  }

  advanceTurn = () => {
    if (this.#turnQueue[0].board.hasAllShipSunk()) {
      this.gameOver = true;
      this.#winner = this.#turnQueue[1];
      return;
    }
    if (this.comboFlag) {
      console.log("combo");
      this.comboFlag = false;
      return;
    }
    const temp = this.#turnQueue[0];
    this.#turnQueue.shift();
    this.#turnQueue.push(temp);
  };

  async startGame({
    preAction = null,
    playerAction,
    computerAction,
    postAction = null,
    delay = null,
  }) {
    if (preAction != null) await this.preGameAction(preAction);
    while (!this.gameOver) {
      if (this.#turnQueue[0].computer != null) {
        if (delay != null) {
          await delayWrapper(delay);
        }
        await this.turnAction(computerAction);
      } else {
        await this.turnAction(playerAction);
      }
    }
    if (postAction != null) await this.postGameAction(postAction);
  }

  preGameAction = (callback) => {
    return new Promise((resolve, reject) => {
      callback(this.#turnQueue, () => {
        resolve();
      });
    });
  };

  postGameAction = (callback) => {
    return new Promise((resolve, reject) => {
      callback(this.#turnQueue, this.#winner, () => {
        resolve();
      });
    });
  };

  turnAction = (callback) => {
    return new Promise((resolve, reject) => {
      callback(this.#turnQueue[0], this.#turnQueue[1], () => {
        this.advanceTurn();
        resolve();
      });
    });
  };
}
