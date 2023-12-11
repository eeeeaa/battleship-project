import Player from "../js/model/player";
import Gameboard from "../js/model/gameboard";
import Ship from "../js/model/ship";

test("player should be created successfully", () => {
  const a = new Player("Mike", new Gameboard(8));
  const b = new Player("Tom", new Gameboard(8), true);

  expect(a.name).toBe("Mike");
  expect(b.name).toBe("Tom");

  expect(a.board).toBeDefined();
  expect(b.board).toBeDefined();

  expect(a.computer).toBeUndefined();
  expect(b.computer).toBeDefined();
});

describe("computer player should be able to play naturally", () => {
  test("computer player should be able to mave automate move", () => {
    const a = new Player("Mike", new Gameboard(8));
    const b = new Player("Tom", new Gameboard(8), true);

    expect(b.computer.performAutomateAttack(a)).toBeTruthy();
    expect(a.board.getBoard()).toContainEqual(expect.arrayContaining([-1]));
  });
});
