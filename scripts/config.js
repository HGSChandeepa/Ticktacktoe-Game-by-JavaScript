//after edit button click

function openPlayerConfigform(e) {
  playerFormOverlay.style.display = "block";
  backdropElem.style.display = "block";
  // the data selector
  const selcetedPlayerId = +e.target.dataset.playerid;
  // here +"1" =1 converted to a integer
  selcetedPlayer = selcetedPlayerId;
}

// cancel btn click
function closePlayerConfigform() {
  playerFormOverlay.style.display = "none";
  backdropElem.style.display = "none";
  // remove error class
  Inputform.firstElementChild.classList.remove("error");
  // set the error para to empty
  error.textContent = "";

  // clear the input after a name is entered
  const playerName = document.getElementById("playername");
  playerName.value = "";
}

// for the form form prevent default
function savePlayerConfig(event) {
  event.preventDefault();
  // cretate a new form data object
  // the formdata obj will check all the inputs in the form
  const formData = new FormData(event.target);
  // here we have to pass a refeerence for the input (name)
  const enteredPlayerName = formData.get("playername").trim(); //trim()
  // will remove all the user entered whitespaces

  // check playername is not entered
  // enteredplayername ===""
  if (!enteredPlayerName) {
    error.textContent = "enter a valid name";

    // to change the look of the user input area if a invalid input

    event.target.firstElementChild.classList.add("error");
    return; //if user entered is invalid then the code below return
    // will not be readed
  }

  // select the article that the player belongs  and target the seconf child
  const updatedPlayerDataElement = document.getElementById(
    "player-" + selcetedPlayer
  );
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;
  players[+selcetedPlayer - 1].name = enteredPlayerName;

  closePlayerConfigform();
}
