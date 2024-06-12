let input = document.getElementById("inp");
let text = document.getElementById("texts");

function add() {
  if (input.value === "") {
    alert("Please enter work");
  } else {
    let newele = document.createElement("ul");
    newele.innerText = input.value;
    text.appendChild(newele);
    input.value = "";
  }
}

document.getElementById("btn").onclick = add;

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    document.getElementById("btn").click();
  }
});

window.addEventListener("beforeunload", function (event) {
  const message =
    "Are you sure you want to leave this page? data e may not be saved.";
  event.returnValue = message;
  return message;
});
// script.js
let timer;
let isRunning = false;
let timeLeft = 1500; // Time in seconds (25 minutes)
const startPauseButton = document.getElementById("start-pause");
const resetButton = document.getElementById("reset");
const setTimeButton = document.getElementById("setTime");
const customTimeInput = document.getElementById("customTime");
const timeDisplay = document.getElementById("time-display");

// startPauseButton.addEventListener('click' , circlef =()=>{

// })
function updateDisplay() {
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  timeDisplay.textContent = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function startPauseTimer() {
  if (!isRunning) {
    isRunning = true;
    // circle.styele.borderTop ="red"
    startPauseButton.classList.remove("play");
    startPauseButton.classList.add("pause");

    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateDisplay();
      } else {
        clearInterval(timer);
        isRunning = false;
      }
    }, 1000);
  } else {
    isRunning = false;
    startPauseButton.classList.remove("pause");
    startPauseButton.classList.add("play");
    clearInterval(timer);
  }
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  startPauseButton.classList.remove("pause");
  startPauseButton.classList.add("play");
  timeLeft = 1500; // Reset to 25 minutes by default
  updateDisplay();
}

function setCustomTime() {
  const customTime = parseInt(customTimeInput.value);
  if (!isNaN(customTime) && customTime > 0) {
    timeLeft = customTime * 60; // Convert minutes to seconds
    updateDisplay();
  } else {
    alert("Please enter a valid number of minutes.");
  }
}

startPauseButton.addEventListener("click", startPauseTimer);
resetButton.addEventListener("click", resetTimer);
setTimeButton.addEventListener("click", setCustomTime);

updateDisplay();
