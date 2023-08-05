const appCounter = document.querySelector('.count-title'),
  appDecrement = document.querySelector('.app-decrement'),
  appIncrement = document.querySelector('.app-increment'),
  appReset = document.querySelector('.app-reset');

appIncrement.addEventListener('click', incrementValue);
appDecrement.addEventListener('click', decrementValue);
appReset.addEventListener('click', resetValue);

let count = 0;

function incrementValue() {
  count++;
  appCounter.textContent = count;

  if (count > 0) appCounter.style.color = 'green';
  if (count === 0) appCounter.style.color = 'black';
}

function decrementValue() {
  count--;
  appCounter.textContent = count;

  if (count < 0) appCounter.style.color = 'red';
  if (count === 0) appCounter.style.color = 'black';
}

function resetValue() {
  count = 0;
  appCounter.textContent = count;

  appCounter.style.color = 'black';
}
