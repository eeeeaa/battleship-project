import Gameboard from "../js/model/gameboard";
import Ship from "../js/model/ship";

test("gameboard should be able to create board", () => {
  const board = new Gameboard(8);
  expect(board.getBoard()).toStrictEqual([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

describe("gameboard placing ship test cases", () => {
  test("gameboard should be able to place ship at specific coordinate horizontally successfully", () => {
    const board = new Gameboard(8);
    const ship = new Ship(3);

    expect(board.placeShip(ship, { x: 2, y: 0 }, false)).toBeTruthy();
    expect(board.placeShip(ship, { x: 2, y: 1 }, false)).toBeTruthy();

    expect(board.getShips()[0].shipId).toBe(1);
    expect(board.getShips()[1].shipId).toBe(2);

    expect(board.getBoard()).toStrictEqual([
      [0, 0, 1, 1, 1, 0, 0, 0],
      [0, 0, 2, 2, 2, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ]);
  });

  test("gameboard should be able to place ship at specific coordinate horizontally failure", () => {
    const board = new Gameboard(8);
    const ship = new Ship(3);

    expect(board.placeShip(ship, { x: 7, y: 0 }, false)).toBeFalsy();

    expect(board.getBoard()).toStrictEqual([
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ]);
  });

  test("gameboard should be able to place ship at specific coordinate vertically successfully", () => {
    const board = new Gameboard(8);
    const ship = new Ship(3);

    expect(board.placeShip(ship, { x: 2, y: 0 }, true)).toBeTruthy();
    expect(board.placeShip(ship, { x: 3, y: 0 }, true)).toBeTruthy();

    expect(board.getShips()[0].shipId).toBe(1);
    expect(board.getShips()[1].shipId).toBe(2);

    expect(board.getBoard()).toStrictEqual([
      [0, 0, 1, 2, 0, 0, 0, 0],
      [0, 0, 1, 2, 0, 0, 0, 0],
      [0, 0, 1, 2, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ]);
  });

  test("gameboard should be able to place ship at specific coordinate vertically failure", () => {
    const board = new Gameboard(8);
    const ship = new Ship(3);

    expect(board.placeShip(ship, { x: 7, y: 7 }, true)).toBeFalsy();

    expect(board.getBoard()).toStrictEqual([
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ]);
  });
});

test("gameboard should be able to receive attack coordinate and call hit on ship", () => {
  const board = new Gameboard(8);
  const ship = new Ship(3);

  board.placeShip(ship, { x: 2, y: 0 }, false);

  expect(board.receiveAttack({ x: 2, y: 0 })).toBeTruthy();
  expect(board.getBoard()[0][2]).toBe(-1);

  expect(board.receiveAttack({ x: 4, y: 5 })).toBeTruthy();
  expect(board.getBoard()[5][4]).toBe(-1);

  expect(board.receiveAttack({ x: 8, y: 9 })).toBeFalsy();
});

describe("gameboard should report its own ships status", () => {
  test("gameboard should be able to report all ship status and weather all ship been sunk", () => {
    const board = new Gameboard(8);
    const ship = new Ship(3);
    const ship2 = new Ship(3);
    const ship3 = new Ship(3);

    board.placeShip(ship, { x: 2, y: 0 }, false);
    board.placeShip(ship2, { x: 2, y: 1 }, false);
    board.placeShip(ship3, { x: 2, y: 2 }, false);

    board.receiveAttack({ x: 2, y: 0 });
    board.receiveAttack({ x: 3, y: 0 });
    board.receiveAttack({ x: 4, y: 0 });

    expect(board.hasAllShipSunk()).toBeFalsy();

    board.receiveAttack({ x: 2, y: 1 });
    board.receiveAttack({ x: 3, y: 1 });
    board.receiveAttack({ x: 4, y: 1 });

    expect(board.hasAllShipSunk()).toBeFalsy();

    board.receiveAttack({ x: 2, y: 2 });
    board.receiveAttack({ x: 3, y: 2 });
    board.receiveAttack({ x: 4, y: 2 });

    expect(board.hasAllShipSunk()).toBeTruthy();

    expect(board.getBoard()).toStrictEqual([
      [0, 0, -1, -1, -1, 0, 0, 0],
      [0, 0, -1, -1, -1, 0, 0, 0],
      [0, 0, -1, -1, -1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ]);
  });
});

test("gameboard should be able to determine valid move", () => {
  const board = new Gameboard(8);
  const ship = new Ship(3);
  const ship2 = new Ship(3);
  const ship3 = new Ship(3);

  board.placeShip(ship, { x: 2, y: 0 }, false);
  board.placeShip(ship2, { x: 2, y: 1 }, false);
  board.placeShip(ship3, { x: 2, y: 2 }, false);

  board.receiveAttack({ x: 2, y: 0 });

  expect(board.isValidMove({ x: 8, y: 4 })).toBeFalsy();
  expect(board.isValidMove({ x: 4, y: 8 })).toBeFalsy();
  expect(board.isValidMove({ x: -5, y: 4 })).toBeFalsy();
  expect(board.isValidMove({ x: 4, y: -5 })).toBeFalsy();
  expect(board.isValidMove({ x: -4, y: -5 })).toBeFalsy();

  expect(board.isValidMove({ x: 2, y: 0 })).toBeFalsy();

  expect(board.isValidMove({ x: 2, y: 1 })).toBeTruthy();
  expect(board.isValidMove({ x: 4, y: 5 })).toBeTruthy();
});
