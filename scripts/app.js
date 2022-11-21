// selected player toggle

let selcetedPlayer = 0;

// player array of player objects with the player name and player symbol
const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

// active player for the game tils
let activePlayer = 0;

// game data
const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

// round

let currRound = 1;
// the form and the overlay selector
const playerFormOverlay = document.getElementById("config-overlay");
const backdropElem = document.getElementById("backdrop");

// edit player name button selector
const editPlayer1Btn = document.getElementById("edit-player1");
const editPlayer2Btn = document.getElementById("edit-player2");

// cancel and conferm buttin slector
const cancelBtn = document.getElementById("cancel-btn");
const submitBtn = document.getElementById("submit-btn");

// form selector
const Inputform = document.querySelector("form");
const error = document.getElementById("config-errors");

//start new game
const startNewGameBtn = document.getElementById("start-game-btn");
const gameArea = document.getElementById("active-game");
// all the li in game-bord
const gameTiles = document.querySelectorAll("#game-bord li");
const activePlayerName = document.getElementById("active-player-name");

// game over
const gameOver = document.getElementById("game-over");

// edit name for player names
editPlayer1Btn.addEventListener("click", openPlayerConfigform);
editPlayer2Btn.addEventListener("click", openPlayerConfigform);

// add cancel event
cancelBtn.addEventListener("click", closePlayerConfigform);
backdropElem.addEventListener("click", closePlayerConfigform);

// form
Inputform.addEventListener("submit", savePlayerConfig);

// new game
startNewGameBtn.addEventListener("click", startNewGame);

// game tiles
for (gametile of gameTiles) {
  gametile.addEventListener("click", selectedGameTile);
}

// game over case
