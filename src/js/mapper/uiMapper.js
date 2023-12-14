import Gameboard from "../model/gameboard";
import Player from "../model/player";
import Ship from "../model/ship";

export function updatePlayerBoard(player) {
  const board = document.querySelector(
    `.game-board[data-player-name="${player.name}"]`
  );
  const hideBoard = player.computer != null ? true : false;
  board.replaceWith(mapPlayerBoardToGridElement(player, hideBoard));
}

export function updateBoardState(player, target) {
  const playerOverlay = document.querySelector(
    `.game-board[data-player-name="${player.name}"] .board-lock`
  );
  playerOverlay.style.display = "block";
  const targetOverlay = document.querySelector(
    `.game-board[data-player-name="${target.name}"] .board-lock`
  );
  targetOverlay.style.display = "none";
}

export function mapPlayerInformation(player) {
  const nameList = document.querySelector(".player-name-list");
  const playerName = document.createElement("div");
  playerName.classList.toggle("player-name");
  playerName.textContent = player.name;
  nameList.append(playerName);
}

export function mapPlayerBoard(player) {
  const boardList = document.querySelector(".board-list");
  const hideBoard = player.computer != null ? true : false;
  boardList.append(mapPlayerBoardToGridElement(player, hideBoard));
}

export function handlePlayerAction(target, action) {
  const cells = Array.from(
    document.querySelectorAll(
      `.game-board[data-player-name="${target.name}"] .board-cell`
    )
  );

  for (let cell of cells) {
    cell.addEventListener("click", (e) => {
      action(cell);
    });
  }
}

function mapPlayerBoardToGridElement(player, hideBoard) {
  const array = player.board.getBoard();

  const boardElement = document.createElement("div");
  boardElement.setAttribute("data-player-name", player.name);
  boardElement.classList.toggle("game-board");

  //const overlay = document.createElement("div");
  //overlay.classList.toggle("board-lock");

  //boardElement.append(overlay);

  if (player.computer != null) {
    boardElement.style.backgroundColor = "purple";
  } else {
    boardElement.style.backgroundColor = "green";
  }
  boardElement.style.gridTemplate = `repeat(${player.board.size},1fr) / repeat(${player.board.size},1fr)`;

  for (let i = 0; i < player.board.size; i++) {
    for (let j = 0; j < player.board.size; j++) {
      let cell = mapToCellElement(array[i][j], j, i, hideBoard);
      boardElement.append(cell);
    }
  }

  return boardElement;
}

function mapToCellElement(value, x, y, hideBoard) {
  let cell = document.createElement("div");
  cell.style.display = "inline-block";

  const cellSize = 16;
  cell.style.width = `${cellSize}px`;
  cell.style.height = `${cellSize}px`;

  cell.setAttribute("data-x", x);
  cell.setAttribute("data-y", y);

  cell.classList.toggle("board-cell");

  if (value >= 1 && hideBoard === false) {
    cell.style.backgroundColor = "black";
  } else if (value === -1) {
    cell.style.backgroundColor = "red";
  } else if (value < -1) {
    cell.style.backgroundColor = "green";
  } else {
    cell.style.backgroundColor = "white";
  }
  return cell;
}
