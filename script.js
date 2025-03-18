let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let startTime;
let isRunning = false;

const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const millisecondsElement = document.getElementById('milliseconds');

const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    startTime = Date.now() - milliseconds; // Adjust start time for accurate milliseconds
    requestAnimationFrame(updateTime);
  }
}

function pauseTimer() {
  isRunning = false;
}

function resetTimer() {
  isRunning = false;
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateDisplay();
}

function updateTime() {
  if (isRunning) {
    const elapsedTime = Date.now() - startTime; // Calculate elapsed time in milliseconds
    milliseconds = elapsedTime % 1000; // Get milliseconds part
    const totalSeconds = Math.floor(elapsedTime / 1000); // Convert to total seconds
    seconds = totalSeconds % 60; // Get seconds part
    const totalMinutes = Math.floor(totalSeconds / 60); // Convert to total minutes
    minutes = totalMinutes % 60; // Get minutes part
    hours = Math.floor(totalMinutes / 60); // Get hours part

    updateDisplay();
    requestAnimationFrame(updateTime); // Continuously update
  }
}

function updateDisplay() {
  hoursElement.textContent = padTime(hours);
  minutesElement.textContent = padTime(minutes);
  secondsElement.textContent = padTime(seconds);
  millisecondsElement.textContent = padMilliseconds(milliseconds); // Display milliseconds correctly
}

function padTime(time) {
  return time < 10 ? `0${time}` : time; // Add leading zero if needed
}

function padMilliseconds(time) {
  return time < 10 ? `00${time}` : time < 100 ? `0${time}` : time; // Ensure 3 digits for milliseconds
}