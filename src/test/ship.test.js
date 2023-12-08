import { Ship } from "../js/model/ship";

test("should increase number of hits correctly when called hit function", () => {
  const ship = new Ship(3);
  ship.hit();
  expect(ship.getHitCount()).toBe(1);
});

test("isSunk function should calculate if the ship has sunk", () => {
  const ship = new Ship(3);
  expect(ship.isSunk()).toBeTruthy();
  for (let i = 0; i < 3; i++) {
    ship.hit();
  }
  expect(ship.isSunk()).toBeFalsy();
});
