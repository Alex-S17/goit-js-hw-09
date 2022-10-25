const buttonStartEl = document.querySelector('button[data-start]');
const buttonStopEl = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');

let timerID = null;

buttonStopEl.setAttribute('disabled', true);

buttonStartEl.addEventListener('click', onStartClick);
buttonStopEl.addEventListener('click', onStopClick);

function onStartClick() {
  buttonStartEl.setAttribute('disabled', true);
  buttonStopEl.removeAttribute('disabled');
 
  timerID = setInterval(() => {
  bodyEl.style.backgroundColor = getRandomHexColor()
  }, 1000);  
}

function onStopClick() {
  clearInterval(timerID);
  buttonStartEl.removeAttribute('disabled');
  buttonStopEl.setAttribute('disabled', true);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

