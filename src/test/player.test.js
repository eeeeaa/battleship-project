import Player from "../js/model/player";

test("player should be created successfully", () => {
  const a = new Player("Mike", 8);
  const b = new Player("Tom", 8, true);

  expect(a.name).toBe("Mike");
  expect(b.name).toBe("Tom");

  expect(a.board).toBeDefined();
  expect(b.board).toBeDefined();

  expect(a.computer).toBeUndefined();
  expect(b.computer).toBeDefined();
});

test("player should be able to add random ship", () => {
  const a = new Player("Mike", 8);
  a.addRandomShips(4);

  expect(a.board.getShips().length).toBeLessThanOrEqual(4);
});

describe("computer player should be able to play naturally", () => {
  test("computer player should be able to mave automate move", () => {
    const a = new Player("Mike", 8);
    const b = new Player("Tom", 8, true);

    expect(b.computer.performAutomateAttack(a)).toBeTruthy();
    expect(a.board.getBoard()).toContainEqual(expect.arrayContaining([-1]));
  });
});
