const startGameBtn = document.getElementById('start-game-btn');

let gameIsRunning = false;

function getPlayerChoice() {
  let selection;
  try {
    selection = prompt('Rock, paper or scissors?', '').toLowerCase();
  } catch (error) {
    gameIsRunning = false;
    throw new Error('Something went wrong!');
  }
  if (selection !== 'rock' && selection !== 'paper' && selection !== 'scissors') {
    alert('Invalid choice! Pick again!');
    return;
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
  if (!playerSelection) {
    gameIsRunning = false;
    return startGame();
  }
  const pcSelection = getPcChoice();
  const winner = checkWinner(pcSelection, playerSelection);
  let message;
  if (winner === 'draw') {
    message = `You picked ${playerSelection}, PC picked ${pcSelection}, therefore you have a draw.`;
  } else if (winner === 'player') {
    message = `You picked ${playerSelection}, PC picked ${pcSelection}, therefore you won.`;
  } else {
    message = `You picked ${playerSelection}, PC picked ${pcSelection}, therefore you lost.`;
  }
  alert(message);
  gameIsRunning = false;
}

startGameBtn.addEventListener('click', startGame);
