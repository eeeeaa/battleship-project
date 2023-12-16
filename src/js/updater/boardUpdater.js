import { mapPlayerBoardToGridElement } from "../mapper/boardMapper";

export function updatePlayerBoard(player, isPvP, forceShowBoard = false) {
  const board = document.querySelector(
    `.game-board[data-player-name="${player.name}"]`
  );
  const hideBoard = player.computer != null ? true : false;
  const shouldHideBoard = forceShowBoard ? false : isPvP || hideBoard;
  board.replaceWith(mapPlayerBoardToGridElement(player, shouldHideBoard));
}
