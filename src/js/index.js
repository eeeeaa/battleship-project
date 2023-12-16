import "../css/style.css";
import { mapPlayerBoard, toggleBoardOverlay } from "./mapper/boardMapper";
import { mapPlayerInformation } from "./mapper/gameInfoMapper";
import { updatePlayerBoard } from "./updater/boardUpdater";
import { updateButtonStatus, clearDisplay } from "./updater/gameInfoUpdater";
import { pushToEventLog } from "./handler/notificationHandler";
import { handlePlayerAction } from "./handler/playerActionHandler";
import { handleStartButtonAction } from "./handler/buttonHandler";
import Player from "./model/player";
import Game from "./game";

main();

function main() {
  handleStartButtonAction(() => {
    clearDisplay();
    const test = new Player("tom", 10, true);
    const test2 = new Player("jerry", 10, true);
    test.addRandomShips(25);
    test2.addRandomShips(25);
    const game = new Game([test, test2]);
    gameLoop(game);
  });
}

function gameLoop(game) {
  game.startGame({
    preAction: (players, finish) => {
      pushToEventLog(`game is setting up...`);
      for (let player of players) {
        mapPlayerBoard(player, game.isPvP);
        mapPlayerInformation(player);
        let playerType = player.computer != null ? "CPU" : "Player";
        pushToEventLog(
          `${player.getFormatName()} enter the game as ${playerType}`
        );
      }
      toggleBoardOverlay(players[0]);
      pushToEventLog(`game has started!`);
      updateButtonStatus(true);
      finish();
    },
    playerAction: (player, target, endTurn) => {
      handlePlayerAction(target, (cell) => {
        if (game.gameOver) {
          game.postGameAction((players, winner) => {
            for (let player of players) {
              updatePlayerBoard(player, game.isPvP);
            }
            console.log(`game ended, ${winner.getFormatName()} has won!`);
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
          pushToEventLog(
            `${player.getFormatName()} hit ${target.getFormatName()}'s ship!`
          );
        }

        if (result === true) {
          pushToEventLog(`${player.getFormatName()} missed!`);
        }

        updatePlayerBoard(target, game.isPvP);
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
        pushToEventLog(
          `${player.getFormatName()} hit ${target.getFormatName()}'s ship!`
        );
      }

      if (result === true) {
        pushToEventLog(`${player.getFormatName()} missed!`);
      }

      updatePlayerBoard(target, game.isPvP);
      if (game.comboFlag === false) {
        toggleBoardOverlay(player);
        toggleBoardOverlay(target);
      }
      endTurn();
    },
    postAction: (players, winner, finish) => {
      pushToEventLog(`game is ending...`);
      for (let player of players) {
        updatePlayerBoard(player, game.isPvP, true);
      }
      pushToEventLog(`game ended, ${winner.getFormatName()} has won!`);
      updateButtonStatus(false);
      finish();
    },
    delay: 1000,
  });
}
