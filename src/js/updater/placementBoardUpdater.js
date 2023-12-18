import { generatePlacementBoard } from "../mapper/placementBoardMapper";

export function updatePlacementBoard(player) {
  const board = document.querySelector(
    `.game-board[data-player-name="${player.name}"]`
  );
  board.replaceWith(generatePlacementBoard(player));
}
