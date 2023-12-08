import Computer from "../../src/Model/Computer";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe("Computer 모델 테스트", () => {
  test("3자리의 랜덤 정수를 생성한다", () => {
    //given
    const randoms = [1, 3, 5];
    mockRandoms(randoms);

    //when
    const computer = new Computer();

    //then
    expect(computer.createRandomNumber()).toEqual(randoms);
  });
});
