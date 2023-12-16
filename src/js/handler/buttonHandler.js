export function handleStartButtonAction(action) {
  const startButton = document.querySelector(".start-game-button");

  startButton.addEventListener("click", (e) => {
    action();
  });
}
