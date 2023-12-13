import Ship from "../js/model/ship";
test("should returns hit count", () => {
  const ship = new Ship(3);
  expect(ship.getHitCount()).toBe(0);
  ship.hit();
  expect(ship.getHitCount()).toBe(1);
});
test("should increase number of hits correctly when called hit function", () => {
  const ship = new Ship(3);
  ship.hit();
  expect(ship.getHitCount()).toBe(1);
});

test("isSunk function should calculate if the ship has sunk", () => {
  const ship = new Ship(3);
  expect(ship.isSunk()).toBeFalsy();
  for (let i = 0; i < 3; i++) {
    ship.hit();
  }
  expect(ship.isSunk()).toBeTruthy();
});
