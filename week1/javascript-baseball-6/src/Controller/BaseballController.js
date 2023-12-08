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
    OutputView.printInit();

    while (!this.#isExit) {
      await this.#playGame();
    }
  }

  async #playGame() {
    const computerBaseBall = this.#getComputerAnswer();

    let isPlaying = true;
    while (isPlaying) {
      const playerBaseBall = await this.#getPlayerBaseBall();

      const gameResult = new GameResult(playerBaseBall, computerBaseBall);

      const { ballCount, strikeCount } = gameResult.getResult();
      OutputView.printGameResult(ballCount, strikeCount);

      if (gameResult.checkIsGameEnd()) {
        isPlaying = false;
        OutputView.printCompleteGame();
      }
    }

    await this.#checkExitOrContinue();
  }

  #getComputerAnswer() {
    const computerNumber = this.computer.createRandomNumber();
    const computerBaseBall = new BaseBall(computerNumber);
    return computerBaseBall;
  }

  async #checkExitOrContinue() {
    const userInput = await this.#getContinueOrExitCommand();
    if (userInput === COMMAND.endGame) {
      this.#isExit = true;
    }
  }

  async #getPlayerBaseBall() {
    const playerInput = await InputView.readNumbers();
    BaseBallValidator.baseBallNumberInput(playerInput);

    const playerInputArr = playerInput.split("").map(Number);
    const playerBaseBall = new BaseBall(playerInputArr);

    return playerBaseBall;
  }

  async #getContinueOrExitCommand() {
    const userInput = await InputView.readExitOrContinue();
    BaseBallValidator.exitOrContinueInput(userInput);

    return userInput;
  }
}

export default BaseballController;
