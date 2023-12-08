import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  printInit() {
    Console.print("숫자 야구 게임을 시작합니다.\n");
  },

  printGameResult(ballCount, strikeCount) {
    let result = "";

    if (ballCount === 0 && strikeCount === 0) {
      Console.print("낫싱");
      return;
    }
    if (ballCount > 0) {
      result += `${ballCount}볼`;
    }
    if (strikeCount > 0) {
      result += ` ${strikeCount}스트라이크`;
    }
    Console.print(`${result.trim()}\n`);
  },

  printCompleteGame() {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료\n");
  },
};

export default OutputView;
