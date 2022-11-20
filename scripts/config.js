//after edit button click

function openPlayerConfigform() {
  playerFormOverlay.style.display = "block";
  backdropElem.style.display = "block";
}

// cancel btn click
function closePlayerConfigform() {
  playerFormOverlay.style.display = "none";
  backdropElem.style.display = "none";
  // remove error class
  Inputform.firstElementChild.classList.remove("error");
  // set the error para to empty
  error.textContent = "";
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
}
