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
    return this.#strikeCount === 3;
  }
}

export default GameResult;
