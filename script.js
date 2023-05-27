// on click it need to get the value from button its pressed
const clicked = document.querySelectorAll(".Button");
let arr = ["rock", "paper", "scissors"];
let count = 0;
const value = clicked.forEach((element) => {
  element.onclick = () => {
    let userPicked = element.value;
    const randomIndex = Math.floor(Math.random() * 3);
    const computerPicked = arr[randomIndex];
    const output =
      computerPicked === userPicked
        ? "Draw"
        : computerPicked === "rock" && userPicked === "paper"
        ? "win"
        : computerPicked === "rock" && userPicked === "scissors"
        ? "lost"
        : computerPicked === "paper" && userPicked === "rock"
        ? "lost"
        : computerPicked === "paper" && userPicked === "scissors"
        ? "win"
        : computerPicked === "scissors" && userPicked === "paper"
        ? "lost"
        : computerPicked === "scissors" && userPicked === "rock"
        ? "win"
        : "lost";
    document.getElementById("userPick").innerHTML = `${userPicked} vs `;
    document.getElementById("computerPicked").innerHTML = `${computerPicked}`;
    document.getElementById("player-score").innerHTML = counter(output);
    document.getElementById("result").innerHTML = output;
  };
});

function counter(out) {
  const points =
    out === "win"
      ? (count = count + 1)
      : out === "lost"
      ? (count = count - 1)
      : count;
  return points;
}
document.getElementById("endGameButton").onclick = () => {
  count = 0;
  document.getElementById("result").innerHTML = "";
  document.getElementById("player-score").innerHTML = "";
  document.getElementById("userPick").innerHTML = "";
  document.getElementById("computerPicked").innerHTML = "";
};
