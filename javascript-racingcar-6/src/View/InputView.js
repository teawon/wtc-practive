import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constants";
const InputView = {
  async readCarNames() {
    const carsInput = await Console.readLineAsync(
      `경주할 자동차 이름을 입력하세요(이름은 쉼표(${MESSAGE.carsSeparator}) 기준으로 구분)`
    );
    return carsInput;
  },

  async readTryCount() {
    let tryCountInput = await Console.readLineAsync(
      "시도할 횟수는 몇회인가요?\n"
    );
    return tryCountInput;
  },
};

export default InputView;
