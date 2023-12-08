import { Console } from "@woowacourse/mission-utils";

const InputView = {
  async readNumbers() {
    const playerInput = await Console.readLineAsync("숫자를 입력해주세요 :");
    return playerInput;
  },

  async readExitOrContinue() {
    const userInputreadExitOrContinue = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );

    return userInputreadExitOrContinue;
  },
};

export default InputView;
