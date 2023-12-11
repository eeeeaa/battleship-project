/** Solution
 * - the board is a 2D array
 *    - board starts at top right (0,0) and end at bottom left (7,7)
 *    - due to 2D array, element in board is get by board[y][x]
 * - in the board:
 *      - 0 means empty space
 *      - more than 1 means spaced occupied by ship (the number being ship id)
 *      - -1 means already hit space
 * - to track which ship is where
 *      - an array of object containing ship itself and its id
 *      - when receive attack, call hit on ship with the id
 * - Get position as an object of x and y
 */

export default class Gameboard {
  #board = [];
  #ships = [];
  #currentId = 1;

  constructor(size) {
    this.size = size;
    this.#board = this.#createBoard(size);
  }

  #getUniqueShipId = () => {
    const oldId = this.#currentId;
    this.#currentId = this.#currentId + 1;
    return oldId;
  };

  #createBoard = (sizeVal) => {
    let board = [];
    for (let i = 0; i < sizeVal; i++) {
      let row = [];
      for (let j = 0; j < sizeVal; j++) {
        row.push(0);
      }
      board.push(row);
    }
    return board;
  };

  #setDataInBoard(data, x, y) {
    this.#board[y][x] = data;
  }

  #addShips = (ship, shipId) => {
    this.#ships.push(new ShipEntity(ship, shipId));
  };

  #placeShipHorizontal = (ship, startPos) => {
    const id = this.#getUniqueShipId();
    if (
      this.isValidMove({ x: startPos.x + (ship.length - 1), y: startPos.y })
    ) {
      for (let i = startPos.x; i <= startPos.x + (ship.length - 1); i++) {
        this.#setDataInBoard(id, i, startPos.y);
      }
      this.#addShips(ship, id);
      return true;
    }
    return false;
  };
  #placeShipVertical = (ship, startPos) => {
    const id = this.#getUniqueShipId();
    if (
      this.isValidMove({ x: startPos.x, y: startPos.y + (ship.length - 1) })
    ) {
      for (let j = startPos.y; j <= startPos.y + (ship.length - 1); j++) {
        this.#setDataInBoard(id, startPos.x, j);
      }
      this.#addShips(ship, id);
      return true;
    }
    return false;
  };

  getBoard = () => this.#board.slice();

  getShips = () => this.#ships.slice();

  getDataAt = (pos) => {
    if (!this.isValidMove(pos)) return null;
    return this.#board[pos.y][pos.x];
  };

  printBoard = () => {
    let boardString = "";
    for (let i = 0; i < this.size; i++) {
      let row = "";
      for (let j = 0; j < this.size; j++) {
        row += this.#board[i][j] + " ";
      }
      boardString += `${row}\n`;
    }
    console.log(boardString);
  };

  isValidMove = (pos) => {
    if (pos.x < 0 || pos.x > this.size - 1) {
      return false;
    } else;
    if (pos.y < 0 || pos.y > this.size - 1) {
      return false;
    } else;
    if (this.#board[pos.y][pos.x] === -1) {
      return false;
    }
    return true;
  };

  placeShip = (ship, startPos, isVertical) => {
    return isVertical
      ? this.#placeShipVertical(ship, startPos)
      : this.#placeShipHorizontal(ship, startPos);
  };

  hasAllShipSunk = () => {
    for (let entity of this.#ships) {
      if (entity.ship.isSunk() === false) {
        return false;
      }
    }
    return true;
  };

  receiveAttack = (pos) => {
    if (!this.isValidMove(pos)) {
      return false;
    }

    if (this.#board[pos.y][pos.x] != 0) {
      for (let entity of this.#ships) {
        if (entity.shipId === this.#board[pos.y][pos.x]) {
          entity.ship.hit();
          this.#setDataInBoard(-1, pos.x, pos.y);
          return entity.ship;
        }
      }
    }

    this.#setDataInBoard(-1, pos.x, pos.y);
    return true;
  };
}

class ShipEntity {
  constructor(ship, shipId) {
    this.ship = ship;
    this.shipId = shipId;
  }
}
