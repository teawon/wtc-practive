import GameResult from "../../src/Model/GameResult";
import BaseBall from "../../src/Model/BaseBall";

describe("GameResult 모델 테스트", () => {
  test("두 BaseBall 인스턴스를 입력받아 ball, strike개수를 반환한다 ", () => {
    //given
    const playerBaseBall = new BaseBall([1, 2, 3]);
    const computerBaseBall = new BaseBall([4, 2, 1]);

    //when
    const gameResult = new GameResult(playerBaseBall, computerBaseBall);

    //then
    expect(gameResult.getResult()).toEqual({ ballCount: 1, strikeCount: 1 });
  });

  test("3스트라이크일때 true를 반환한다", () => {
    //given
    const playerBaseBall = new BaseBall([1, 2, 3]);
    const computerBaseBall = new BaseBall([4, 2, 1]);

    //when
    const gameResult = new GameResult(playerBaseBall, computerBaseBall);

    //then
    expect(gameResult.checkIsGameEnd).toBeTruthy();
  });
});
