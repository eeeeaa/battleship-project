import "../css/style.css";
import {
  updatePlayerBoard,
  mapPlayerBoardToGridElement,
} from "./mapper/uiMapper";
import Player from "./model/player";
import Game from "./game";

//gameLoop();

function gameLoop() {
  const boardList = document.querySelector(".board-list");
  const test = new Player("tom", 10, true);
  const test2 = new Player("jerry", 10, true);
  test.addRandomShips(10);
  test2.addRandomShips(10);

  const game = new Game([test, test2]);
  game.startGame({
    preAction: (players) => {
      for (let player of players) {
        boardList.append(mapPlayerBoardToGridElement(player));
      }
    },
    playerAction: (player, target) => {
      //TODO
    },
    computerAction: (player, target) => {
      player.computer.performAutomateAttack(target);
      updatePlayerBoard(target);
    },
    postAction: (players) => {
      console.log("game ended");
    },
    delay: 300,
  });
}
