import { MissionUtils } from "@woowacourse/mission-utils";
import CarRaceValidator from "../CarRaceValidator.js";
class Car {
  #name;
  #place;

  constructor(name) {
    CarRaceValidator.carModel(name);
    this.#name = name;
    this.#place = 0;
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
