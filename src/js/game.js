import { delayWrapper } from "./util/util";
export default class Game {
  #turnQueue = [];
  #winner = null;
  constructor(players) {
    if (players.length > 2) throw new Error("more than 2 player not support!");
    this.#turnQueue = [...players];
    this.gameOver = false;
    this.comboFlag = false;
    this.isPvP = this.#checkIfPvP();
  }

  #checkIfPvP = () => {
    for (let player of this.#turnQueue) {
      if (player.computer != null) {
        return false;
      }
    }
    return true;
  };

  shouldEndGame = () => {
    if (this.#turnQueue[1].board.hasAllShipSunk()) {
      this.gameOver = true;
      this.#winner = this.#turnQueue[0];
      return true;
    } else {
      return false;
    }
  };

  advanceTurn = () => {
    if (this.shouldEndGame()) return;
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
    placementAction = null,
    preAction = null,
    playerAction,
    computerAction,
    postAction = null,
    delay = null,
  }) {
    if (placementAction != null) await this.placementAction(placementAction);
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

  placementAction = (callback) => {
    return new Promise((resolve, reject) => {
      callback(this.#turnQueue, () => {
        resolve();
      });
    });
  };

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
