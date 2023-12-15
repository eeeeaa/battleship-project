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
