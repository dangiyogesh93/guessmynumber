'use strict';
// document.querySelector('#scoreObtained').textContent = 50;

const secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

document.querySelector('.btn').addEventListener('click', function () {
  const userNumber = Number(document.querySelector('#guess').value);

  if (!userNumber) {
    document.querySelector('#message').textContent = 'No Number!!! inserted';
    document.querySelector('#message').style.color = 'red';
  } else if (userNumber === secretNumber) {
    document.querySelector('#message').textContent =
      'Congratulation!!!You Guessed it Right';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('#message').style.color = 'yellow';
    document.querySelector('#secretNumber').textContent = secretNumber;
    document.querySelector('#scoreObtained').style.color = 'green';
    score++;
    highScore = score;
    document.querySelector('#scoreObtained').textContent = score;
    document.querySelector('#highscore').textContent = highScore;
  } else {
    if (score > 1) {
      if (userNumber > secretNumber) {
        document.querySelector('#message').textContent = 'You Guessed too high';
      }
      if (userNumber < secretNumber) {
        document.querySelector('#message').textContent = 'You Guessed too low';
      }
      score--;
      document.querySelector('#scoreObtained').textContent = score;
    } else {
      document.querySelector('#message').textContent =
        'You Lose the Game!!! Play  Again';
    }
  }
});
