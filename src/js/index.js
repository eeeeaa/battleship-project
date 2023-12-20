import "../css/style.css";
import { mapPlayerBoard, toggleBoardOverlay } from "./mapper/boardMapper";
import { mapPlayerInformation } from "./mapper/gameInfoMapper";
import { updatePlayerBoard } from "./updater/boardUpdater";
import {
  updateButtonStatus,
  clearDisplay,
  setGameDisplayState,
  clearBoardList,
} from "./updater/gameInfoUpdater";
import { pushToEventLog } from "./handler/notificationHandler";
import { handlePlayerAction } from "./handler/playerActionHandler";
import { handleStartButtonAction } from "./handler/buttonHandler";
import Player from "./model/player";
import Game from "./game";
import Ship from "./model/ship";
import Gameboard from "./model/gameboard";

main();

function main() {
  setGameDisplayState("PRE_GAME");
  handleStartButtonAction((first, second, gameType) => {
    clearDisplay();
    setGameDisplayState("ONGOING");
    const size = 10;
    let p1 = new Player("Player 1", size);
    let p2 = new Player("Player 2", size, true);

    if (first != null && first != "") {
      p1 = new Player(first, size);
    }

    if (second != null && second != "") {
      p2 = new Player(second, size, true);
    }

    switch (gameType) {
      case "PvC": {
        p1 = new Player(p1.name, size);
        p2 = new Player(p2.name, size, true);
        break;
      }
      case "PvP": {
        p1 = new Player(p1.name, size);
        p2 = new Player(p2.name, size);
        break;
      }
      case "CvC": {
        p1 = new Player(p1.name, size, true);
        p2 = new Player(p2.name, size, true);
        break;
      }
    }

    const game = new Game([p1, p2]);
    gameLoop(game);
  });
}

function gameLoop(game) {
  game.startGame({
    placementAction: (players, finish) => {
      const SHIP_COUNT = 5;
      pushToEventLog(`ship placement is setting up...`);
      //setup placement
      for (let player of players) {
        player.addRandomShips(SHIP_COUNT);
      }
      finish();
    },
    preAction: (players, finish) => {
      pushToEventLog(`game is setting up...`);
      //setup real board
      clearBoardList();

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
