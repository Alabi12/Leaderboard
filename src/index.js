import './style.css';
import { postScore, getScores } from './api.js';

const list = document.querySelector('.list');
const refreshBtn = document.querySelector('.refresh-btn');
const form = document.querySelector('.form');

const populate = async () => {
  try {
    let listMarkup = '';
    const response = await getScores();
    const scores = response.result;
    scores.forEach((score) => {
      listMarkup += `<li class="list-item">${score.user}: ${score.score}</li>`;
    });
    list.innerHTML = '';
    list.insertAdjacentHTML('afterbegin', listMarkup);
  } catch (error) {
    console.log(error);
  }
};

// Refresh UI
refreshBtn.addEventListener('click', populate);

// Submit data
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  const score = e.target.score.value;

  postScore(name, score);
  e.target.name.value = '';
  e.target.score.value = '';
});
