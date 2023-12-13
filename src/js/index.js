import "../css/style.css";
import { mapGameUiElement, updatePlayerBoard } from "./mapper/uiMapper";
import Player from "./model/player";
import Game from "./game";

gameLoop();

function gameLoop() {
  const test = new Player("tom", 10, true);
  const test2 = new Player("jerry", 10, true);
  test.addRandomShips(10);
  test2.addRandomShips(10);

  const game = new Game([test, test2]);
  game.startGame();
  mapGameUiElement(game);

  const interval = setInterval(() => {
    updatePlayerBoard(game.getCurrentPlayer());
    updatePlayerBoard(game.getNextPlayer());
    game.playGame();
    updatePlayerBoard(game.getCurrentPlayer());
    updatePlayerBoard(game.getNextPlayer());

    if (game.hasGameEnded()) {
      console.log("game ended");
      clearInterval(interval);
    }
  }, 300);
}
