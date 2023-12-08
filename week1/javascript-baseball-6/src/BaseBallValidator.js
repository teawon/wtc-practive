import ValidatorUtil from "./Utils/ValidatorUtil.js";
import { BASEBALL, COMMAND } from "./constants.js";
const { isValidLength, isNotDuplicate, isInRange, isNotNull } = ValidatorUtil;

const BaseBallValidator = {
  baseBallModel: (value) => {
    isValidLength(
      value,
      BASEBALL.baseBallLen,
      `[ERROR] ${BASEBALL.baseBallLen}자리 숫자를 입력해주세요`
    );
    isNotDuplicate(value, `[ERROR] 중복되지 않는 숫자를 입력해주세요`);
    isInRange(
      value,
      BASEBALL.baseBallMinNum,
      BASEBALL.baseBallMaxNum,
      `[ERROR] 1부터 9까지의 숫자를 입력해주세요`
    );
  },

  baseBallNumberInput: (input) => {
    isNotNull(input, "[ERROR] 입력값이 없습니다.");

    const inputArr = input.split("").map(Number);
    isValidLength(
      inputArr,
      BASEBALL.baseBallLen,
      "[ERROR] 3자리 숫자를 입력해주세요"
    );
    isNotDuplicate(inputArr, "[ERROR] 중복되지 않는 숫자를 입력해주세요");
    isInRange(
      inputArr,
      BASEBALL.baseBallMinNum,
      BASEBALL.baseBallMaxNum,
      "[ERROR] 1부터 9까지의 숫자를 입력해주세요"
    );
  },

  exitOrContinueInput: (input) => {
    isNotNull(input, "[ERROR] 입력값이 없습니다.");
    if (input !== COMMAND.newGame && input !== COMMAND.endGame) {
      throw new Error("[ERROR] 1 또는 2를 입력해주세요");
    }
  },
};

export default BaseBallValidator;
