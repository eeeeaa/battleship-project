import "../css/style.css";
import {
  updatePlayerBoard,
  mapPlayerBoard,
  mapPlayerInformation,
  toggleBoardOverlay,
} from "./mapper/uiMapper";
import { pushToEventLog } from "./handler/notificationHandler";
import { handlePlayerAction } from "./handler/playerActionHandler";
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
    preAction: (players, finish) => {
      for (let player of players) {
        mapPlayerBoard(player);
        mapPlayerInformation(player);
        let playerType = player.computer != null ? "CPU" : "Player";
        pushToEventLog(`${player.name} enter the game as ${playerType}`);
      }
      toggleBoardOverlay(players[0]);
      pushToEventLog(`game has started!`);
      finish();
    },
    playerAction: (player, target, endTurn) => {
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

        if (result === false) {
          return;
        }

        if (typeof result === "object") {
          game.comboFlag = true;
          pushToEventLog(`${player.name} hit ${target.name}'s ship!`);
        }

        if (result === true) {
          pushToEventLog(`${player.name} missed!`);
        }

        updatePlayerBoard(target);
        if (game.comboFlag === false) {
          toggleBoardOverlay(player);
          toggleBoardOverlay(target);
        }
        endTurn();
      });
    },
    computerAction: (player, target, endTurn) => {
      const result = player.computer.performAutomateAttack(target);
      if (typeof result === "object") {
        game.comboFlag = true;
        pushToEventLog(`${player.name} hit ${target.name}'s ship!`);
      }

      if (result === true) {
        pushToEventLog(`${player.name} missed!`);
      }

      updatePlayerBoard(target);
      if (game.comboFlag === false) {
        toggleBoardOverlay(player);
        toggleBoardOverlay(target);
      }
      endTurn();
    },
    postAction: (players, winner, finish) => {
      for (let player of players) {
        updatePlayerBoard(player, false);
      }
      pushToEventLog(`game ended, ${winner.name} has won!`);
      finish();
    },
    delay: 1000,
  });
}
