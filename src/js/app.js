import Goblin from './goblin/goblin';
import Result from './result/result';
import Score from './score/score';

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.button');
  btn.addEventListener('click', () => {
    if (window.popInterval !== undefined && window.popInterval !== 'undefined') {
      window.clearInterval(window.popInterval);
    }
    const res = new Result(document.querySelector('.resultBox'));
    res.deleteResult();

    const score = new Score(document.querySelector('.score'));
    score.addNewScore(0);

    const goblin = new Goblin(document.querySelector('.cell'), document.querySelector('.box'));
    window.goblin = goblin;

    let timer = 0;
    let counter = 0;

    window.popInterval = setInterval(() => {
      const cellContainer = document.querySelectorAll('.cell');
      function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      }
      const number = randomNumber(0, cellContainer.length - 1);
      window.goblin.addNewGoblin(number);
      timer += 1;
      if (!cellContainer.length) clearInterval(window.popInterval);
      if (timer > 4) {
        window.clearInterval(window.popInterval);
        res.addNewResult('Goblin wins');
      }
      const target = document.querySelector('.goblin');

      target.addEventListener('click', () => {
        window.goblin.deleteLastGoblin();
        counter += 1;
        score.addNewScore(counter);
        timer -= 1;
        if (counter === 5) {
          window.clearInterval(window.popInterval);
          res.addNewResult('You win!');
        }
      });
    }, 1000);
  });
});
