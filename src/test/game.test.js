import Game from "../js/game";
import Player from "../js/model/player";

test("game should start game successfully", () => {
  const a = new Player("Mike", 8);
  const b = new Player("Tom", 8, true);

  a.addRandomShips(4);
  b.addRandomShips(4);

  const game = new Game([a, b]);
  game.startGame();

  expect(game.hasGameEnded()).toBe(false);
  expect(game.getCurrentPlayer()).toMatchObject(a);
});

test("game should advance turn properly", () => {
  const a = new Player("Mike", 4);
  const b = new Player("Tom", 4, true);

  a.addRandomShips(2);
  b.addRandomShips(2);

  const game = new Game([a, b]);

  game.startGame();
  expect(game.getCurrentPlayer()).toMatchObject(a);

  game.playGame({ x: 3, y: 0 });
  expect(game.getCurrentPlayer()).toMatchObject(b);

  game.playGame();
  expect(game.getCurrentPlayer()).toMatchObject(a);
});

test("game should finish properly", () => {
  const a = new Player("Mike", 4, true);
  const b = new Player("Tom", 4, true);

  a.addRandomShips(2);
  b.addRandomShips(2);

  const game = new Game([a, b]);
  game.startGame();
  expect(game.hasGameEnded()).toBeFalsy();
  while (!game.hasGameEnded()) {
    //console.log(`${game.getCurrentPlayer().name}'s turn`);
    //console.log(game.gameString());
    game.playGame();
    //console.log(game.gameString());
  }
  //console.log(`${game.getCurrentPlayer().name} has won`);
  expect(game.hasGameEnded()).toBeTruthy();
});
