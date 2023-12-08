import ValidatorUtil from "./Utils/ValidatorUtil.js";

const { isValidLength, isNotDuplicate, isInRange } = ValidatorUtil;

const BaseBallValidator = {
  baseBallModel: (value) => {
    isValidLength(value, 3, "[ERROR] 3자리 숫자를 입력해주세요");
    isNotDuplicate(value, "[ERROR] 중복되지 않는 숫자를 입력해주세요");
    isInRange(value, 1, 9, "[ERROR] 1부터 9까지의 숫자를 입력해주세요");
  },
};

export default BaseBallValidator;
