// startNewGame
function startNewGame() {
  // players nemaes validation
  if (players[0].name === players[1].name) {
    alert("plaese set different namessss");
    return;
  }
  if (players[0].name === "" || players[1].name === "") {
    alert("plaese set different names");

    return;
  }
  resetGameSatus();
  activePlayerName.textContent = players[activePlayer].name;
  gameArea.style.display = "block";
}

// switch the player
function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerName.textContent = players[activePlayer].name;
}

function selectedGameTile(e) {
  // select the clicked gametile
  const selectedTile = e.target;
  // for 0 index for the insertion in to the 2d array
  const selectedRow = selectedTile.dataset.row - 1;
  const selectedCol = selectedTile.dataset.col - 1;

  // if a tile is selected we cant reselect that tile

  if (gameData[selectedRow][selectedCol] > 0) {
    alert("select a unselected tile");
  }
  selectedTile.textContent = players[activePlayer].symbol;
  selectedTile.classList.add("disabled");

  // inserting to the 2d array and setting the location for the player
  gameData[selectedRow][selectedCol] = activePlayer + 1;

  const winnerID = checkForGameOver();
  if (winnerID !== 0) {
    endGame(winnerID);
  }
  currRound++;

  switchPlayer();
}

// check for game over
function checkForGameOver() {
  // for checking the rows
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }

  // for checking the cols
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  // check diagonal from top left to bottom right
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }

  // check diagonal from top roght to bottom left
  if (
    gameData[0][2] > 0 &&
    gameData[0][2] === gameData[1][1] &&
    gameData[1][1] === gameData[2][0]
  ) {
    return gameData[0][2];
  }
  if (currRound === 9) {
    return -1;
  }

  return 0;
}

// ending

function endGame(winnerID) {
  gameOver.style.display = "block";

  if (winnerID > 0) {
    let winnerName = players[winnerID - 1].name;
    gameOver.firstElementChild.firstElementChild.textContent = winnerName;
  } else {
    gameOver.firstElementChild.textContent = "It is a Draw!";
  }
}

// start a new game after winning

function resetGameSatus() {
  activePlayer = 0;
  currRound = 1;
  gameOver.firstElementChild.innerHTML = "You won <span>PLAYER NAME</span>";
  gameOver.style.display = "none";

  let gameTilesIndex = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      gameTiles.children[gameTilesIndex].textContent = "";
      gameTiles.children[gameTilesIndex].classList.remove("disabled");
      gameTilesIndex++;
    }
  }
}
