const readline = require('readline-sync');

function prompt(message) {
  console.log(`--> ${message}`);
}

const CARD_SUIT = ['♦', '♥', '♣', '♠'];
const CARD_VALUES = {
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  10: "10",
  J: "10",
  Q: "10",
  K: "10",
  A: "11"
};
const VALID_ANSWERS = ['y', 'n'];
const MAX_VALUE = 21;
const DEALER_MAX_STAY = 17;
const GAMES_TO_WIN = 3;

//--> All Deck Related Functions

//Create a deck
function initializeDeck() {
  let result = [];
  for (let suit in CARD_SUIT) {
    for (let card in CARD_VALUES) {
      result.push([CARD_SUIT[suit], card]);
    }
  }

  return result;
}

//Shuffle the Deck
function shuffle(deck) {
  for (let index = deck.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [deck[index], deck[otherIndex]] = [deck[otherIndex], deck[index]];
  }
  return deck;
}


//--> All Hand Related Functions

//Deal Cards
function dealCards(deck, qty) {
  return deck.splice(0, qty);
}

function dealCard(deck, playerCards) {
  playerCards.push(...dealCards(deck, 1));
  return playerCards;
}


//Display hand
function hand(cards) {
  return cards.map(card => `${card[1]}${card[0]}`).join(' ');
}

//Find the value of the hand
function getTotal(cards) {
  let values = cards.map(value => value[1]);

  let sum = values.reduce((accumulator, value) => {
    if (value === 'A') {
      return accumulator + 11;
    } else if (['J', 'Q', 'K'].includes(value)) {
      return accumulator + 10;
    } else {
      return accumulator + Number(value);
    }
  }, 0);

  sum = values.filter(value => value === 'A').reduce((acc) => {
    if (acc > MAX_VALUE) return acc - 10;
    return acc;
  }, sum);

  return sum;

}

//Update total of the hand
function updateTotal(playerTotal, playerHand) {
  playerTotal = getTotal(playerHand);
  return playerTotal;
}

//Display the hand, with a mask for the 2nd dealer card
function displayHand(playerHand, dealerHand, playerTotal, dealerTotal,
  mask = false) {
  if (mask) {
    prompt('----------');
    prompt(`Dealer's hand: ${dealerHand[0][1]}${dealerHand[0][0]} ??`);
  } else {
    prompt('----------');
    prompt(`Dealer's hand: ${hand(dealerHand)}`);
  }
  prompt(`Player's hand: ${hand(playerHand)}`);
  prompt('----------');
  prompt(`Player's Hand Total: ${playerTotal}`);
  if (!mask) {
    prompt(`Dealer's Hand Total: ${dealerTotal}`);
  }
}


//Is the total of the hand greater than 21?
function busted(hand) {
  if (getTotal(hand) > MAX_VALUE) {
    return true;
  } else {
    return false;
  }
}

//Scoring

function initializeScores() {
  return {Player: 0, Dealer: 0};
}


function displayScore(score) {
  prompt(`The score is: player: ${score['Player']}, dealer: ${score['Dealer']}.`);
}

function gameWinner(score) {
  let winner = '';

  for (let player in score) {
    if (score[player] >= GAMES_TO_WIN) {
      winner = player;
    }
  }
  return winner;
}

function updateScores(playerTotal, dealerTotal, scores) {
  let result = determineResult(playerTotal, dealerTotal);

  switch (result) {
    case 'PLAYER_BUST':
    case 'DEALER' :
      scores['Dealer'] += 1;
      break;
    case 'DEALER_BUST':
    case 'PLAYER':
      scores['Player'] += 1;
      break;
    case 'TIE':
  }
}

//Calculate total, display winner
function determineResult(playerTotal, dealerTotal) {
  if (playerTotal > MAX_VALUE) {
    return 'PLAYER_BUST';
  } else if (dealerTotal > MAX_VALUE) {
    return 'DEALER_BUST';
  } else if (playerTotal > dealerTotal) {
    return 'PLAYER';
  } else if (playerTotal < dealerTotal) {
    return 'DEALER';
  } else if (playerTotal === dealerTotal) {
    return 'TIE';
  } else {
    return 'error';
  }
}

