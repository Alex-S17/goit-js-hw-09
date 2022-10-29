import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', formHandle);

function formHandle(event) {
  event.preventDefault();
  const firstDelay = Number(event.target.delay.value);
  const delayStep = Number(event.target.step.value);
  const amount = Number(event.target.amount.value);

// Promise creation unit
  let delay = firstDelay;
  for (let i = 1; i <= amount; i += 1) {    
    if (i > 1) {
      delay = delay + delayStep;
    }
    createPromise(i, delay)
      .then(onSuccess)
      .catch(onError);
  }
 
  setTimeout(() => {
    const endTitle = document.createElement('h1');
    endTitle.textContent = "That's all Folks";
    endTitle.style.width = "600px";
    endTitle.style.marginLeft = "auto";
    endTitle.style.marginRight = "auto";
    endTitle.style.marginTop = "200px";
    endTitle.style.color = "red";
    endTitle.style.backgroundColor = "lime";
    endTitle.style.fontSize = "60px";
    endTitle.style.textAlign = "center";
    formEl.after(endTitle);
  }, delay + 1000);
  
  setTimeout(() => {
    const h1El = document.querySelector('h1');
    h1El.remove();
  }, delay + 4000);
}
      
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });  
};

function onSuccess(result) {
  Notiflix.Notify.success(result);  
}

function onError(error) {
  Notiflix.Notify.failure(error);
}

