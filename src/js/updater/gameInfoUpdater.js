export function clearDisplay() {
  const boardList = document.querySelector(".board-list");
  const nameList = document.querySelector(".player-name-list");
  const eventLog = document.querySelector(".event-log");

  boardList.innerHTML = "";
  nameList.innerHTML = "";
  eventLog.innerHTML = "";
}

export function updateButtonStatus(isOngoing) {
  const startButton = document.querySelector(".start-game-button");

  if (isOngoing) {
    startButton.disabled = true;
  } else {
    startButton.disabled = false;
  }
}

export function gameFormStatus(isPreGame) {
  const nameList = document.querySelector(".player-name-list");
  const container = document.querySelector(".game-form-container");

  if (isPreGame) {
    nameList.style.display = "none";
    container.style.display = "flex";
  } else {
    nameList.style.display = "flex";
    container.style.display = "none";
  }
}
