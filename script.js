const combinedTimeDisplay = document.getElementById('combinedTime');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let timer;
let minutes = 0;
let seconds = 0;
let tenths = 0;

function updateDisplay() {
  const combinedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${tenths.toString().padStart(2, '0')}`;
  combinedTimeDisplay.textContent = combinedTime;
}

startButton.addEventListener('click', function() {
  startButton.disabled = true;
  stopButton.disabled = false;

  timer = setInterval(function() {
    tenths++;
    if (tenths === 100) {
      seconds++;
      tenths = 0;
    }
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
    updateDisplay();
  }, 10); // 10ミリ秒ごとに更新 (0.01秒ごと)
});

stopButton.addEventListener('click', function() {
  startButton.disabled = false;
  stopButton.disabled = true;

  clearInterval(timer);
});

resetButton.addEventListener('click', function() {
  startButton.disabled = false;
  stopButton.disabled = true;

  clearInterval(timer);
  minutes = 0;
  seconds = 0;
  tenths = 0;
  updateDisplay();
});

