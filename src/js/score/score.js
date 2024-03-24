export default class Score {
  constructor(element) {
    this.el = element;
  }

  deleteScore() {
    const lastScore = this.el.querySelector('.scoreValue');
    lastScore.remove();
  }

  addNewScore(number) {
    this.deleteScore();
    const item = document.createElement('a');
    item.className = 'scoreValue';
    item.innerText = number;

    this.el.insertBefore(item, null);
  }
}
