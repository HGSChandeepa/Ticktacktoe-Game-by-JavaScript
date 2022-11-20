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

// edit name for player names
editPlayer1Btn.addEventListener("click", openPlayerConfigform);
editPlayer2Btn.addEventListener("click", openPlayerConfigform);

// add cancel event
cancelBtn.addEventListener("click", closePlayerConfigform);
backdropElem.addEventListener("click", closePlayerConfigform);

// form
Inputform.addEventListener("submit", savePlayerConfig);
