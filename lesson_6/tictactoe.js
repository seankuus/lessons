const readline = require('readline-sync');

function prompt(message) {
  console.log(`--> ${message}`);
}
//function to print messages

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
//explicitly define the markers used in the board

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
//object that allows us to update board values

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
//print the board using board values

function initializeBoard() {
  let board = {};
  
  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }
  return board; 
}
//print an intitial board


function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}
//find the empty squares on the board

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${emptySquares(board).join(', ')}):`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}
//because emptySquares(board) finds the INITIAL_MARKER, this tests for empty squares

function detectWinner(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // diagonals
    ]
    
    for (let line = 1; line < winningLines.length; line++) {
      let [sq1, sq2, sq3] = winningLines[line];
      
      if (board[sq1] === HUMAN_MARKER &&
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

while (true) {
  let board = initializeBoard();

  while (true) {
    displayBoard(board);

    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;

    computerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
  }

  displayBoard(board);

  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
  } else {
    prompt("It's a tie!");
  }

  prompt('Play again? (y or n)');
  let answer = readline.question().toLowerCase()[0];
  if (answer !== 'y') break;
}

prompt('Thanks for playing Tic Tac Toe!');