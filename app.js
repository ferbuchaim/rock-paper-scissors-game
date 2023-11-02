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

function startGame() {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerSelection = getPlayerChoice();
  console.log(playerSelection);
}

startGameBtn.addEventListener('click', startGame);
