const resultDisplay = document.getElementById("result");

const rockButton = document.querySelector(".far.fa-hand-rock");
const paperButton = document.querySelector(".far.fa-hand-paper");
const scissorButton = document.querySelector(".far.fa-hand-scissors");

const optionsGame = ["rock", "paper", "scissors"];

function playGame(playerChoise) {
  const randomIndex = Math.floor(Math.random() * optionsGame.length);
  const computerChoise = optionsGame[randomIndex];

  let message = "";

  if (playerChoise === "rock" && computerChoise === "rock")
    message = "It's a draw! You both chose rock.";

  if (playerChoise === "paper" && computerChoise === "paper")
    message = "It's a draw! You both chose paper.";

  if (playerChoise === "scissors" && computerChoise === "scissors")
    message = "It's a draw! You both chose scissors.";

  if (playerChoise === "rock" && computerChoise === "paper")
    message = "Sorry, the computer won! Paper beats rock!";

  if (playerChoise === "rock" && computerChoise === "scissors")
    message = "Congratulations, you won! Rock beats scissors!";

  if (playerChoise === "paper" && computerChoise === "rock")
    message = "Congratulations, you won! Paper beats rock!";

  if (playerChoise === "paper" && computerChoise === "scissors")
    message = "Sorry, the computer won! Scissors beats paper!";

  if (playerChoise === "scissors" && computerChoise === "rock")
    message = "Sorry, the computer won! Rock beats scissors!";

  if (playerChoise === "scissors" && computerChoise === "paper")
    message = "Congratulations, you won! Scissors beats paper!";

  if (!message) {
    message = "Something went wrong. Please try again!";
  } else {
    resultDisplay.innerHTML = message;
  }
}

(function init() {
  rockButton.addEventListener("click", () => playGame("rock"));
  paperButton.addEventListener("click", () => playGame("paper"));
  scissorButton.addEventListener("click", () => playGame("scissors"));
})();
