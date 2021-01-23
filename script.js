'use strict';
// document.querySelector('#scoreObtained').textContent = 50;

const secretNumber = Math.floor(Math.random() * 20 + 1);

document.querySelector('#btn').addEventListener('click', function () {
  const userNumber = Number(document.querySelector('#guess').value);

  if (!userNumber) {
    document.querySelector('#message').textContent = 'No Number!!! inserted';
    document.querySelector('#message').style.color = 'red';
  } else if (userNumber === secretNumber) {
    document.querySelector('#message').textContent =
      'Congratulation!!!You Guessed it Right';
    document.querySelector('#message').style.color = 'green';
    document.querySelector('#secretNumber').textContent = secretNumber;
  } else {
    document.querySelector('#message').textContent =
      'You Guessed it wrong sorry';
    document.querySelector('#message').style.color = 'red';
    document.querySelector('#secretNumber').textContent = secretNumber;
  }
});
