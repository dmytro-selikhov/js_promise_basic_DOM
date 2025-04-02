'use strict';

const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve('Promise1 resolved');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise2 rejected'));
  }, 3000);
});

function appendMessage(text, isError = false) {
  const div = document.createElement('div');

  div.className = 'message' + (isError ? ' error-message' : '');
  div.textContent = text;
  document.body.appendChild(div);
}

promise1
  .then(() => appendMessage('Promise was resolved!'))
  .catch(() => appendMessage('Promise was rejected!', true));

promise2
  .then(() => appendMessage('Promise was resolved!'))
  .catch(() => appendMessage('Promise was rejected!', true));
