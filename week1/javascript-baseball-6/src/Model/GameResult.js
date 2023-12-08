import { BASEBALL } from "../constants.js";

class GameResult {
  #ballCount;
  #strikeCount;

  constructor(playerBaseBall, computerBaseBall) {
    this.#ballCount = computerBaseBall.compareBallCount(playerBaseBall);
    this.#strikeCount = computerBaseBall.compareStrikeCount(playerBaseBall);
  }

  getResult() {
    return { ballCount: this.#ballCount, strikeCount: this.#strikeCount };
  }

  checkIsGameEnd() {
    return this.#strikeCount === BASEBALL.baseBallLen;
  }
}

export default GameResult;
