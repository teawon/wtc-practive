import { MissionUtils } from "@woowacourse/mission-utils";
import { BASEBALL } from "../constants.js";
class Computer {
  createRandomNumber() {
    const computer = [];
    while (computer.length < BASEBALL.baseBallLen) {
      const number = MissionUtils.Random.pickNumberInRange(
        BASEBALL.baseBallMinNum,
        BASEBALL.baseBallMaxNum
      );
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    return computer;
  }
}

export default Computer;
