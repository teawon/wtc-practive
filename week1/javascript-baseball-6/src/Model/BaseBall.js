import BaseBallValidator from "../BaseBallValidator.js";
class BaseBall {
  #number;

  constructor(number) {
    BaseBallValidator.baseBallValidator(number);
    this.#number = number;
  }

  compareStrikeCount(other) {
    const otherNumber = other.getNumber();
    let strikeCount = 0;
    this.#number.forEach((num, index) => {
      if (num === otherNumber[index]) strikeCount++;
    });

    return strikeCount;
  }

  compareBallCount(other) {
    const otherNumber = other.getNumber();
    let ballCount = 0;
    this.#number.forEach((num, index) => {
      if (num !== otherNumber[index] && otherNumber.includes(num)) ballCount++;
    });

    return ballCount;
  }

  getNumber() {
    return this.#number;
  }
}

export default BaseBall;
