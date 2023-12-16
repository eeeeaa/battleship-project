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

  #getRandomValidPosition = () => {
    let move = {
      x: Math.round(Math.random() * (this.#size - 1)),
      y: Math.round(Math.random() * (this.#size - 1)),
    };
    while (!this.board.isValidMove(move, true)) {
      move = {
        x: Math.round(Math.random() * (this.#size - 1)),
        y: Math.round(Math.random() * (this.#size - 1)),
      };
    }

    return move;
  };

  #getAdjecentPositionStatus = (move, shipLength, isVertical) => {
    //TODO use ship length and verticality to check if good place to place ship
    return [
      this.board.isValidMove({ x: move.x + 1, y: move.y }, true),
      this.board.isValidMove({ x: move.x - 1, y: move.y }, true),
      this.board.isValidMove({ x: move.x, y: move.y + 1 }, true),
      this.board.isValidMove({ x: move.x, y: move.y - 1 }, true),
    ];
  };

  addRandomShips = (maxShipCount) => {
    const realCount =
      maxShipCount > Math.pow(this.#size, 2) - 1
        ? Math.pow(this.#size, 2) - 1
        : maxShipCount;
    const realSizeLimit = this.#size > 5 ? 5 : this.#size;
    for (let i = 0; i < realCount; i++) {
      const ship = new Ship(
        Math.round(Math.random() * (realSizeLimit - 1) + 1)
      );
      let isVertical = Math.random() < 0.5;
      let move = this.#getRandomValidPosition();
      let adjecentTilesCheck = this.#getAdjecentPositionStatus(move);

      while (adjecentTilesCheck.filter((value) => value).length < 2) {
        move = this.#getRandomValidPosition();
        adjecentTilesCheck = this.#getAdjecentPositionStatus(move);
      }

      this.board.placeShip(ship, move, isVertical);
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

  #generateDumbAttack = (board) => {
    const array = board.getBoard();
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        if (board.isValidMove({ x: j, y: i })) {
          return { x: j, y: i };
        }
      }
    }
    return { x: 0, y: 0 };
  };

  performAutomateAttack = (enemy, forceMemory = null) => {
    if (forceMemory != null) {
      this.#previousMove = forceMemory;
    }
    const board = enemy.board;
    let move = this.#generateRandomMove(board.size);
    let loopCount = 0;
    while (!board.isValidMove(move)) {
      if (loopCount > 10) {
        move = this.#generateDumbAttack(board);
        break;
      }
      move = this.#generateRandomMove(board.size);
      loopCount++;
    }

    const result = board.receiveAttack(move);
    if (typeof result === "object") {
      this.#previousMove = move;
    } else {
      this.#previousMove = null;
    }
    return result;
  };
}
