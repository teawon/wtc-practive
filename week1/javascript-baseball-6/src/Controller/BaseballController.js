import { Console } from "@woowacourse/mission-utils";
import BaseBall from "../Model/BaseBall.js";
import Computer from "../Model/Computer.js";
import GameResult from "../Model/GameResult.js";

class BaseballController {
  #isExit;

  constructor() {
    this.#isExit = false;
    this.computer = new Computer();
  }
  async start() {
    // 초기 메세지 출력
    Console.print("숫자 야구 게임을 시작합니다.\n");

    while (!this.#isExit) {
      // 초기값 세팅
      const computerBaseBall = this.#getComputerAnswer();

      // 게임 진행 (맞출 때 까지 반복)
      let isPlaying = true;
      while (isPlaying) {
        /// 사용자 입력을 받아 BaseBall 객체 생성
        const playerInput = Console.readLineAsync("숫자를 입력해주세요 :");
        if (!playerInput) {
          throw new Error("[ERROR] 입력값이 없습니다.");
        }
        if (playerInput.length !== 3) {
          throw new Error("[ERROR] 3자리 숫자를 입력해주세요");
        }
        const playerInputArr = playerInput.split("");
        const playerBaseBall = new BaseBall(playerInputArr);

        /// BaseBall 결과 비교
        const gameResult = new GameResult(playerBaseBall, computerBaseBall);
        const { ballCount, strikeCount } = gameResult.getResult();
        this.#printResult(ballCount, strikeCount);
        if (gameResult.checkIsGameEnd()) {
          isPlaying = false;
          Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료\n");
        }
        // 재 시작 여부 확인
        const userInput = Console.readLineAsync(
          "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
        );
        if (userInput === "2") {
          this.#isExit = true;
        }
      }
    }
  }

  #getComputerAnswer() {
    const computerNumber = this.computer.createRandomNumber();
    const computerBaseBall = new BaseBall(computerNumber);
    return computerBaseBall;
  }

  #printResult(ballCount, strikeCount) {
    let result = "";

    if (ballCount === 0 && strikeCount === 0) {
      Console.print("낫싱\n");
    }
    if (ballCount > 0) {
      result += `${ballCount}볼`;
    }
    if (strikeCount > 0) {
      result += `${strikeCount}스트라이크`;
    }
    Console.print(`${result}\n`);
  }
}

export default BaseballController;
