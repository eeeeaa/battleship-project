import "../css/style.css";
import {
  updatePlayerBoard,
  mapPlayerBoard,
  mapPlayerInformation,
  handlePlayerAction,
  updateBoardState,
} from "./mapper/uiMapper";
import Player from "./model/player";
import Game from "./game";

gameLoop();

function gameLoop() {
  const test = new Player("tom", 10);
  const test2 = new Player("jerry", 10, true);
  test.addRandomShips(10);
  test2.addRandomShips(10);

  const game = new Game([test, test2]);
  game.startGame({
    preAction: (players) => {
      for (let player of players) {
        mapPlayerBoard(player);
        mapPlayerInformation(player);
      }
    },
    playerAction: (player, target, endTurn) => {
      console.log("player turn");
      handlePlayerAction(target, (cell) => {
        if (game.gameOver) {
          game.postGameAction((players, winner) => {
            for (let player of players) {
              updatePlayerBoard(player, false);
            }
            console.log(`game ended, ${winner.name} has won!`);
          });
        }

        let x = Number(cell.getAttribute("data-x"));
        let y = Number(cell.getAttribute("data-y"));

        const result = target.board.receiveAttack({ x, y });

        if (typeof result === "object") {
          game.comboFlag = true;
        }
        updatePlayerBoard(target);
        endTurn();
      });
    },
    computerAction: (player, target, endTurn) => {
      console.log("computer turn");
      const result = player.computer.performAutomateAttack(target);
      if (typeof result === "object") {
        game.comboFlag = true;
      }
      updatePlayerBoard(target);
      endTurn();
    },
    postAction: (players, winner) => {
      for (let player of players) {
        updatePlayerBoard(player, false);
      }
      console.log(`game ended, ${winner.name} has won!`);
    },
    delay: 1000,
  });
}
