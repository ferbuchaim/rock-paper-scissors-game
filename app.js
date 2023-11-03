const startGameBtn = document.getElementById('start-game-btn');

let gameIsRunning = false;

function getPlayerChoice() {
  let selection = prompt('Rock, paper or scissors?', '').toLowerCase();
  if (selection !== 'rock' && selection !== 'paper' && selection !== 'scissors') {
    alert('Invalid choice! We chose rock for you!');
    selection = 'rock';
  }
  return selection;
}

function getPcChoice() {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return 'rock';
  } else if (randomValue < 0.67) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function checkWinner(PcChoice, playerChoice) {
  if (PcChoice === playerChoice) {
    return 'draw';
  } else if (
    (PcChoice === 'rock' && playerChoice === 'paper') ||
    (PcChoice === 'paper' && playerChoice === 'scissors') ||
    (PcChoice === 'scissors' && playerChoice === 'rock')
  ) {
    return 'player';
  } else {
    return 'pc';
  }
}

function startGame() {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerSelection = getPlayerChoice();
  const pcSelection = getPcChoice();
  const winner = checkWinner(pcSelection, playerSelection);
  console.log('Winner is: ', winner);
}

startGameBtn.addEventListener('click', startGame);
