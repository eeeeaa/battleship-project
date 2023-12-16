export function mapPlayerInformation(player) {
  const nameList = document.querySelector(".player-name-list");
  const playerName = document.createElement("div");
  let playerType = player.computer != null ? "CPU" : "Player";
  playerName.classList.toggle("player-name");

  playerName.textContent = `${player.getFormatName()} (${playerType})`;
  nameList.append(playerName);
}
