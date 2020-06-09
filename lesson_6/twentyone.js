const readline = require('readline-sync');

function prompt(message) {
  console.log(`--> ${message}`);
}

const DECK_SUIT = ['♦', '♥', '♣', '♠'];
const DECK_TYPE = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K'];
const VALID_ACTIONS = {h: 'hit', s: 'stay'};
const VALID_ANSWERS = ['y', 'n'];
const HIT = 'h';
const STAY = 's';
const MAX_VALUE = 21;
const DEALER_MAX_STAY = 17;
const GAMES_TO_WIN = 3;

//--> All Deck Related Functions

//Create a deck
function initializeDeck() {
  let deck = DECK_SUIT.map(suit => {
    return DECK_TYPE.map(type => [suit, type]);
  });
  return shuffle(deck);
}

//Shuffle the Deck 
function shuffle(cards) {
  for (let index = cards.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); 
    [cards[index], cards[otherIndex]] = [cards[otherIndex], cards[index]]; 
  }
  return cards;
}

//Turn the face cards into their names
function findCard(cards) {
  return cards.map(card => {
    let type = card[1];
   
   switch (type) {
     case 'A': return 'Ace';
     case 'J': return 'Jack';
     case 'K': return 'King';
     case 'Q': return 'Queen';
     default: return type;
   } 
  });
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

//Update total after new card is dealt
function updateTotal(playerTotal, playerHand) {
  playerTotal = getTotal(playerHand);
  return playerTotal;
}

//Display the hand, with a mask for the 2nd dealer card
function displayHand(playerHand, dealerHand, playerTotal, dealerTotal, mask = false) {
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
function busted(cards) {
  getTotal(cards) > MAX_VALUE;
}

//Determine whether the dealer hits
function hitDealer(cards) {
  getTotal(cards) < DEALER_MAX_STAY;
}


//Joiner to display list of cards in hand
function joinAnd(cards, delimeter = ', ', word = 'and') {
  return cards.slice(0, cards.length - 1).join(delimeter) + 
  `${delimeter}${word} ${cards[cards].length - 1}.`;
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


//Dealer turn 


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

function displayResult(playerValue, dealerValue) {
  let result = determineResult(playerValue, dealerValue);
  
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
  prompt(`Welcome to 21! The first to ${GAMES_TO_WIN} games wins.`)
  
  //Match Loop
  while (!gameWinner(scores)) {
    console.clear();
    let deck = initializeDeck();
    let playerHand = dealCards(deck, 2);
    let dealerHand = dealCards(deck, 2);
    let playerTotal = getTotal(playerHand);
    let dealerTotal = getTotal(dealerHand);
    displayScore(scores)
    displayHand(playerHand, dealerHand, playerTotal, dealerTotal, true);
    
    //Player Loop
    while (true) {
    prompt("Would you like to hit or stay?");
    let answer = readline.question().trim();
  
    if (answer.toLowerCase() === 'hit') {
      prompt('Hit me!');
      dealCard(deck, playerHand);
      playerTotal = updateTotal(playerTotal, playerHand);
      displayHand(playerHand, dealerHand, playerTotal, dealerTotal, true);
    }
    if (answer[0].toLowerCase() === 'stay' || busted()) break;
  }
  
  if (busted(playerTotal)) {
    updateScores(playerTotal, dealerTotal, scores);
    displayScore(scores);
    displayHand(playerHand, dealerHand, playerTotal, dealerTotal, false);
    displayResult(playerTotal, dealerTotal);
    promptToContinue();
  } else {
    prompt ('Player Stayed');
    displayHand(playerHand, dealerHand, playerTotal, dealerTotal, true);
  }
  
  console.clear();
  displayScore(scores);
  displayHand(playerHand, dealerHand, playerTotal, dealerTotal, false);
  prompt('Dealer\'s Turn')
  
  //Dealer Loop
  
  while (dealerTotal < DEALER_MAX_STAY) {
    displayScore(scores);
    displayHand(playerHand, dealerHand, playerTotal, dealerTotal, false);
    dealCard(deck, dealerHand);
    dealerTotal = updateTotal(dealerTotal, dealerHand);
  }
  
  if (busted(dealerTotal)) {
    updateScores(playerTotal, dealerTotal, scores);
    displayScore(scores);
    displayHand(playerHand, dealerHand, playerTotal, dealerTotal, false);
    displayResult(playerTotal, dealerTotal);
    promptToContinue();
    continue;
  } else {
    updateScores(playerTotal, dealerTotal, scores);
    displayScore(scores);
    displayHand(playerHand, dealerHand, playerTotal, dealerTotal, false);
    prompt('Dealer Stayed');
  }
  
  displayResult(playerTotal, dealerTotal);
  continue;
  }
  
  if (gameWinner(scores)) {
      prompt(`${gameWinner(scores)} has won the game!`);
      break;
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