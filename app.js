const resultGame = document.getElementById("game-result");
const resultGameExtended = document.getElementById("extended-game-result");

const rockButton = document.querySelector(".far.fa-hand-rock");
const paperButton = document.querySelector(".far.fa-hand-paper");
const scissorsButton = document.querySelector(".far.fa-hand-scissors");

const rockButtonExtended = document.querySelector(
  ".extended-game .far.fa-hand-rock"
);
const paperButtonExtended = document.querySelector(
  ".extended-game .far.fa-hand-paper"
);
const scissorsButtonExtended = document.querySelector(
  ".extended-game .far.fa-hand-scissors"
);
const lizardButtonExtended = document.querySelector(
  ".extended-game .far.fa-hand-lizard"
);
const spockButtonExtended = document.querySelector(
  ".extended-game .far.fa-hand-spock"
);

const optionsGame = ["rock", "paper", "scissors"];
const optionsGameExtended = ["rock", "paper", "scissors", "lizard", "spock"];

function playGame(playerChoice) {
  const randomIndex = Math.floor(Math.random() * optionsGame.length);
  const computerChoice = optionsGame[randomIndex];

  const playerChoiseCapitalize =
    String(playerChoice[0]).toUpperCase() + String(playerChoice).slice(1);

  let message = "";

  if (playerChoice === computerChoice)
    message = `It's a draw! You both chose ${playerChoice}.`;
  else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    message = `Congratulations, you won! ${playerChoiseCapitalize} beats ${computerChoice}!`;
  } else if (
    (playerChoice === "rock" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "rock")
  ) {
    message = `Sorry, the computer won! ${playerChoiseCapitalize} beats ${computerChoice}!`;
  }

  if (!message) {
    message = "Something went wrong. Please try again!";
  } else {
    resultGame.innerHTML = message;
  }
}

function playGameExtended(playerChoice) {
  const randomIndex = Math.floor(Math.random() * optionsGameExtended.length);
  const computerChoice = optionsGameExtended[randomIndex];

  const playerChoiseCapitalize =
    String(playerChoice[0]).toUpperCase() + String(playerChoice).slice(1);

  let message = "";

  if (playerChoice === computerChoice)
    message = `It's a draw! You both chose ${playerChoice}.`;
  else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "rock" && computerChoice === "lizard") ||
    (playerChoice === "lizard" && computerChoice === "spock") ||
    (playerChoice === "spock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "lizard") ||
    (playerChoice === "lizard" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "spock") ||
    (playerChoice === "spock" && computerChoice === "rock")
  ) {
    message = `Congratulations, you won! ${playerChoiseCapitalize} beats ${computerChoice}!`;
  } else {
    message = `Sorry, the computer won! ${playerChoiseCapitalize} beats ${computerChoice}!`;
  }

  if (!message) {
    message = "Something went wrong. Please try again!";
  } else {
    resultGameExtended.innerHTML = message;
  }
}

(function init() {
  rockButton.addEventListener("click", () => playGame("rock"));
  paperButton.addEventListener("click", () => playGame("paper"));
  scissorsButton.addEventListener("click", () => playGame("scissors"));

  rockButtonExtended.addEventListener("click", () => playGameExtended("rock"));
  paperButtonExtended.addEventListener("click", () =>
    playGameExtended("paper")
  );
  scissorsButtonExtended.addEventListener("click", () =>
    playGameExtended("scissors")
  );
  lizardButtonExtended.addEventListener("click", () =>
    playGameExtended("lizard")
  );
  spockButtonExtended.addEventListener("click", () =>
    playGameExtended("spock")
  );
})();
