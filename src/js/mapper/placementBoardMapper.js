export function generatePlacementBoard(player) {
  const size = player.board.size;
  let board = [];
  for (let i = 0; i < size; i++) {
    let row = [];
    for (let j = 0; j < size; j++) {
      row.push(0);
    }
    board.push(row);
  }

  const boardElement = document.createElement("div");
  boardElement.setAttribute("data-player-name", player.name);
  boardElement.classList.toggle("game-board");

  boardElement.append(overlay);

  boardElement.style.gridTemplate = `repeat(${size},1fr) / repeat(${size},1fr)`;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let cell = mapToCellElement(board[i][j], j, i);
      boardElement.append(cell);
    }
  }

  return boardElement;
}

function mapToCellElement(value, x, y) {
  let cell = document.createElement("div");
  cell.style.display = "inline-block";

  const cellSize = 16;
  cell.style.width = `${cellSize}px`;
  cell.style.height = `${cellSize}px`;

  cell.setAttribute("data-x", x);
  cell.setAttribute("data-y", y);

  cell.classList.toggle("board-cell");

  if (value >= 1 && hideBoard === false) {
    //ship
    cell.style.backgroundColor = "#94a3b8";
  } else if (value === -1) {
    //missed
    cell.style.backgroundColor = "#dc2626";
  } else if (value < -1) {
    //hit ship
    cell.style.backgroundColor = "#22c55e";
  } else {
    //empty space
    cell.style.backgroundColor = "#164e63";
  }
  return cell;
}
