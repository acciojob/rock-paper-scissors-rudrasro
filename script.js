const playButton = document.getElementById('play-game');
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const computerChooseElement = document.getElementById('computer-choose');
const roundResultElement = document.getElementById('round-result');
const roundsLeftElement = document.getElementById('rounds-left');
const userPointsElement = document.getElementById('user-points');
const computerPointsElement = document.getElementById('computer-points');
const gameResultElement = document.getElementById('game-result');

let turns;
let userChoice;
let computerChoice;
let userPoints = 0;
let computerPoints = 0;

playButton.addEventListener('click', startGame);
rockButton.addEventListener('click', () => makeChoice(0));
paperButton.addEventListener('click', () => makeChoice(1));
scissorsButton.addEventListener('click', () => makeChoice(2));

function startGame() {
  turns = Number(gameNumberInput.value);
  roundsLeftElement.textContent = turns;
  playButton.style.display = 'none';
  gameNumberInput.style.display = 'none';
  rockButton.style.display = 'inline';
  paperButton.style.display = 'inline';
  scissorsButton.style.display = 'inline';
}

function makeChoice(choice) {
  userChoice = choice;
  computerChoice = Math.floor(Math.random() * 3);
  computerChooseElement.textContent = choices[computerChoice];
  checkResult();
  updateScores();
  checkEndOfGame();
}

function checkResult() {
  if (userChoice === computerChoice) {
    roundResultElement.textContent = 'TIE';
  } else if (userChoice === 0 && computerChoice === 2 ||
             userChoice === 1 && computerChoice === 0 ||
             userChoice === 2 && computerChoice === 1) {
    roundResultElement.textContent = 'WON';
    userPoints++;
  } else {
    roundResultElement.textContent = 'LOSE';
    computerPoints++;
  }
}

function updateScores() {
  userPointsElement.textContent = userPoints;
  computerPointsElement.textContent = computerPoints;
  turns--;
  roundsLeftElement.textContent = turns;
}

function checkEndOfGame() {
  if (turns === 0) {
    if (userPoints > computerPoints) {
      gameResultElement.textContent = 'WON';
    } else if (userPoints < computerPoints) {
      gameResultElement.textContent = 'LOSE';
    } else {
      gameResultElement.textContent = 'TIE';
    }
    rockButton.style.display = 'none';
    paperButton.style.display = 'none';
    scissorsButton.style.display = 'none';
  }
}
