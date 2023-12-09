import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  #name;
  #place;

  constructor(name) {
    this.#validator(name);
    this.#name = name;
    this.#place = 0;
  }

  #validator(name) {
    if (!name) {
      throw new Error("[ERROR] 이름이 존재하지 않습니다");
    }
    if (name.length > 5) {
      throw new Error("[ERROR] 이름이 5자를 초과합니다");
    }
  }

  tryMoveOrStop() {
    const number = MissionUtils.Random.pickNumberInRange(0, 9);
    if (number >= 4) {
      this.#move();
    }
  }

  #move() {
    this.#place++;
  }

  getName() {
    return this.#name;
  }

  getPlace() {
    return this.#place;
  }
}

export default Car;
