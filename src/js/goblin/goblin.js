import GoblinPic from '../../img/goblin.png';

export default class Goblin {
  constructor(element, box) {
    this.el = element;
    this.box = box;
  }

  deleteLastGoblin() {
    const goblinImage = this.box.querySelector('.goblin');
    if (goblinImage !== null) {
      goblinImage.remove();
    }
  }

  addNewGoblin(number) {
    this.deleteLastGoblin();
    const item = document.createElement('img');
    item.src = GoblinPic;
    item.className = 'goblin';

    const cells = document.querySelectorAll('.cell');
    cells[number].insertBefore(item, null);
  }
}
