import { RACE_CAR } from "./constants.js";

import ValidatorUtil from "./Utils/ValidatorUtli.js";

const { isNotNull, isNotOverLength, isNotShorterLength, isNumber } =
  ValidatorUtil;

const CarRaceValidator = {
  carModel(name) {
    isNotNull(name, "[ERROR] 이름이 존재하지 않습니다");
    isNotOverLength(
      name.length,
      RACE_CAR.maxCarLength,
      "[ERROR] 이름이 5자를 초과합니다"
    );
  },

  RaceModel(cars, tryCount) {
    isNotShorterLength(
      cars.length,
      1,
      "[ERROR] 1개 이상의 자동차가 경기에 참여해야합니다"
    );
    isNumber(tryCount, "[ERROR] 시도 횟수는 숫자여야 합니다");
    isNotShorterLength(tryCount, 1, "[ERROR] 시도 횟수는 1이상이어야 합니다");
  },

  carInput(input) {
    isNotNull(input, "[ERROR] 자동차 이름을 입력해주세요");
  },

  tryCountInput(input) {
    isNotNull(input, "[ERROR] 시도 횟수를 입력해주세요");
    isNumber(input, "[ERROR] 시도 횟수는 숫자여야 합니다");
    isNotShorterLength(input, 1, "[ERROR] 시도 횟수는 1이상이어야 합니다");
  },
};

export default CarRaceValidator;
