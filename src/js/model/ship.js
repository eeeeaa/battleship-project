export default class Ship {
  #hitCount;
  #isSunk;
  constructor(length) {
    if (length <= 0) throw new Error(`invalid ship length of ${length}`);
    this.length = length;
    this.#hitCount = 0;
    this.#isSunk = false;
  }

  getHitCount = () => this.#hitCount;

  hit = () => {
    this.#hitCount = this.#hitCount + 1;
  };

  isSunk = () => {
    if (this.#hitCount >= this.length) {
      this.#isSunk = true;
    } else {
      this.#isSunk = false;
    }
    return this.#isSunk;
  };
}
