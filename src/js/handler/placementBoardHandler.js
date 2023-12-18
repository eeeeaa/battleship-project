export function handleShipPlacementAction(player, action) {
  const cells = Array.from(
    document.querySelectorAll(
      `.game-board[data-player-name="${player.name}"] .board-cell`
    )
  );
  for (let cell of cells) {
    cell.addEventListener("click", (e) => {
      action(cell);
    });
  }
}
