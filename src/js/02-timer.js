import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


// const inputEl = document.querySelector('input#datetime-picker');
const buttonStartEl = document.querySelector('button[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');


let timerId = null;

const options = {  
  // minDate: "today",
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    if (selectedDates[0].getTime() < Date.now()) {
      // return alert("Please choose a date in the future");
      return Notiflix.Notify.failure('Please choose a date in the future');
    }
    buttonStartEl.removeAttribute('disabled');   
  },
};

const flatpickrObject = flatpickr("#datetime-picker", options);
// console.log(flatpickrObject);

buttonStartEl.setAttribute('disabled', true);

buttonStartEl.addEventListener('click', startTimer);
    

function startTimer() {
  buttonStartEl.setAttribute('disabled', true);
  const choosenDate = flatpickrObject.selectedDates[0].getTime();

  timerId = setInterval(() => {
    const deltaTime = choosenDate - Date.now();
    if (deltaTime <= 0) {
      clearInterval(timerId);
      return;
    }
    const { days, hours, minutes, seconds } = convertMs(deltaTime);
    updateClockFace({ days, hours, minutes, seconds });
  }, 1000);
    
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  console.log({ days, hours, minutes, seconds });

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function updateClockFace({ days, hours, minutes, seconds }) {
  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;  
}