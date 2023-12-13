import Game from "../js/game";
import Player from "../js/model/player";

test("game should start game successfully", () => {
  const a = new Player("Mike", 8);
  const b = new Player("Tom", 8, true);

  a.addRandomShips(4);
  b.addRandomShips(4);

  const game = new Game([a, b]);
  game.startGame({
    playerAction: (player, target) => {
      expect(player).toMatchObject(a);
      expect(target).toMatchObject(b);
    },
    computerAction: (player, target) => {
      expect(player).toMatchObject(b);
      expect(target).toMatchObject(a);
      game.gameOver = true;
    },
  });
});

test("player should be able to perform action in game", () => {
  const a = new Player("Mike", 4);
  const b = new Player("Tom", 4, true);

  a.addRandomShips(2);
  b.addRandomShips(2);

  const game = new Game([a, b]);
  game.startGame({
    playerAction: (player, target) => {
      target.board.receiveAttack({ x: 2, y: 0 });
      expect(player).toMatchObject(a);
      expect(target).toMatchObject(b);
    },
    computerAction: (player, target) => {
      expect(player.board.getDataAt({ x: 2, y: 0 })).toBe(-1);
      expect(player).toMatchObject(b);
      expect(target).toMatchObject(a);
      game.gameOver = true;
    },
  });
});
