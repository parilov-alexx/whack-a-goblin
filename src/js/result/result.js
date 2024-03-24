export default class Result {
  constructor(element) {
    this.el = element;
  }

  deleteResult() {
    const lastResult = this.el.querySelector('.result');
    if (lastResult !== null) {
      lastResult.remove();
    }
  }

  addNewResult(text) {
    const item = document.createElement('a');
    item.className = 'result';
    item.innerText = text;

    this.el.insertBefore(item, null);
  }
}
