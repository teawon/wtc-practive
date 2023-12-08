import BaseBall from "../Model/BaseBall.js";
import Computer from "../Model/Computer.js";
import GameResult from "../Model/GameResult.js";
import InputView from "../Views/InputView.js";
import OutputView from "../Views/OutputView.js";
import BaseBallValidator from "../BaseBallValidator.js";
import { COMMAND } from "../constants.js";
class BaseballController {
  #isExit;

  constructor() {
    this.#isExit = false;
    this.computer = new Computer();
  }
  async start() {
    // 초기 메세지 출력
    OutputView.printInit();

    while (!this.#isExit) {
      // 초기값 세팅
      const computerBaseBall = this.#getComputerAnswer();

      // 게임 진행 (맞출 때 까지 반복)
      let isPlaying = true;
      while (isPlaying) {
        /// 사용자 입력을 받아 BaseBall 객체 생성
        const playerInput = await InputView.readNumbers();
        BaseBallValidator.baseBallNumberInput(playerInput);

        const playerInputArr = playerInput.split("").map(Number);
        const playerBaseBall = new BaseBall(playerInputArr);

        /// BaseBall 결과 비교
        const gameResult = new GameResult(playerBaseBall, computerBaseBall);
        const { ballCount, strikeCount } = gameResult.getResult();

        OutputView.printGameResult(ballCount, strikeCount);

        if (gameResult.checkIsGameEnd()) {
          isPlaying = false;
          OutputView.printCompleteGame();
        }
      }
      // 재 시작 여부 확인
      const userInput = await InputView.readExitOrContinue();
      BaseBallValidator.exitOrContinueInput(userInput);
      if (userInput === COMMAND.endGame) {
        this.#isExit = true;
      }
    }
  }

  #getComputerAnswer() {
    const computerNumber = this.computer.createRandomNumber();
    const computerBaseBall = new BaseBall(computerNumber);
    return computerBaseBall;
  }
}

export default BaseballController;
