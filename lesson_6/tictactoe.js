const readline = require('readline-sync');

function prompt(message) {
  console.log(`--> ${message}`);
}

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const MATCH_PTS = 5;
const VALID_ANSWERS = ['y', 'n'];
const VALID_PLAYERS = {p: 'Player', c: 'Computer'};
const FIRST_PLAYER = 'choose';
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];

//Board variables and functions
let board = {
  1: 'X',
  2: ' ',
  3: ' ',
  4: ' ',
  5: 'O',
  6: ' ',
  7: ' ',
  8: ' ',
  9: 'X',
};

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }
  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

//Player and computer choices
function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square: ${joinOr(emptySquares(board))}`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let square;

  if (emptySquares(board).includes('5')) {
    square = 5;
  }

  if (!square) {
    for (let index = 0; index < WINNING_LINES.length; index++) {
      let line = WINNING_LINES[index];
      square = findAtRiskSquare(line, board, COMPUTER_MARKER);
      if (square) break;
    }
  }

  if (!square) {
    for (let index = 0; index < WINNING_LINES.length; index++) {
      let line = WINNING_LINES[index];
      square = findAtRiskSquare(line, board, HUMAN_MARKER);
      if (square) break;
    }
  }

  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }


  board[square] = COMPUTER_MARKER;
  return board;
}

function detectWinner(board) {

  for (let line = 1; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
        board[sq2] === COMPUTER_MARKER &&
        board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

//The the choices with an 'or' at the end.
function joinOr(arr, delimeter = ', ', word = 'or') {
  switch (arr.length) {
    case 0:
      return '';
    case 1:
      return `${arr[0]}`;
    case 2:
      return arr.join(` ${word} `);
    default:
      return arr.slice(0, arr.length - 1).join(delimeter) +
        `${delimeter}${word} ${arr[arr.length - 1]} `;
  }
}

//Turn Handling
function chooseSquare(board, currentPlayer) {
  if (currentPlayer === 'Player') {
    playerChoosesSquare(board);
  } else if (currentPlayer === 'Computer') {
    computerChoosesSquare(board);
  }
  return null;
}

function alternatePlayer(currentPlayer) {
  if (currentPlayer === 'Player') {
    return 'Computer';
  } else if (currentPlayer === 'Computer') {
    return 'Player';
  }
  return null;
}

//Continue function
function promptToContinue() {
  prompt("Press the 'Enter' key to continue.");
  readline.question();
}

//Keep Score
function displayScore(playerScore, computerScore) {
  prompt(`Current score -- Player: ${playerScore}, Computer: ${computerScore}`);
}

function updateScores(board, score) {
  if (detectWinner(board)) {
    score[detectWinner(board)] += 1;
  }
  return score;
}

function gameWinner(score) {
  let winner = '';

  for (let player in score) {
    if (score[player] >= MATCH_PTS) {
      winner = player;
    }
  }
  return winner;
}


//Computer AI
function findAtRiskSquare(line, board, marker) {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === marker).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }

  return null;
}


//TicTacToe Game
while (true) {
  let score = {Player: 0, Computer: 0};
  console.clear();
  prompt(`Welcome to TicTacToe! \n First to ${MATCH_PTS} wins the match`);

  //Match Loop
  while (!gameWinner(score)) {
    let board = initializeBoard();
    let currentPlayer = FIRST_PLAYER;

    if (currentPlayer === 'choose') {
      prompt('Select first player: p for player, c for computer');
      currentPlayer = readline.question().trim();

      while (!Object.keys(VALID_PLAYERS).includes(currentPlayer)) {
        prompt('Invalid choice, please enter p for player or c for computer.');
        currentPlayer = readline.question().trim();
      }
      currentPlayer = VALID_PLAYERS[currentPlayer];
    }

    prompt(`${currentPlayer} goes first.`);
    promptToContinue();


    //Game Loop
    while (true) {
      displayBoard(board);
      displayScore(score.Player, score.Computer);

      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
      if (boardFull(board) || someoneWon(board)) break;
    }
    displayBoard(board);

    if (someoneWon(board)) {
      prompt(`${detectWinner(board)} won!`);
    } else {
      prompt("It's a tie!");
    }

    updateScores(board, score);

    if (gameWinner(score)) {
      prompt(`${gameWinner(score)} has won the game!`);
      break;
    }

    promptToContinue();

  }

  prompt('Would you like to play again? (y or n)');
  let answer = readline.question().trim();

  while (!VALID_ANSWERS.includes(answer.toLowerCase())) {
    prompt('Invalid answer');
    answer = readline.question().trim();
  }

  if (answer.toLowerCase() !== 'y') break;
}

prompt('Thanks for playing Tic Tac Toe!');