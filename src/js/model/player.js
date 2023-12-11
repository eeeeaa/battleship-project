/** Player logic
 * each player have their own game board
 * each player have name
 * each player can be human or computer
 *
 * ai logic as well
 *
 */

import Gameboard from "./gameboard";
import Ship from "./ship";

export default class Player {
  #size;
  constructor(name, size, isComputer = false) {
    this.name = name;
    this.#size = size;
    this.board = new Gameboard(size);
    if (isComputer) {
      this.computer = new ComputerComponent();
    }
  }

  addRandomShips = (shipCount) => {
    for (let i = 0; i < shipCount; i++) {
      const ship = new Ship(Math.round(Math.random() * (this.#size - 1) + 1));
      let move = {
        x: Math.round(Math.random() * (this.#size - 1)),
        y: Math.round(Math.random() * (this.#size - 1)),
      };
      let placeship = this.board.placeShip(ship, move, Math.random() < 0.5);
      while (!placeship) {
        move = {
          x: Math.round(Math.random() * (this.#size - 1)),
          y: Math.round(Math.random() * (this.#size - 1)),
        };

        placeship = this.board.placeShip(ship, move, Math.random() < 0.5);
      }
    }
  };
}

class ComputerComponent {
  #previousMove = null;
  constructor() {}

  #generateRandomMove = (boardSize) => {
    if (boardSize <= 0) throw new Error("invalid board size!");
    if (this.#previousMove != null) {
      const shouldTryVertical = Math.random() < 0.5 ? true : false;
      const moveValue = Math.random() < 0.5 ? 1 : -1;

      if (shouldTryVertical) {
        let y = this.#previousMove.y + moveValue;
        return { x: this.#previousMove.x, y };
      } else {
        let x = this.#previousMove.x + moveValue;
        return { x, y: this.#previousMove.y };
      }
    } else {
      let x = Math.round(Math.random() * (boardSize - 1));
      let y = Math.round(Math.random() * (boardSize - 1));
      return { x, y };
    }
  };

  performAutomateAttack = (enemy, forceMemory = null) => {
    if (forceMemory != null) {
      this.#previousMove = forceMemory;
    }
    const board = enemy.board;
    let move = this.#generateRandomMove(board.size);

    while (!board.isValidMove(move)) {
      move = this.#generateRandomMove(board.size);
    }

    if (typeof board.receiveAttack(move) === "object") {
      this.#previousMove = move;
    }
    return true;
  };
}