function displayResult(playerTotal, dealerTotal) {
  let result = determineResult(playerTotal, dealerTotal);

  switch (result) {
    case 'PLAYER_BUST': prompt('You busted, the dealer won!');
      break;
    case 'DEALER_BUST': prompt('The dealer busted, you won!');
      break;
    case 'PLAYER': prompt('You won!');
      break;
    case 'DEALER': prompt('Dealer won!');
      break;
    case 'TIE': prompt('It\'s a tie!');
  }
}

//Continue function
function promptToContinue() {
  prompt("Press the 'Enter' key to continue.");
  readline.question();
}

//TWENTY-ONE

while (true) {
  console.clear();
  let scores = initializeScores();
  prompt(`Welcome to 21! The first to ${GAMES_TO_WIN} games wins.`);
  promptToContinue();

  //Match Loop
  while (!gameWinner(scores)) {
    console.clear();
    let deck = shuffle(initializeDeck());
    let playerHand = dealCards(deck, 2);
    let dealerHand = dealCards(deck, 2);
    let playerTotal = getTotal(playerHand);
    let dealerTotal = getTotal(dealerHand);
    displayScore(scores);
    displayHand(playerHand, dealerHand, playerTotal, dealerTotal, true);

    //Player Loop
    while (!busted(playerHand)) {
      prompt("Would you like to hit or stay?");
      let answer = readline.question().trim();

      if (answer.toLowerCase() === 'hit') {
        prompt('Hit me!');
        dealCard(deck, playerHand);
        playerTotal = updateTotal(playerTotal, playerHand);
        displayHand(playerHand, dealerHand, playerTotal, dealerTotal, true);
      } else if (answer.toLowerCase() === 'stay') break;
      else {
        prompt('Invalid response');
      }
    }

    if (busted(playerHand)) {
      displayHand(playerHand, dealerHand, playerTotal, dealerTotal, false);
      displayResult(playerTotal, dealerTotal);
      updateScores(playerTotal, dealerTotal, scores);
      displayScore(scores);
      promptToContinue();
      continue;
    } else {
      prompt ('Player Stayed');
      displayHand(playerHand, dealerHand, playerTotal, dealerTotal, true);
      prompt('Dealer\'s Turn');
      promptToContinue();
    }

    console.clear();
    displayHand(playerHand, dealerHand, playerTotal, dealerTotal, false);


    //Dealer Loop

    while (dealerTotal < DEALER_MAX_STAY) {
      displayHand(playerHand, dealerHand, playerTotal, dealerTotal, false);
      dealCard(deck, dealerHand);
      displayHand(playerHand, dealerHand, playerTotal, dealerTotal, false);
      prompt('Dealer hit!');
      dealerTotal = updateTotal(dealerTotal, dealerHand);

    }

    if (busted(dealerHand)) {
      displayHand(playerHand, dealerHand, playerTotal, dealerTotal, false);
      displayResult(playerTotal, dealerTotal);
    } else {
      displayHand(playerHand, dealerHand, playerTotal, dealerTotal, false);
      prompt('Dealer Stayed');
    }

    displayHand(playerHand, dealerHand, playerTotal, dealerTotal, false);
    displayResult(playerTotal, dealerTotal);
    updateScores(playerTotal, dealerTotal, scores);
    displayScore(scores);
    promptToContinue();
    continue;
  }

  if (gameWinner(scores)) {
    prompt(`${gameWinner(scores)} has won the game!`);
  }

  //Ask to play again
  prompt('Would you like to play again?');
  let answer = readline.question().trim();

  while (!VALID_ANSWERS.includes(answer.toLowerCase())) {
    prompt('Invalid response. Please try again.');
    answer = readline.question().trim();
  }

  if
  (answer.toLowerCase() !== 'y') break;
}

prompt('Thank you for playing Twenty-One');