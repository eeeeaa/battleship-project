export function handleStartButtonAction(action) {
  const startButton = document.querySelector(".start-game-button");

  startButton.addEventListener("click", (e) => {
    const first = document.querySelector("#first-player").value;
    const second = document.querySelector("#second-player").value;
    const gameType = document.querySelector(
      'input[name="gameType"]:checked'
    ).value;

    action(first, second, gameType);
  });
}
