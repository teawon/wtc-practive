class BaseBall {
  #number;

  constructor(number) {
    this.#validate(number);
    this.#number = number;
  }

  #validate(number) {
    if (number.length !== 3) {
      throw Error("[ERROR] 3자리 숫자를 입력해주세요");
    }

    if (new Set(number).size !== 3) {
      throw Error("[ERROR] 중복되지 않는 숫자를 입력해주세요");
    }

    if (number.every((num) => num < 0 || num > 9)) {
      throw Error("[ERROR] 1부터 9까지의 숫자를 입력해주세요");
    }
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
