import BaseBall from "../../src/Model/BaseBall";

describe("BaseBall 모델 테스트", () => {
  test("유효한 3자리의 정수를 입력받으면 BaseBall 인스턴스를 생성한다", () => {
    //given
    const number = [1, 2, 3];

    //when
    const baseBall = new BaseBall(number);

    //then
    expect(baseBall.getNumber()).toEqual(number);
  });

  test("유효하지 않은 입력을 받으면 에러가 발생한다", () => {
    //given
    const invalidLenNum = [1, 2, 3, 4];
    const duplicatedNum = [1, 1, 1];
    const invalidRengeNum = [-1, 2, 20];

    //when
    const invalidLenAction = () => new BaseBall(invalidLenNum);
    const duplicatedAction = () => new BaseBall(duplicatedNum);
    const invalidRengeAction = () => new BaseBall(invalidRengeNum);

    //then
    expect(invalidLenAction).toThrow("[ERROR] 3자리 숫자를 입력해주세요");
    expect(duplicatedAction).toThrow(
      "[ERROR] 중복되지 않는 숫자를 입력해주세요"
    );
    expect(invalidRengeAction).toThrow(
      "[ERROR] 1부터 9까지의 숫자를 입력해주세요"
    );
  });

  test("두 BaseBall을 비교해 자리수와 값이 일치하는 스트라이크 개수를 반환한다", () => {
    //given
    const src = [1, 2, 3];
    const target = [4, 2, 1];
    const expectedCount = 1;

    //when
    const srcBaseBall = new BaseBall(src);
    const targetBaseBall = new BaseBall(target);
    const strikeCount = srcBaseBall.compareStrikeCount(targetBaseBall);

    //then
    expect(strikeCount).toEqual(expectedCount);
  });

  test("두 BaseBall을 비교해 값은 있지만 자리수가 일치하지 않는 볼 개수를 반환한다", () => {
    //given
    const src = [1, 2, 3];
    const target = [4, 3, 2];
    const expectedCount = 2;

    //when
    const srcBaseBall = new BaseBall(src);
    const targetBaseBall = new BaseBall(target);
    const ballCount = srcBaseBall.compareBallCount(targetBaseBall);

    //then
    expect(ballCount).toEqual(expectedCount);
  });
});
